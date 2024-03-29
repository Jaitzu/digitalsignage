    const schedule = require('node-schedule');
    const fetch = require('node-fetch');
    const fs = require('fs');
    const express = require('express');
    const app = express();
    const http = require('http');



    const query = `{
  stops(name: "myyrmä") {
    name
      stoptimesWithoutPatterns {
      scheduledArrival
      realtimeArrival
      arrivalDelay
      scheduledDeparture
      realtimeDeparture
        trip {
                route {
                  shortName
                  longName
                }
        }
      departureDelay
      realtime
      realtimeState
      serviceDay
      headsign
    }
  }  
}`

        let list =schedule.scheduleJob('1 * * * * *', () =>{

        let d = new Date();
        let day = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();

        fetch("https://www.sodexo.fi/ruokalistat/output/daily_json/16365/" + year + "/" + month + "/" + day + "/fi")
            .then(res => res.json())
            .then(json => fs.writeFile('ruoka.json', JSON.stringify(json), (err) => {
                // throws an error, you could also catch it here
                if (err) throw err;

                // success case, the file was saved
                console.log('Ruokalista saved!');
            }));
            console.log('Ruokalista saved!');

            fetch("https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql",{
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({query:query})
            })
                .then(res => res.json())
                .then(json => fs.writeFile('aikataulu.json', JSON.stringify(json), (err) => {
                    // throws an error, you could also catch it here
                    if (err) throw err;

                    // success case, the file was saved
                    console.log('aiaktaulu saved!');
                }));
            console.log('R saved!');
    });
    app.use(express.static(__dirname + '/public'));
    app.use(express.static(__dirname + '/'));
    app.get('/', (req, res) => {
        fs.readFile(__dirname + '/public/index.html', 'utf8', (err, text) => {
            res.send(text);
        });
    });
       app.listen(8080);





