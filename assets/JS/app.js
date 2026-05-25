  /*burgermenu */
 
  const burger = document.querySelector("#menu");
 
  const mobileMenu = document.querySelector(".globalNav");



 /*når der klikkes på menu ikonen, tilføjes classen aktiv og nav indholdet vises. */
//  der er tilføjet en if statemate, hvis disse er til steder i DOM gør følgende
  if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
      /*tilføjer class active til burgermenu ikonet, dette bruges til at lave animationen fra tre streger til et kryds */
      burger.classList.toggle("active");
    });
  } else {
   
  }

  /*dropdown klik */
  /*vælger alle knapper med class dropbtn */
  const btnNav = document.querySelectorAll(".dropbtn");
  
  /*looper igennem alle knapper med class dropbtn og lytter efter click.  */
  btnNav.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      /*nextElementSibling returne det næste element, som i dette tilfælde er vores dropdownIndhold, der tilføjer jeg class show */
      const nextSibling = btn.nextElementSibling;
     
      if (nextSibling) {
        nextSibling.classList.toggle("show");
        console.log('show');
      } else {
      
      }
    });
  });
  
/*lukker dropdown når der klikkes udenfor boksen */
/*kode lavet med hjælp fra https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_dropdown_navbar_click */

const existingOnclick = window.onclick;
window.onclick = function(luk) {
  if (existingOnclick) {
    existingOnclick.call(window, luk);
  }
  /*hvis det der klikkes på i winduet ikke har class dropbtn, så det er   ikke knappen der trykkes, gør derfor følgende */
  if(!luk.target.matches('.dropbtn')){
    const dropdownIndhold = document.querySelectorAll('.dropdownIndhold');
    /*for hver element med class dropdownindhold(det er vores dropdown kasse) */
    dropdownIndhold.forEach((dropdown) =>{
      /*hvis "kassen" har class=show, så skal du fjerne den, og så lukker vores dropdown "kasse" */
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    });
  }
}
