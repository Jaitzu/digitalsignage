let date = ()=>{


fetch("../ruoka.json", {mode: 'cors'}).then((response) =>{
    if (response.ok){
        return response.json()
    }else{
        throw new Error("Response not ok!");
    }
}).then((jsonFile) =>{
    console.log(jsonFile);
    console.log(jsonFile.courses);
    let lista = document.querySelector("#lista");
    lista.innerHTML='';
    for(let i=0; i<jsonFile.courses.length; i++){
       const ruoka = jsonFile.courses[i].title_fi;
       console.log(ruoka);
       const hinta = jsonFile.courses[i].price;
       const tiedot = jsonFile.courses[i].properties;

       const li = document.createElement("p");
       li.setAttribute('class','li')
        lista.appendChild(li);
        li.innerHTML = "Ruoka: " + ruoka + "</br>" + " Hinta: " + hinta + " " + tiedot ;




    }

}).catch((e) =>{
   console.log("Error " + e.message);
})
;
};

date();
let hours = () => {
    let d = new Date();
    let hour = d.getHours();
    console.log(hour);
    if(hours===0){
        date();
    }else{
        console.clear();
        console.log(hour);
    }
};



setInterval(hours, 1800000);




