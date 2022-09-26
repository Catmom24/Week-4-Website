//SHUFFLE BUTTON FUNCTION:

//Note: reseting every zIndex to 0. 
// Study Math.Random 

//1. identify and select button 
//2. listen to event click on button 
//3. change image when button is pressed!


let container = document.querySelector(".project_images");
let button = document.querySelector(".project_button");

// console.log(button);

button.addEventListener("click", shuffleImages);

function shuffleImages() {
    //for loop to select random images!
    for (let index = 0; index < container.childElementCount ; index++) {
        const element = container.children[index]; 
        element.style.zIndex="0";
    }
    let random = Math.floor(Math.random() * container.childElementCount);
    container.children[random].style.zIndex="5"
  
    
   
}

//MAKE MY P5.JS INTERACTIVE BG MY HTML WEB BG 
function setup(){
    createCanvas(400,400);

}


 
  
  
  
  
  
  
  
  
  
  





































