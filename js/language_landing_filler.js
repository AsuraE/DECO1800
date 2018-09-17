$(document).ready(fill_page());

function fill_page()
{
    // Array(Language Name => Map(English=>Indigenous))
    parsed_data_map = get_parsed_data();

    $.each(parsed_data_map, function(language_name, word_map) {
        console.log(language_name);
        var html = '<div><h1>' + language_name + '</h1><img src="images/language.jpg" alt="language" height=150px width=200px></div>';
        document.getElementById('languages').innerHTML += html;
    });
}