$(document).ready(get_parsed_data());

/**
  * Client side implementation to fetch all datasets from the indigenous word list page on data.gov.au.
  * Each word list is stored as a separate dataset
  *  Return as:  Map(LanguageName: Map(EnglishName: IndigenousName))
*/
function get_parsed_data() 
{
    var resource_ids_map = get_resource_ids();
    // var parsed_data_map = parse_datasets(resource_ids_map);

    // return parsed_data_map;
}


/**
*  Get resource_id of all word lists on the website. 
*/
function get_resource_ids()
{
    var resource_ids_map = new Object();       

    $.ajax({
        url: "https://data.gov.au/api/3/action/package_show?id=fa0667b1-9e0d-4aef-baa1-e20357a769b6",
        dataType: "jsonp", // We use "jsonp" to ensure AJAX works correctly locally (otherwise XSS).
        cache: true,
        success: function(data) {
            // Regex pattern to match only on word list entries
            var pattern = new RegExp(/\w \bword list\b/g);

            $.each(data.result.resources, function(record_key, record_value) {
                // regex record_value["name"] to match a word list
                // then form a map of wordlist: resource_id
                if (record_value["name"].match(pattern)) {
                    var language = record_value["name"].split(" ")[0];
                    resource_ids_map[language] = record_value["id"];
                }
            });
            parse_datasets(resource_ids_map);
        }
    });
}

/** 
*  Parse the returned JSON object(s) into a LanguageName => Map(EnglishName => IndigenousName) map.
*/
function parse_datasets(resource_ids_map)
{
    var baseurl = "https://data.gov.au/api/action/datastore_search";
    var parsed_data_map = new Object();

    $.each(resource_ids_map, function(language_name, resource_id) {
        $.ajax({
        url: baseurl,
        data: {resource_id: resource_id},
        dataType: "jsonp", // We use "jsonp" to ensure AJAX works correctly locally (otherwise XSS).
        cache: true,
        success: function(data) {
            var language_map = new Object();
            // Datasets are ordered so that English is column 1 and indigenous is column 2
            // A better solution would be to regex the language name to the column name to ensure
            // a match without relying on this assumption, but that's restricted by time at the moment
            $.each(data.result.records, function(record_index, record_value) {
                language_map[record_value["English"]] = record_value[language_name];
            });
            // console.log("Language: " + language_name + ". Map: " + JSON.stringify(language_map));
            parsed_data_map[language_name] = language_map;  
            var html = '<div><h1>' + language_name + '</h1><a href=\'language.html\'><img src="images/language.jpg" alt="language" height=150px width=200px></div>';
            document.getElementById('languages').innerHTML += html;
        }
        });
    });

    // return parsed_data_map;
}

// function build_data_map()
// {
//     var parsed_data_map;
// }