let saa = document.getElementById('kontaineri');
let lista = document.getElementById('lista');
let title = document.querySelector('h1');
let video = document.querySelector('video');
let metropolja = document.querySelector('body');
let bussi = document.getElementById('bussiLista');
let img = document.getElementById('ilmoitus');

let hidePolja = () =>{
    metropolja.style.backgroundImage="url('kuva.jpg')";
    metropolja.style.backgroundSize ='cover';
    saa.style.display='block';
    console.log('hidepolja');
};

let showFood = () =>{
    lista.style.display='block';
    title.style.display='block';
    video.style.display='block';
    console.log('showfood');
    saa.style.display='none';
};

let showPolja = () =>{
    metropolja.style.backgroundSize ='contain';
    metropolja.style.backgroundImage="url('Metropolia_RGB_A.png')";
    console.log('showpolja');
    img.style.display='none';
};

let hideFood_showBussi = () =>{
    metropolja.style.backgroundImage="url('none')";
    metropolja.style.backgroundColor='darkblue';
   lista.style.display='none';
   title.style.display='none';
   video.style.display='none';
    console.log('hidefood/showbussi');
    bussi.style.display='block';

};

let showIlm_hidebussi= () =>{
    bussi.style.display='none';
    img.style.display='block';
    metropolja.style.backgroundColor='black';
};

let i = 0;
let slider = () =>{

    if(i === 0){
        hidePolja();
        i++
    }else if(i===1){
        showFood();
        i ++;
    }else if(i===2){
        hideFood_showBussi();
        i ++;
    }else if(i===3){
        showIlm_hidebussi();
    i ++;
    }else if(i===4){
        showPolja();
        i = 0;
        console.clear();
    }

};




setInterval(() =>{
slider();
}, 10000);


