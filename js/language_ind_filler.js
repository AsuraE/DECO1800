



var location_array = new Array(); 
var language_array = new Array(); 
var places_array = new Array();
var people_array = new Array();   



var language = sessionStorage.getItem('language');

// alert('Selected Language is: ' + language);


/*Data for Yugara */ 
location_array['Yuggera']='Yugara a tribe of Australian Aboriginal people which inhabited the territories from Moreton Bay to Toowoomba including the city of Brisbane (including Ipswich) before European settlement of Australia. This group is one of the traditional custodians of the land over which much of Brisbane is built';

language_array['Yuggera']='Yugara is classified as belonging to the Durubalic subgroup of the Pama–Nyungan languages,but is also treated as the general name for the languages of the Brisbane area of which Turrbal has historically been considered a dialect.[4] The Australian English word \'yakka\'(loosely meaning \'work\', as in \'hard yakka\') came from the Jagera language (yaga, \'strenuous work\').';

people_array['Yuggera']='Map of Traditional Lands of Australian Aboriginals around Brisbane. Meebatboogan, Mount Greville, Moogerah Peaks National Park. Cooyinnirra, Mount Mitchell, Main Range National Park. Booroongapah, Flinders Peak, Teviot Range. Ginginbaar, Mount Blaine, Teviot Range.';


/*Data for Yugarabul. Please note it is the same as for Yugara */
location_array['Yugarabul']='Yugara a tribe of Australian Aboriginal people which inhabited the territories from Moreton Bay to Toowoomba including the city of Brisbane (including Ipswich) before European settlement of Australia. This group is one of the traditional custodians of the land over which much of Brisbane is built'; 

language_array['Yugarabul']='Yugara is classified as belonging to the Durubalic subgroup of the Pama–Nyungan languages, but is also treated as the general name for the languages of the Brisbane area of which Turrbal has historically been considered a dialect.[4] The Australian English word \'yakka\' (loosely meaning \'work\', as in \'hard yakka\') came from the Jagera language (yaga, \'strenuous work\').';

people_array['Yugarabul']='Map of Traditional Lands of Australian Aboriginals around Brisbane. Meebatboogan, Mount Greville, Moogerah Peaks National Park. Cooyinnirra, Mount Mitchell, Main Range National Park. Booroongapah, Flinders Peak, Teviot Range. Ginginbaar, Mount Blaine, Teviot Range.';

/*Data for Yugambeh */

location_array['Yugambeh']='Their traditional lands are located in south-east Queensland and north-east New South Wales, now within the Logan City, Gold Coast, Scenic Rim, and Tweed City regions.';

language_array['Yugambeh']='The Yugambeh language is also known as the Tweed-Albert language, a dialect cluster of the wider Bandjalangic branch of the Pama–Nyungan language family.[4] At the 2016 Census, 22 people reported being speakers of the language. This was the first census where Yugambeh was included in the Australian Standard Classification of Languages as Yugambeh (8965).';

people_array['Yugambeh']='Billy Drumley - Indigenous community leader Ellen van Neerven - Writer';

/*Data for Turubul */

location_array['Turubal']= 'Brisbane area north to Caboolture and the Sunshine Coast.';

language_array['Turubal'] = 'Linguistic research, including AUSTLANG and AIATSIS indicate there is some uncertainty around Turubul including whether it refers to a dialect or a group within the North Brisbane Region. Historical documentation from settlers, missionaries and others record words from Turubul since the 1840s. There are shared words between Turubul and neighbouring languages of Kabi Kabi to the north and Yugara / Yuggera to the south.';


people_array['Turubal']='Uncle Joe Kirk';



 

var locationHTML = '<h2>Location</h2><p>' + location_array[language] + '</p>';
var languageHTML = '<h2>Language</h2><p>' + language_array[language] + '</p>';
var peopleHTML = '<h2>People</h2><p>' + people_array[language] + '</p>';
var langNameHTML= '<h2 id="langName">' + language + '</h2>';

document.getElementById("location").innerHTML = locationHTML;
document.getElementById('language').innerHTML = languageHTML;
document.getElementById('people').innerHTML = peopleHTML;
document.getElementById('langName').innerHTML = langNameHTML;


function modalOpen(modalName) {
  modal = document.getElementById(modalName);
  modal.style.display = "block";

  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }
  
 
  
}

function modalClose(modalName) {
  document.getElementById(modalName).style.display = "none";
 
}

/*Show words */

/*function getYear(year) {
	if(year) {
		return year.match(/[\d]{4}/); // This is regex (https://en.wikipedia.org/wiki/Regular_expression)
	}
}

function iterateRecords(data) {

	console.log(data);

	$.each(data.result.records, function(recordKey, recordValue) {

		var recordName = recordValue["Name"];
		var recordYear = recordValue["Year"];
		var recordMine = recordValue["Name Of Mine"];
		var recordDescription = recordValue["Remarks"];

		if(recordName && recordYear && recordMine && recordDescription && recordYear=="1908"|| recordYear=="1910") {

			$("#records").append(
				$('<section class="record">').append(
					$('<h2>').text(recordName),
					$('<h3>').text(recordYear),
					$('<h4>').text(recordMine),
					$('<p>').text(recordDescription)
				)
			);

		}

	});

}

$(document).ready(function() {

	var data = {
		resource_id: "63fd8050-0bab-4c04-b837-b2ce664077bf",
		limit: 50
	}

	$.ajax({
		url: "https://data.gov.au/api/3/action/datastore_search",
		data: data,
		dataType: "jsonp", // We use "jsonp" to ensure AJAX works correctly locally (otherwise XSS).
		cache: true,
		success: function(data) {
			iterateRecords(data);
		}
	});

}); */



/*function iterateRecords(data) {

	console.log(data);

	$.each(data.result.records, function(recordKey, recordValue) {

		var recordEngl = recordValue["English"];
		var recordAbor = recordValue["Dharumbal"];

		if (recordEngl && recordAbor) {
			$("#records").append(
				$('<section class ="record">').append(
					$('<h2>').text(recordEng),
					$('<h3>').text(recordAbor)
					
				)
			);
		}
		

	});

}*/


/*$(document).ready(function() {

	var data = {
		resource_id: "b86e4743-d65b-4f68-935a-1c57480cde3e",
		limit: 50
	}

	$.ajax({
		url: "https://data.gov.au/api/3/action/datastore_search",
		data: data,
		dataType: "jsonp", 
		cache: true,
		success: function(data) {
			iterateRecords(data);
		}
	});

}); */

$(document).ready(function() { 
 var data = {
    resource_id: 'b86e4743-d65b-4f68-935a-1c57480cde3e', // the resource id
    limit: 5, // get 5 results
    q: 'jones' // query for 'jones'
  };
  $.ajax({
    url: 'https://data.gov.au/api/3/action/datastore_search',
    data: data,
    dataType: 'jsonp',
    success: function(data) {
      alert('Total results found: ' + data.result.total)
    }
  });

});
// $('#location').html(locationHTML);