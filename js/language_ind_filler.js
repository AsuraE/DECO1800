$(document).ready(function() {
	alert("Document is ready");
)}; 



var location_array= new Array(); 
var language_array= new Array (); 
var people_array = new Array();   



var language = localStorage.getItem("language");

/*Data for Yugara */ 
location_array["Yugara"]="Yugara a tribe of Australian Aboriginal people which inhabited the territories from 
Moreton Bay to Toowoomba including the city of Brisbane 
(including Ipswich) before European settlement of Australia.
This group is one of the traditional custodians of the land over which much of Brisbane is built"; 

language_array["Yugara"]="Yugara is classified as belonging to the Durubalic subgroup of the Pama–Nyungan languages, 
but is also treated as the general name for the languages of the Brisbane area of which Turrbal 
has historically been considered a dialect.[4] The Australian English word 'yakka' 
(loosely meaning 'work', as in 'hard yakka') 
came from the Jagera language (yaga, 'strenuous work')."

places_array["Yugara"]="Map of Traditional Lands of Australian Aboriginals around Brisbane.
Meebatboogan, Mount Greville, Moogerah Peaks National Park.
Cooyinnirra, Mount Mitchell, Main Range National Park.
Booroongapah, Flinders Peak, Teviot Range.
Ginginbaar, Mount Blaine, Teviot Range."


/*Data for Yugarabul. Please note it is the same as for Yugara */
location_array["Yugara"]="Yugara a tribe of Australian Aboriginal people which inhabited the territories from 
Moreton Bay to Toowoomba including the city of Brisbane 
(including Ipswich) before European settlement of Australia.
This group is one of the traditional custodians of the land over which much of Brisbane is built"; 

language_array["Yugara"]="Yugara is classified as belonging to the Durubalic subgroup of the Pama–Nyungan languages, 
but is also treated as the general name for the languages of the Brisbane area of which Turrbal 
has historically been considered a dialect.[4] The Australian English word 'yakka' 
(loosely meaning 'work', as in 'hard yakka') 
came from the Jagera language (yaga, 'strenuous work')."

people_array["Yugara"]="Map of Traditional Lands of Australian Aboriginals around Brisbane.
Meebatboogan, Mount Greville, Moogerah Peaks National Park.
Cooyinnirra, Mount Mitchell, Main Range National Park.
Booroongapah, Flinders Peak, Teviot Range.
Ginginbaar, Mount Blaine, Teviot Range."

/*Data for Yugambeh */

location_array["Yugambeh"]="Their traditional lands are located in south-east Queensland and north-east 
New South Wales, now within the Logan City, Gold Coast, Scenic Rim, and Tweed City regions."

language_array["Yugambeh"]="The Yugambeh language is also known as the Tweed-Albert language, a dialect 
cluster of the wider Bandjalangic branch of the Pama–Nyungan language family.[4] 
At the 2016 Census, 22 people reported being speakers of the language. 
This was the first census where Yugambeh was included 
in the Australian Standard Classification of Languages as Yugambeh (8965)."

people_array["Yugambeh"]="Billy Drumley - Indigenous community leader
Ellen van Neerven - Writer"

/*Data for Turubul */

location_array["Turubul"]= "Brisbane area north to Caboolture and the Sunshine Coast."

language_array["Turubul"] = "Linguistic research, including AUSTLANG and AIATSIS indicate there is some 
uncertainty around Turubul including whether it refers to a dialect or a group 
within the North Brisbane Region. Historical documentation from settlers, missionaries 
and others record words from Turubul since the 1840s. There are shared words between Turubul and neighbouring languages of 
Kabi Kabi to the north and Yugara / Yuggera to the south."


people_array["Turubul"]="Uncle Joe Kirk"



 

var locationHTML = "<h1>location</h1><p>location_array["Yugara"]</p>";
var languageHTML = "<h1>language</h1><p>langauge_array["Yugara"]</p>";
var placesHTML = "<h1>places</h1><p>people_array["Yugara"]</p>"

document.getElementById("location").innerHTML = locationHTML;
document.getElementById("language").innerHTML = languageHTML;
document.getElementById("places").innerHTML = placesHTML; */



