<?php
/**
   Read in coords from config file
   Config file records where each part of the body is and where each label should be
   Figure Builder takes JSON, matches each entry to the appropriate body part, places the label in the correct place
   and draws a line from the label to the body part.
   Exports the final image to the backend.
   Should cache results, if cache not updated then don't update figure.
   Use gd for image editing?
*/


Class FigureBuilder 
{

    /** 
    *  Constructor
    */
    public function __construct()
    {
        // Class Constructor
    }

    /**
    *  Takes in JSON object, parses body parts, and appends them to 
    *  their appropriate location on the base figure image.
    *  GD should be able to create the actual image
    */
    public function build_figure()
    {

    }

    /**
    *  Read in locations for labels and body parts from config file
    */
    private function read_config()
    {
        // Read from file, store as triplet (bodypart, partlocation, labellocation)
    }

  
}