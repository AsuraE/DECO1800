<?php
    include 'animal_fetcher.php';

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
    //header('Content-type: image/jpeg');
    $json = generate_images("Turubul");
    // echo var_dump($json);

    function generate_images($language) {
        // Grab the animals from the language we want
        $wordlist = get_animal_wordlist($language);
        $image_locations = array();
        foreach($wordlist as $eng_animal => $ind_animal) {
            // Build string for filename
            $filepath = "../images/memory_game/" . $eng_animal . "_" . $ind_animal . ".jpg";
            // Check if file exists - if it does then do not create new image 
            if (!file_exists($filepath)) {
                // Create Image From Existing File
                $png_image = imagecreatefrompng("../images/memory_game/" . $eng_animal . ".png");
                // Allocate A Color For The Text
                $black = imagecolorallocate($png_image, 0, 0, 0);
                // Set Text to Be Printed On Image
                $text = $ind_animal;
                $x = 100;
                $y = 1400;
                $size = 100;
                $angle = 0;
                $font = __DIR__ . "\\fonts\FredokaOne-Regular.ttf";
                // Print Text On Image
                imagettftext($png_image, $size, $angle, $x, $y, $black, $font, $text);
                $small_image = imagescale($png_image, 300);
                // Save image to disk
                imagejpeg($small_image, $filepath);
                // Clear Memory
                imagedestroy($png_image);
                imagedestroy($small_image);
            }
            // Push image location to array
            array_push($image_locations, $filepath);
        }
        
        echo json_encode($image_locations);
    }
?> 