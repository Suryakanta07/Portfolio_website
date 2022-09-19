/* Toggle Navbar */
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
  hideSection();
  toggleNavbar();
  document.body.classList.toggle("hide-scrolling");
});
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}



/* Active Section */
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        if(e.target.classList.contains("nav-item")){
           toggleNavbar();
        }
        else{
            console.log("false");
        }
         setTimeout(() =>{
           document.querySelector("section.active").classList.remove("active","fade-Out");
           document.querySelector(e.target.hash).classList.add("active");
           window.scrollTo(0,0);
           document.body.classList.remove("hide-scrolling");
         },10000);
    }
});



/* portfolio popup Item details*/
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("view-project-btn")){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})
function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);



function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp-thumbnail img").src = 
    portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML = 
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML =  
    portfolioItem.querySelector(".portfolio-item-details").innerHTML;

}



/* Validation */

// function validate() {
//     console.log(document.contact_form);
//     return false;
// }

// const name = document.getElementById('name')
// const email = document.getElementById('email')
// const form = document.getElementById('form')
// const errorElement = document.getElementById('error')

// form?.addEventListener('submit', (e) => {
//     let message = []
//     if (name.value === '' || name.value == null){

//         message.push('name is Required')
//     }

//     console.log(message)

//     if (message.length > 0) {
//         e.preventDefault()
//         errorElement.innerText = message.join(',')
//     }
// })




/* Data Storing */

function submitForm(event){
     event.preventDefault()
     var name = document.getElementById('name').value;
     var email = document.getElementById('email').value;
     var subject = document.getElementById('subject').value;
     var message = document.getElementById('message').value;
     var userInfo={ 
        name: name,
        email:email,
        subject: subject,
        message: message
     }
  localStorage.setItem("userData",JSON.stringify(userInfo))
  var userData = localStorage.getItem("userData")
    console.log("hi",userData);
     
}


