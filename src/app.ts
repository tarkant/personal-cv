import './styles.scss';
import DATA from './assets/data.json';

/** Created by Tarek Jellali under CC-BY-NC licence.
 * you can use back all this work in any other work
 * I'd love to be credited for this work if it helped.
 */
 const _email = DATA.email;
 const _phone = DATA.phone;

 function putEmails() {
   /* Just a classic JS email protection */
   (document.querySelector(".email-container") as HTMLDivElement).innerText = "(mailto:" + _email + ")";
   (document.querySelector(".call") as HTMLDivElement).setAttribute("href", "tel:" + _phone);
   document.querySelector(".button.mail").setAttribute("href", "mailto:" + _email);
 }
 putEmails();
 
 function setupListners() {
   /* mini-plus button for the name */
   document.querySelector(".display-name").addEventListener("click", function() {
     document.querySelector(".personal-info").classList.toggle("expanded");
     document.querySelector(".display-name").classList.toggle("minus");
   });
   /* fab-button */
   document.querySelector("button.fab-button").addEventListener("click", function() {
     document.querySelector("nav.fab").classList.toggle("expanded");
     document.querySelector(".fab-backdrop").classList.toggle("expanded");
   });
   /* email click */
   document.querySelector(".email-container").addEventListener("click", function() {
     window.location.href = "mailto:jellalitarek@gmail.com";
   });
   /* Backdrop click */
   document.querySelector(".fab-backdrop").addEventListener("click", function() {
     document.querySelector("nav.fab").classList.toggle("expanded");
     document.querySelector(".fab-backdrop").classList.toggle("expanded");
   });
   /* Parallax for the main image background */
   window.addEventListener("scroll", function() {
     (document.querySelector(".col-personal") as HTMLDivElement).style.backgroundPositionY = (window.pageYOffset / 2) + "px";
     (document.querySelector(".mobile-nav") as HTMLDivElement).style.opacity = `${((window.pageYOffset * 2) - screen.width) / screen.width}`;
   });
 }
 setupListners();
 
