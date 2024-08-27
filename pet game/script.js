setInterval(() => {
    let hungerElement = document.getElementById('hunger');
    let energyElement = document.getElementById('energy');
    let playElement = document.getElementById('happiness');
    let image = document.getElementById('petImage')
    let status = document.getElementById('status')

    let energy = Number(energyElement.innerHTML);
    let hunger = Number(hungerElement.innerHTML); 
    let play = Number(playElement.innerHTML); 

    if (energy < 35) {
        image.src = 'sleepy.webp'
        status.innerHTML = 'Buddy is sleepy :('
    }else if(hunger < 35){
        image.src = 'hungry.webp'
        status.innerHTML = 'Buddy is hungry :('
    }else if(play < 35){
        image.src = 'bored.webp'
        status.innerHTML = 'Buddy is bored :('
    }else {
        image.src = 'normal.webp'
        status.innerHTML = 'Buddy is feeling great!'
    }

    if (energy < 0 || hunger < 0 || play < 0){
        status.innerHTML = 'Buddy has passed away';
        setTimeout(function() {
            window.location.href = "about:blank";
        }, 2000);
    }

}, 100);

setInterval(() => {
    let hungerElement = document.getElementById('hunger');
    let energyElement = document.getElementById('energy');
    let playElement = document.getElementById('happiness');
    
    let energy = Number(energyElement.innerHTML);
    let hunger = Number(hungerElement.innerHTML); 
    let play = Number(playElement.innerHTML); 

    let updatedEnergy = energy + 0.5
    let updatedHunger = hunger - 1
    let updatedPlay = play - 2

    energyElement.innerHTML = updatedEnergy
    hungerElement.innerHTML = updatedHunger
    playElement.innerHTML = updatedPlay
},2000)

function feed(){
    let hungerElement = document.getElementById('hunger');
    let energyElement = document.getElementById('energy');

    let energy = Number(energyElement.innerHTML);
    let hunger = Number(hungerElement.innerHTML); 

    let updatedEnergy = energy - 5;
    let updatedHunger = hunger + 10;

    if (hunger > 95){  
        alert("You're gonna make the dog fat")
    }else{
        hungerElement.innerHTML = updatedHunger; 
        energyElement.innerHTML = updatedEnergy
    }

}

function play(){
    let energyElement = document.getElementById('energy')
    let playElement = document.getElementById('happiness');

    let energy = Number(energyElement.innerHTML)
    let play = Number(playElement.innerHTML); 

    let updatedPlay = play + 15;
    let updatedEnergy = energy - 20;

    if (energy < 25){
        alert('the dog is too tired')
    } else if(play > 120){
        alert('the dog doesnt need to play')
    } else {
        playElement.innerHTML = updatedPlay; 
        energyElement.innerHTML = updatedEnergy
    }
}

function sleep(){
    let sleepElement = document.getElementById('energy');
    let hungerElement = document.getElementById('hunger');

    let hunger = Number(hungerElement.innerHTML);
    let updatedHunger = hunger - 25;

    if (hunger < 50){
        alert('the dog is too hungry to sleep')
    }else if(energy > 80){
        alert('the dog is too energetic to sleep')
    } else{
        hungerElement.innerHTML = updatedHunger
        sleepElement.innerHTML = 100; 
    }

}