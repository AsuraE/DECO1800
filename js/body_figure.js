$(document).ready(get_parsed_data());

function buildFigure(parsed_data_map, language) {
    var headerHTML = `<span class="close" onclick="modalClose('bodyModal');resetFigure();">&times;</span>
                      <div style="font-size:30px;"> Language: ` + language + `</div>
                      <img src="images/body.png" id="figure" usemap="#body_figure">
                      <map name="body_figure">
                          <area data-toggle="tooltip" title="` + parsed_data_map[language]['Arm'] + `" class="arm" shape="circle" coords="906,673,50">
                          <area data-toggle="tooltip" title="` + parsed_data_map[language]['Arm'] + `" class="arm" shape="circle" coords="608,673,50">
                          <area data-toggle="tooltip" title="` + parsed_data_map[language]['Belly'] + `" class="belly" shape="circle" coords="755,765,50">
                          <area data-toggle="tooltip" title="` + parsed_data_map[language]['Ear'] + `" class="ear" shape="circle" coords="630,412,20">
                          <area data-toggle="tooltip" title="` + parsed_data_map[language]['Ear'] + `" class="ear" shape="circle" coords="860,412,20">
                          <area data-toggle="tooltip" title="` + parsed_data_map[language]['Eye'] + `" class="eye" shape="circle" coords="800,392,20">
                          <area data-toggle="tooltip" title="` + parsed_data_map[language]['Eye'] + `" class="eye" shape="circle" coords="682,392,20">
                          <area data-toggle="tooltip" title="` + parsed_data_map[language]['Finger'] + `" class="finger" shape="circle" coords="498,673,20">
                          <area data-toggle="tooltip" title="` + parsed_data_map[language]['Foot'] + `" class="foot" shape="circle" coords="589,1417,50">
                          <area data-toggle="tooltip" title="` + parsed_data_map[language]['Foot'] + `" class="foot" shape="circle" coords="906,1417,50">
                          <area data-toggle="tooltip" title="` + parsed_data_map[language]['Forehead'] + `" class="forehead" shape="circle" coords="781,333,20">
                          <area data-toggle="tooltip" title="` + parsed_data_map[language]['Hand'] + `" class="hand" shape="circle" coords="526,926,50">
                          <area data-toggle="tooltip" title="` + parsed_data_map[language]['Head'] + `" class="head" shape="circle" coords="728,239,20">
                          <area data-toggle="tooltip" title="` + parsed_data_map[language]['Knee'] + `" class="knee" shape="circle" coords="639,1171,30">
                          <area data-toggle="tooltip" title="` + parsed_data_map[language]['Knee'] + `" class="knee" shape="circle" coords="869,1171,30">
                          <area data-toggle="tooltip" title="` + parsed_data_map[language]['Leg'] + `" class="leg" shape="circle" coords="686,1080,50">
                          <area data-toggle="tooltip" title="` + parsed_data_map[language]['Leg'] + `" class="leg" shape="circle" coords="850,1080,50">
                          <area data-toggle="tooltip" title="` + parsed_data_map[language]['Mouth'] + `" class="mouth" shape="circle" coords="755,468,20">
                          <area data-toggle="tooltip" title="` + parsed_data_map[language]['Neck'] + `" class="neck" shape="circle" coords="750,507,20">
                          <area data-toggle="tooltip" title="` + parsed_data_map[language]['Nose'] + `" class="nose" shape="circle" coords="741,427,20">
                          <area data-toggle="tooltip" title="` + parsed_data_map[language]['Shin'] + `" class="shin" shape="circle" coords="649,1256,50">
                          <area data-toggle="tooltip" title="` + parsed_data_map[language]['Shin'] + `" class="shin" shape="circle" coords="850,1256,50">
                          <area data-toggle="tooltip" title="` + parsed_data_map[language]['Shoulder'] + `" class="shoulder" shape="circle" coords="865,550,60">
                          <area data-toggle="tooltip" title="` + parsed_data_map[language]['Shoulder'] + `" class="shoulder" shape="circle" coords="650,550,60">
                      </map>`;
    $(".figureContent").html(headerHTML);
}

function startFigure(language) {
    // get_parsed_data();
    buildFigure(parsed_data_map, language);
}

function showFigure() {
    $('map').imageMapResize();
}

function resetFigure() {
    var headerHTML = `<div id="start">
              <p>Check Dat Body Out!</p>

              <p id="quizName">Choose the Language</p>

              <div id="selectLang">

                <button type="button" class="startQuiz" onclick="startFigure('Yuggera');showFigure();" name="Start quiz">
                <img src="./images/art1.jpg" width="200px" height="200px">
                <p>Yugara</p>
                </button>

                <button type="button" class="startQuiz" onclick="startFigure('Yugarabul');showFigure();" name="Start quiz">
                <img src="./images/language.jpg" width="200px" height="200px">
                <p>Yugarabul</p>
                </button>

                <button type="button" class="startQuiz" onclick="startFigure('Yugambeh');showFigure();" name="Start quiz">
                <img src="./images/art8.jpg" width="200px" height="200px">
                <p>Yugambeh</p>
                </button>

                <button type="button" class="startQuiz" onclick="startFigure('Turubul');showFigure();" name="Start quiz">
                <img src="./images/art2.jpg" width="200px" height="200px">
                <p>Turubul</p>
                </button>

              </div>
            </div>`;
    $(".figureContent").html(headerHTML);
}