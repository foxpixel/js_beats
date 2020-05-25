window.addEventListener('load',() =>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");


    console.log(sounds)
    // for sound effect after clicking

    pads.forEach((padd,index)=>{
        padd.addEventListener("click",function(){
            sounds[index].play();
        });
    });
}) ;









// inside foreachloop the variable padd is used for looping and index for getting the values