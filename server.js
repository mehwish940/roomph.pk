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
let adults = "";
let rooms = "";
let data = "";
let ndata = "";
let uName = "";
let email = "";
let phoneNo = "";
let uCity = "";

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
    adults = req.body.postAdults;
    rooms = req.body.postRooms;
    axios
        .get(`http://beapi.bookingwhizz.com/Connect.svc/xml/getaccommodationsearchtest?userid=10002&password=YGiDp9ex0022019&accommodationids=&agentid=1&cityname=${city}&checkin=${checkin}&checkout=${checkout}&limits=10&offset=0&Sortby=1&Sort=0&&multilanguageid=1&fullbook=1&rooms=${rooms}&adults=${adults}`)
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

app.post('/api/world1', (req, response) => {
    city = req.body.postCity;
    checkin = req.body.postCheckIn;
    checkout = req.body.postCheckOut;
    adults = req.body.postAdults;
    rooms = req.body.postRooms;
    accommodationId = req.body.postId;
    uName = req.body.postName;
    email = req.body.postEmail;
    phoneNo = req.body.postPhone;
    uCity = req.body.postUcity;

    axios 
        .get(`http://beapi.bookingwhizz.com/Connect.svc/xml/createreservation?userid=10002&password=YGiDp9ex0022019&accommodationid=${accommodationId}&roomids=2&rateplanids=1&extraids=0&roomqty=${rooms}&checkin=${checkin}&checkout=${checkout}&booker_firstname={name}&booker_lastname=Ali&booker_email=${email}&booker_telephone=${phoneNo}&cc_expirydate=012020&cc_holdername=asfd&cc_type=VI&booker_street=usama+test&booker_zipcode=52370&booker_city=${uCity}&booker_country=pakistan&guest_qtys=${adults}&guest_names=${uName}&guest_emails=u7amaaslam@gmail.com&guest_telephones=03016441046&comments=asd&totalprice=999.99&ratesbydate=999.99&payment_method=&charged_amount=&channelids=&reservation_type=&promotion_code=&pms=0&discounted_price=0&converted_currency=&converted_price=0&sourceid=homeshopping&cc_no=4111111111111111&cc_cvc=123`)
        
// http://beapi.bookingwhizz.com/Connect.svc/xml/createreservation?userid=10002&password=YGiDp9ex0022019&accommodationid=10247&roomids=2&rateplanids=1&extraids=0&roomqty=1&checkin=2022-05-29&checkout=2022-06-12&booker_firstname=Usama&booker_lastname=Aslam&booker_email=u7amaaslam@gmail.com&booker_telephone=03016441046&cc_expirydate=012020&cc_holdername=asfd&cc_type=VI&booker_street=hamzhai+test&booker_zipcode=52370&booker_city=lahore&booker_country=pakistan&guest_qtys=2&guest_names=Hamza&guest_emails=Hamza&guest_telephones=09890989909&comments=asd&totalprice=999.99&ratesbydate=999.99&payment_method=&charged_amount=&channelids=&reservation_type=&promotion_code=&pms=0&discounted_price=0&converted_currency=&converted_price=0&sourceid=homeshopping&cc_no=4111111111111111&cc_cvc=123
        .then(res => {
            var json;
            console.log(`statusCode: ${res.status}`);
            const xml = res.data;
            xml2js.parseString(xml, (err, result) => {
                if (err) {
                    throw err;
                }
                json = JSON.stringify(result);
                console.log(json);
                response.send(json);
            });
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