function popups() {
  var windowW = window.innerWidth;
  var targets = document.querySelectorAll('.mainbisobjct .flag.release');
  var buildings = document.querySelectorAll('.mainbisobjct .building.release');
  var destination = document.querySelectorAll('.mainbisobjct .obj_midashi');
  const BreakPoint = 900;

  if(windowW > BreakPoint) {
  // pc
    for(var i = 0, len = destination.length; i < len; i++) {
      (function(n) {
        targets[n].addEventListener('mouseover', function() {
         destination[n].classList == true || destination[n].classList.add('popuphover');
         buildings[n].classList == true || buildings[n].classList.add('scalebuilding');
        });
        targets[n].addEventListener('mouseout', function() {
         destination[n].classList == true || destination[n].classList.remove('popuphover');
         buildings[n].classList == true || buildings[n].classList.remove('scalebuilding');
        });
      })(i)
    }

  } else {
  // sp
    var count = 0;
    for(var i = 0, len = destination.length; i < len; i++) {
      (function(n) {
        targets[n].addEventListener('mouseout', function() {
         destination[n].classList == true || destination[n].classList.remove('popuphover');
         buildings[n].classList == true || buildings[n].classList.remove('scalebuilding');
         count = 0;
        });

        targets[n].addEventListener('click', function() {
          if(count == 0) {
            destination[n].classList == true || destination[n].classList.add('popuphover');
            buildings[n].classList == true || buildings[n].classList.add('scalebuilding');
            count++;

          } else if(count == 1) {
            count = 0;
            destination[n].classList == true || destination[n].classList.remove('popuphover');
            buildings[n].classList == true || buildings[n].classList.remove('scalebuilding');
            destination[n].parentNode.href == true || (window.location.href = destination[n].parentNode.href);
          }
        });
      })(i)
    }
  }
}
window.addEventListener("load", popups, false);
window.addEventListener("resize", popups, false);

