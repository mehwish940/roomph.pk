const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require("path");
const app = express();
const xml2js = require('xml2js');
const fs = require('fs');

const port = process.env.PORT || 5000;
let city = "";
let checkin = "";
let checkout = "";
let data = "";
let ndata = "";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    axios
        .get(`https://www.roomph.pk/roomph_api/get_banners?limit=1`)
        .then(resp => {
            data = resp.data;
            //console.log(data);
            res.send({ express: data });
        })
        .catch(error => {
            console.error(error)
        })
        // axios
        // .get(`https://www.roomph.pk/roomph_api/get_carousels?limit=1`)
        // .then(resp => {
        //   data = resp.data;
        //   //console.log(data);
        //   res.send({ express: data}); 
        // })
        // .catch(error => {
        //   console.error(error)
        // })

});
app.get('/api/hello1', (req, res) => {
    axios
        .get(`https://www.roomph.pk/roomph_api/get_carousels?limit=1`)
        .then(resp => {
            data = resp.data;
            //console.log(data);
            res.send({ express: data });
        })
        .catch(error => {
            console.error(error)
        })

});

app.get('/api/hello2', (req, res) => {
    axios
        .get(`https://www.roomph.pk/roomph_api/get_topcities`)
        .then(resp => {
            data = resp.data;
            //console.log(data);
            res.send({ express: data });
        })
        .catch(error => {
            console.error(error)
        })
});
app.get('/api/hello3', (req, res) => {
    axios
        .get(`https://www.roomph.pk/roomph_api/get_blogs`)
        .then(resp => {
            data = resp.data;
            //console.log(data);
            res.send({ express: data });
        })
        .catch(error => {
            console.error(error)
        })

});

// axios
//     .get(`https://www.roomph.pk/roomph_api/get_blogs`)
//     .then(res => {
//       //console.log(`statusCode: ${res.status}`)
//       // const datfsa = res.data.Collection;
//       //res.status(200).send({express: res.data.Collection});
//       //const dat = res.data.Collection.RowCount;
//       const r = res.data
//       const js = JSON.stringify(r, null, 4)
//       fs.writeFileSync('new.json', js);
//       //console.log(res.data.Collection)

//     })
//     .catch(error => {
//       console.error(error)
//     })
app.post('/api/world', (req, response) => {
    city = req.body.postCity;
    checkin = req.body.postCheckIn;
    checkout = req.body.postCheckOut;
    axios
        .get(`http://beapi.bookingwhizz.com/Connect.svc/xml/getaccommodationsearchtest?userid=10002&password=YGiDp9ex0022019&accommodationids=&agentid=1&cityname=${city}&checkin=${checkin}&checkout=${checkout}&limits=100&offset=0&Sortby=1&Sort=0&&multilanguageid=1&fullbook=1&rooms=1&adults=2`)
        .then(res => {
            var json;
            console.log(`statusCode: ${res.status}`);
            const xml = res.data;
            xml2js.parseString(xml, (err, result) => {
                if (err) {
                    throw err;
                }
                // const resData = result.Success.result[0].TotalCount;
                // console.log(resData.toString());
                // `result` is a JavaScript object
                // convert it to a JSON string
                json = JSON.stringify(result);
                // log JSON string
                //console.log(json);
                //console.log(json);
                
                response.send(json);

            });

            // app.get('/api/hello5', (req0, res0) => {
            //     res0.send({ express: json });
            // });

        })
        .catch(error => {
            console.error(error)
        })

});

//Build
// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function(request, response) {
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));