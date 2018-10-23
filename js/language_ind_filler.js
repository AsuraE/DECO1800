



var location_array = new Array(); 
var language_array = new Array(); 
var places_array = new Array();
var people_array = new Array();   



var language = sessionStorage.getItem('language');

// alert('Selected Language is: ' + language);


/*Data for Yugara */ 
location_array['Yuggera']='Yugara is a tribe of Australian Aboriginal people, which inhabited the territories from Moreton Bay to Toowoomba, including the city of Brisbane (including Ipswich) before European settlement of Australia. This group is one of the traditional custodians of the land over which much of Brisbane is built.';

language_array['Yuggera']='Yugara is classified as belonging to the Durubalic subgroup of the Pama–Nyungan languages, but is also treated as the general name for the languages of the Brisbane area of which Turrbal has historically been considered a dialect. The Australian English word \'yakka\'(loosely meaning \'work\', as in \'hard yakka\') came from the Jagera language (yaga, \'strenuous work\').';

people_array['Yuggera']='Desmond Sandy, Ruth James, Pearl Sandy, Neville Bonner (former Australian senator, was a Yuggera tribal elder), Jeannie Bell (Australian linguist), Faye Carr (2017 National NAIDOC Awards Winner Female Elder of the Year).';


/*Data for Yugarabul. Please note it is the same as for Yugara */
location_array['Yugarabul']='Yugarabul a tribe of Australian Aboriginal people which inhabited the territories from Moreton Bay to Toowoomba including the city of Brisbane (including Ipswich) before European settlement of Australia. This group is one of the traditional custodians of the land over which much of Brisbane is built'; 

language_array['Yugarabul']='Yugarabul is classified as belonging to the Durubalic subgroup of the Pama–Nyungan languages, but is also treated as the general name for the languages of the Brisbane area of which Turrbal has historically been considered a dialect.[4] The Australian English word \'yakka\' (loosely meaning \'work\', as in \'hard yakka\') came from the Jagera language (yaga, \'strenuous work\').';

people_array['Yugarabul']='Desmond Sandy, Ruth James, Pearl Sandy, Neville Bonner (former Australian senator, was a Yugarabul tribal elder), Jeannie Bell (Australian linguist), Faye Carr (2017 National NAIDOC Awards Winner Female Elder of the Year).';

/*Data for Yugambeh */

location_array['Yugambeh']='Their traditional lands are located in south-east Queensland and north-east New South Wales, now within the Logan City, Gold Coast, Scenic Rim, and Tweed City regions.';

language_array['Yugambeh']='The Yugambeh language is also known as the Tweed-Albert language, a dialect cluster of the wider Bandjalangic branch of the Pama–Nyungan language family. At the 2016 Census, 22 people reported being speakers of the language. This was the first census where Yugambeh was included in the Australian Standard Classification of Languages as Yugambeh (8965).';

people_array['Yugambeh']='Billy Drumley (Indigenous community leader), Ellen van Neerven (Writer).';

/*Data for Turubul */

location_array['Turubal']= 'Brisbane area north to Caboolture and the Sunshine Coast.';

language_array['Turubal'] = 'Linguistic research, including AUSTLANG and AIATSIS indicate there is some uncertainty around Turubal including whether it refers to a dialect or a group within the North Brisbane Region. Historical documentation from settlers, missionaries and others record words from Turubul since the 1840s. There are shared words between Turubul and neighbouring languages of Kabi Kabi to the north and Yugara / Yuggera to the south.';


people_array['Turubal']='Uncle Joe Kirk (Turubal Elder).';



 

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




/*words list pop up*/



function iterateRecords1(data) {

	console.log(data);

	$.each(data.result.records, function(recordKey, recordValue) {

		var recordEngl = recordValue["English"];
		var recordAbor = recordValue["Yuggera"];
		console.log(recordEngl);
		if (recordEngl && recordAbor) {
	
			$("#records").append(
				$('<section class ="record">').append(
					$('<p>').text(recordEngl+': '+ recordAbor)
					
				)
			);
		}
		

	});

}


function iterateRecords2(data) {

	console.log(data);

	$.each(data.result.records, function(recordKey, recordValue) {

		var recordEngl = recordValue["English"];
		var recordAbor = recordValue["Yugarabul"];
		console.log(recordEngl);
		if (recordEngl && recordAbor) {
	
			$("#records").append(
				$('<section class ="record">').append(
					$('<p>').text(recordEngl+': '+ recordAbor)
					
				)
			);
		}
		

	});

}

function iterateRecords3(data) {

	console.log(data);

	$.each(data.result.records, function(recordKey, recordValue) {

		var recordEngl = recordValue["English"];
		var recordAbor = recordValue["Yugambeh"];
		console.log(recordEngl);
		if (recordEngl && recordAbor) {
	
			$("#records").append(
				$('<section class ="record">').append(
					$('<p>').text(recordEngl+': '+ recordAbor)
					
				)
			);
		}
		

	});

}

function iterateRecords4(data) {

	console.log(data);

	$.each(data.result.records, function(recordKey, recordValue) {

		var recordEngl = recordValue["English"];
		var recordAbor = recordValue["Turubul"];
		console.log(recordEngl);
		if (recordEngl && recordAbor) {
	
			$("#records").append(
				$('<section class ="record">').append(
					$('<p>').text(recordEngl+': '+ recordAbor)
					
					
				)
			);
		}
		

	});

}

/*Function to iterate the Hello in indigenous dataset to select the correct hello word */
function iterateRecords5(data) {

	console.log(data);

	$.each(data.result.records, function(recordKey, recordValue) {

		var recordTribe = recordValue["Language and Location"];
		var recordGreeting = recordValue["Greeting word"];
		var recordID = recordValue["_id"]; 
		console.log(recordID);
		if (recordID=="72" && language=="Yugambeh") {
			alert (recordGreeting); 
			$("#hello-indig").append(
				$('<section class ="hello-ind">').append(
					$('<p>').text(recordGreeting)
					
					
				)
			);
		} else if (recordID=="73" && language=="Yugarabul") {
			$("#hello-indig").append(
				$('<section class ="hello-ind">').append(
					$('<p>').text(recordGreeting)
						)
			);
			
		} else if (recordID=="74" && language=="Yuggera") {
			$("#hello-indig").append(
				$('<section class ="hello-ind">').append(
					$('<p>').text(recordGreeting)
						)
			);
		} else if (recordID=="57" && language=="Turubal") {
			$("#hello-indig").append(
				$('<section class ="hello-ind">').append(
					$('<p>').text(recordGreeting)
						)
			);
		}
		

	});

}



$(document).ready(function() { 

if (language=='Yuggera') {

  var data = {
    resource_id: 'ea4031e6-dc7a-4584-ac38-482f570a9637',
    limit: 50

  }
  $.ajax({
    url: 'https://data.gov.au/api/3/action/datastore_search',
    data: data,
    dataType: 'jsonp',
	cache: true,
    success: function(data) {
		iterateRecords1(data);
    }
  });

} else if (language=='Yugarabul') {
	
	
	var data = {
    resource_id: '34b5f663-6c32-4ad9-8f8e-7f63ce5156f2', 
    limit: 50
 
  }
  $.ajax({
    url: 'https://data.gov.au/api/3/action/datastore_search',
    data: data,
    dataType: 'jsonp',
	cache: true,
    success: function(data) {
		iterateRecords2(data);
    }
  });
  
  
} else if (language=='Yugambeh') {
	
	var data = {
    resource_id: '4ea75e17-cb1e-473e-9b6b-c0227b1fa787', 
    limit: 50
 
  }
  $.ajax({
    url: 'https://data.gov.au/api/3/action/datastore_search',
    data: data,
    dataType: 'jsonp',
	cache: true,
    success: function(data) {
      iterateRecords3(data);
    }
  });
} else if (language=='Turubal') {
	var data = {
    resource_id: 'da3ac749-840a-479d-9466-09eb8d6e389d',
    limit: 50
  }
  $.ajax({
    url: 'https://data.gov.au/api/3/action/datastore_search',
    data: data,
    dataType: 'jsonp',
	cache: true,
    success: function(data) {
		iterateRecords4(data);	  
    }
  });
	
	
}





  var data = {
    resource_id: 'a02450ec-15b2-4185-a973-c8868e70e928', // the resource id
    limit: 100
  }
  $.ajax({
    url: 'https://data.gov.au/api/3/action/datastore_search',
    data: data,
    dataType: 'jsonp',
	cache:true, 
    success: function(data) {
      alert('Total results found: ' + data.result.total);
	  iterateRecords5(data);
	  
    }
  });
  
  
  
}); 
// $('#location').html(locationHTML);