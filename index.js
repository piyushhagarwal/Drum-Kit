for(let i = 0 ; i < 7 ; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
       
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        addAnimation(buttonInnerHTML)
    });
};
document.addEventListener('keydown',function(event){
    makeSound(event.key);
    addAnimation(event.key)
    
});


function makeSound(key){
    switch (key) {
        case "s":
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            
            break;
        case "d":
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "f":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            
            break;
        case "g":
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            
            break;

        case "h":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            
            break;

        case "j":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            
            break;

        case "k":
            let kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            
            break;
               
    
        default:
            console.log("hello")
            break;
    }
}
function addAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add('pressed')
    setTimeout(() => {
        activeButton.classList.remove('pressed')
    }, 100);
}
