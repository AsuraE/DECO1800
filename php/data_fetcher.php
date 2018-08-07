<?php
/**
   Class to grab all datasets from the indigenous word list page on data.gov.au.
   Each word list is stored as a separate dataset
   Return as:  Map(LanguageName: Map(EnglishName: IndigenousName))
*/


Class DataFetcher 
{

    private $parsed_data_map;

    /** 
    *  Constructor
    */
    public function __construct()
    {
        // On load, get data from web
        $resource_ids = get_resource_ids();
        $datasets = query_datasets($resource_ids);
        $parsed_data_map = parse_datasets($datasets);
    }

    /**
    *  Get resource_id of all word lists on the website. Returns JSON object containing all word lists available
    */
    private function get_resource_ids()
    {
        // Regex pattern to match only on word list entries
        $pattern = "\w \bword list\b";
        $url = "https://data.gov.au/api/3/action/package_show?id=fa0667b1-9e0d-4aef-baa1-e20357a769b6";
        $response = file_get_contents($url);
        // Decode JSON object into an associative array
        $response_array = json_decode($response, true);
        $resource_ids = array();

        // Take each entry from the response, check if it's a word list and store the resource id if it is
        foreach($response_array as $entry) {
            $name = $entry->name;

            if (preg_match($pattern, $name)) {
                // Grab the name of the language
                $language = explode(' ', trim($entry->name))[0];
                array_push($resource_ids, array($language, $entry->id));
            }
        }

        return resource_ids;
    }

    /**
    *  Queries the SLQ dataset to return all words and their meanings
    *  Returns a map of LanguageName => JSON Object
    */
    private function query_datasets($resource_ids) 
    {
        // Build all the different dataset urls and grab all datasets
        $baseurl = "https://data.gov.au/api/3/action/datastore_search?resource_id=";
        $datasets = array();

        foreach ($resource_ids as $resource_id) {
            $response = file_get_contents($baseurl.$resource_id[1]);
            $datasets[$resource_id[0]] = $response;
        }

        return datasets;
    }

    /** 
    *  Parse the returned JSON object(s) into a LanguageName => Map(EnglishName => IndigenousName) map.
    */
    private function parse_datasets($datasets)
    {
        $namepairs = array();
        $parsed_data = array();

        foreach ($datasets as $dataset) {
            $namepairs = json_decode($dataset[1], true);
            $parsed_data[$dataset[0]] = $namepairs;
        }

        return $parsed_data;
    }

    public function get_parsed_data() 
    {
        return $parsed_data_map;
    }
}