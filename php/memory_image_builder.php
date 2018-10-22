<?php

// Access data.gov, grab wordlist for animals
// Filter out for language we want
// Once got, pass wordlist to image builder
// On image build completion, return array of file locations

/* With data - 
    Strip to letters before whitespace or '/'
    Convert to lowercase
    Load with name.png
    Save as smaller image (400x400 should do)
*/
    ini_set('display_errors', 1);
error_reporting(E_ALL);
    //Set the Content Type
      // header('Content-type: image/jpeg');

      // Create Image From Existing File
      $png_image = imagecreatefrompng('../images/memory_game/crow.png');

      // Allocate A Color For The Text
      $black = imagecolorallocate($png_image, 0, 0, 0);

      // Set Text to Be Printed On Image
      $text = "Crow";
      $x = 75;
      $y = 300;
      $size = 20;
      $angle = 0;
      $font = '..\fonts\consola.ttf';

      // Print Text On Image
      imagettftext($png_image, $size, $angle, $x, $y, $black, $font, $text);

      // Send Image to Browser
      imagejpeg($png_image);

      // Clear Memory
      imagedestroy($png_image);
    ?> 