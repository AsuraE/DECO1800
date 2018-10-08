function fill_page(parsed_data_map)
{
    // Array(Language Name => Map(English=>Indigenous))


    // Sort data by language
    var sorted_data = new Map([parsed_data_map.entries()].sort());
    console.log("Test 0: " + parsed_data_map.entries());
    $.each(parsed_data_map, function(language_name, word_map) {
        var html = '<a href=\'language.html\'><div><h1>' + language_name + '</h1><img src="images/language.jpg" alt="language" height=150px width=200px></div></a>';
        document.getElementById('languages').innerHTML += html;
    });
}