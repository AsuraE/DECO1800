<?php

function get_animal_wordlist($language)
{
    // PHP errors are hidden by default, but we can turn them on
    ini_set("display_errors", 1);
    error_reporting(E_ALL ^ E_NOTICE);


    $url = "https://data.gov.au/api/3/action/datastore_search?resource_id=3e39dd7d-e777-4f47-9160-95aaca34bff5";
    $response = file_get_contents($url);
    $data = json_decode($response, true);
    $animals = array();
    $needed_animals = array('crow', 'dingo wild dog', 'emu', 'kangaroo', 'koala', 'possum', 'sugar glider', 'wallaby');
    
    if (is_array($data)) {
        foreach($data["result"]["records"] as $recordKey => $recordValue) {
            // strip then check if word we need
            $english = str_replace("/", " ", strtolower(trim($recordValue["English"])));
            if(in_array($english, $needed_animals)) {
                $ind = $recordValue[$language];
                $animals[$english] = $ind;
            }
        }
    }
    return $animals;
    
}

?>