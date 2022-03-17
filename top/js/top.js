function popups() {
  var windowW = window.innerWidth;
  var targets = document.querySelectorAll('.mainbisobjct .flag');
  var buildings = document.querySelectorAll('.mainbisobjct .building');
  var destination = document.querySelectorAll('.mainbisobjct .obj_midashi');
  const BreakPoint = 640;

  if(windowW > BreakPoint) {
  // pc
    for(var i = 0, len = targets.length; i < len; i++) {
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
    for(var i = 0, len = targets.length; i < len; i++) {
      (function(n) {
        targets[n].addEventListener('mouseout', function() {
         destination[n].classList == true || destination[n].classList.remove('popuphover');
         buildings[n].classList == true || buildings[n].classList.remove('scalebuilding');
         count = 0;
        });

        targets[n].addEventListener('click', function() {
          //console.log(destination[n].parentNode.parentNode);
          console.log(count);
          if(count == 0) {
            destination[n].classList == true || destination[n].classList.add('popuphover');
            buildings[n].classList == true || buildings[n].classList.add('scalebuilding');
            count++;

          } else if(count == 1) {
            count = 0;
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

