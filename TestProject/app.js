/* Set the width of the side navigation to 250px */
/*function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("ABC").style.marginLeft = "200px";
       
  }
  
  /* Set the width of the side navigation to 0 */
  /*function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("ABC").style.marginLeft = "0px";
  } */

   /*function openNav() {
    let size = document.getElementById("mySidenav").style.width;
    console.log({size});
    if (size  !== "200px") {
      document.getElementById("mySidenav").style.width = "200px";
      document.getElementById("ABC").style.marginLeft = "200px"; 
           
    } else  {      
        document.getElementById("mySidenav").style.width = "0px";
        document.getElementById("ABC").style.marginLeft = "0px";     
    }
    
      
  }

/* Toggles the style class on click 

$("button").click(function() {
  $(".button").toggleClass("buttonLeft");
});

$("button").click(function() {
  $(".button").toggleClass("sidenavLeft");
}); */

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
      //Toggle Nav
      nav.classList.toggle('nav-active');
      //Animate Links
      navLinks.forEach((link, index) => {
          if(link.style.animation){
              link.style.animation='';
          } else{
              link.style.animation=link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +.75}s`;
          }
       });
       //Burger Animate
      burger.classList.toggle('toggle');

  });
  


}

navSlide();

