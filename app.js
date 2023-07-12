$ = function(id) {
    return document.getElementById(id);
  }
  
  var show = function(id) {
      $(id).style.display ='block';
  }
  var hide = function(id) {
      $(id).style.display ='none';
  }


  const navbar = document.querySelector('.navbar')
const active = document.getElementById('nav')
const scrollFunc = () => {
    const scroll = window.scrollY;


    if (scroll > 100) {
        active.className = "navbar show";
    } else {
        active.className = "navbar hide";
    }
};
window.addEventListener("scroll", scrollFunc);
