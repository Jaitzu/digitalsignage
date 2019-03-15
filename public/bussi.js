fetch("../aikataulu.json", {mode: 'cors'}).then((response) =>{
    if (response.ok){
        return response.json()
    }else{
        throw new Error("Response not ok!");
    }
}).then((jsonFile) =>{
    console.log(jsonFile);

  let aikatauluLista = document.querySelector("#bussiLista");
    aikatauluLista.innerHTML='';

    const otsikkoKotelo = document.createElement('div');
    otsikkoKotelo.setAttribute('id', 'koteloo');
    const otsikko = document.createElement("p");
    otsikko.setAttribute('id', 'otsikko');
    aikatauluLista.appendChild(otsikkoKotelo);
    otsikkoKotelo.appendChild(otsikko);
    otsikko.innerHTML = " " + "Pysäkki" + "   |    " + "Lähtee"   + "   |  " + "Linja" + "    |    " + "Määränpää";

    for(let i=0; i<jsonFile.data.stops.length; i++) {
        const kotelo = document.createElement('div');
        kotelo.setAttribute('class', 'kotelo');


            const stopName = jsonFile.data.stops[i].name;
            const shortName = jsonFile.data.stops[i].stoptimesWithoutPatterns[0].trip.route.shortName;
            const longName = jsonFile.data.stops[i].stoptimesWithoutPatterns[0].trip.route.longName;
            const aika1 = jsonFile.data.stops[i].stoptimesWithoutPatterns[0].serviceDay;
            const aika2 = jsonFile.data.stops[i].stoptimesWithoutPatterns[0].scheduledDeparture;
            const aika = aika1 + aika2;
            console.log(aika1);
            console.log(aika2);
            const n = new Date(aika * 1000);
            let hr = "0" + n.getHours();
            let m = "0" + n.getMinutes();
            const name = document.createElement('div');
            name.setAttribute('class', 'name');
            const time = document.createElement('div');
            time.setAttribute('class', 'time');
            const lyhytnimi= document.createElement('div');
            lyhytnimi.setAttribute('class', 'shortName');
            const pitkanimi = document.createElement('div');
            pitkanimi.setAttribute('class', 'longName');
            aikatauluLista.appendChild(kotelo);
            let realAika = hr.substr(-2) + ":" + m.substr(-2);
            kotelo.appendChild(name);
            kotelo.appendChild(time);
            kotelo.appendChild(lyhytnimi);
            kotelo.appendChild(pitkanimi);
            name.innerHTML = '<p>' + stopName + '</p>';
            time.innerHTML = '<p>' + realAika + '</p>';
            lyhytnimi.innerHTML = '<p>' + shortName + '</p>';
            pitkanimi.innerHTML = '<p>' + longName + '</p>';
            console.log(realAika);
            console.log(i);

    }

    });
