/**
  * Client side implementation to fetch all datasets from the indigenous word list page on data.gov.au.
  * Each word list is stored as a separate dataset
  *  Return as:  Map(LanguageName: Map(EnglishName: IndigenousName))
*/
function get_parsed_data() 
{
    var resource_ids_map = get_resource_ids();
    var parsed_data_map = parse_datasets(resource_ids);

    return parsed_data_map;
}


/**
*  Get resource_id of all word lists on the website. 
*/
function get_resource_ids()
{
    var resource_ids_map;       
    var data = {
        resource_id: "fa0667b1-9e0d-4aef-baa1-e20357a769b6"
    }

    $.ajax({
        url: "http://data.gov.au/api/action/datastore_search",
        data: data,
        dataType: "jsonp", // We use "jsonp" to ensure AJAX works correctly locally (otherwise XSS).
        cache: true,
        success: function(data) {
            // Regex pattern to match only on word list entries
            var pattern = new RegExp(/\w \bword list\b/g);

            $.each(data.result.records, function(record_key, record_value) {
                // regex record_value["name"] to match a word list
                // then form a map of wordlist: resource_id
                if (record_value["name"].match(pattern)) {
                    var language = record_value["name"].split(" ")[0];
                    resource_ids_map[language] = record_value["id"];
                }
            });
        }
    });

    return resource_ids_map;
}


/** 
*  Parse the returned JSON object(s) into a LanguageName => Map(EnglishName => IndigenousName) map.
*/
function parse_datasets(datasets)
{
    var baseurl = "https://data.gov.au/api/3/action/datastore_search?resource_id=";
    var parsed_data_map;

    $.each(datasets, function(language_name, resource_id) {
        $.ajax({
        url: baseurl,
        data: {resource_id: resource_id},
        dataType: "jsonp", // We use "jsonp" to ensure AJAX works correctly locally (otherwise XSS).
        cache: true,
        success: function(data) {
            // Datasets are ordered so that English is column 1 and indigenous is column 2
            // A better solution would be to regex the language name to the column name to ensure
            // a match without relying on this assumption, but that's restricted by time at the moment
            $.each(data.result.records, function(record_index, record_value) {
                var language_map[record_value[1]] = record_value[2];
            });

            parsed_data_map[language_name] = language_map;
        }
    });

    return parsed_data_map;
}
