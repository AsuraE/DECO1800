function fill_page(parsed_data_map)
{
    // Array(Language Name => Map(English=>Indigenous))


    // Sort data by language
    var sorted_data = new Map([parsed_data_map.entries()].sort());
    var allowed_languages = ['Yuggera', 'Yugarabul', 'Turubal', 'Yugambeh'];

    $.each(parsed_data_map, function(language_name, word_map) {
        if (allowed_languages.includes(language_name)) {
            var html = '<a onClick="sessionStorage.language=\'' + language_name + '\';" href=\'language.html\'><div><h1>' + language_name + '</h1><img src="images/language.jpg" alt="language" height=150px width=200px></div></a>';
            document.getElementById('languages').innerHTML += html;
        }
    });
}