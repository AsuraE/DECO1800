function buildFigure() {
    var headerHTML = `<img src="images/body.png" id="figure" usemap="#body_figure">
                      <map name="body_figure">
                          <area data-toggle="tooltip" title="Arm" class="arm" shape="circle" coords="906,673,50">
                          <area data-toggle="tooltip" title="Arm" class="arm" shape="circle" coords="608,673,50">
                          <area data-toggle="tooltip" title="Belly" class="belly" shape="circle" coords="755,765,50">
                          <area data-toggle="tooltip" title="Ear" class="ear" shape="circle" coords="630,412,20">
                          <area data-toggle="tooltip" title="Ear" class="ear" shape="circle" coords="860,412,20">
                          <area data-toggle="tooltip" title="Eye" class="eye" shape="circle" coords="800,392,20">
                          <area data-toggle="tooltip" title="Eye" class="eye" shape="circle" coords="682,392,20">
                          <area data-toggle="tooltip" title="Finger" class="finger" shape="circle" coords="498,673,20">
                          <area data-toggle="tooltip" title="Foot" class="foot" shape="circle" coords="589,1417,50">
                          <area data-toggle="tooltip" title="Foot" class="foot" shape="circle" coords="906,1417,50">
                          <area data-toggle="tooltip" title="Forehead" class="forehead" shape="circle" coords="781,333,20">
                          <area data-toggle="tooltip" title="Hand" class="hand" shape="circle" coords="526,926,50">
                          <area data-toggle="tooltip" title="Head" class="head" shape="circle" coords="728,239,20">
                          <area data-toggle="tooltip" title="Knee" class="knee" shape="circle" coords="639,1171,30">
                          <area data-toggle="tooltip" title="Knee" class="knee" shape="circle" coords="869,1171,30">
                          <area data-toggle="tooltip" title="Leg" class="leg" shape="circle" coords="686,1080,50">
                          <area data-toggle="tooltip" title="Leg" class="leg" shape="circle" coords="850,1080,50">
                          <area data-toggle="tooltip" title="Mouth" class="mouth" shape="circle" coords="755,468,20">
                          <area data-toggle="tooltip" title="Neck" class="neck" shape="circle" coords="750,507,20">
                          <area data-toggle="tooltip" title="Nose" class="nose" shape="circle" coords="741,427,20">
                          <area data-toggle="tooltip" title="Shin" class="shin" shape="circle" coords="649,1256,50">
                          <area data-toggle="tooltip" title="Shin" class="shin" shape="circle" coords="850,1256,50">
                          <area data-toggle="tooltip" title="Shoulder" class="shoulder" shape="circle" coords="865,550,60">
                          <area data-toggle="tooltip" title="Shoulder" class="shoulder" shape="circle" coords="650,550,60">
                      </map>


    `;
    $(".bodyContent").html(headerHTML);
    $('map').imageMapResize();
    
}