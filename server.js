const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require("path");
const app = express();
const xml2js = require('xml2js');
const fs = require('fs');
var nodemailer = require('nodemailer');

const port = process.env.PORT || 5000;
let city = "";
let checkin = "";
let checkout = "";
let adults = "";
let rooms = "";
let data = "";
let priceRangeStart = "";
let priceRangeEnd = "";
let roomId = "";
let roomsData = "";
let roomQuantity = "";
let rating = "";
let premium = "";
let category = "";
let ndata = "";
let uName = "";
let email = "";
let phoneNo = "";
let uCity = "";
var forgotemail = "";
var signupEmail = "";

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
app.get('/api/hotelsList', (req, res) => {
    axios
        .get(`https://www.roomph.pk/roomph_api/search_accommodation`)
        .then(resp => {
            data = resp.data;
            console.log(data);
            res.send({ express: data });
        })
        .catch(error => {
            console.error(error)
        })

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

app.get('/api/reviews', (req, res) => {
    axios
        .get(`https://www.roomph.pk/roomph_api/get_reviews`)
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
    priceRangeStart = req.body.postPriceStart;
    priceRangeEnd = req.body.postPriceEnd;
    premium = req.body.postPremium;
    rating = req.body.postRating;
    category = req.body.postCategory;
    //console.log(`http://beapi.bookingwhizz.com/Connect.svc/xml/getaccommodationsearchtest?userid=10002&password=YGiDp9ex0022019&accommodationids=&agentid=1&cityname=${city}&checkin=${checkin}&checkout=${checkout}&offset=0&Sortby=2&Sort=1&&multilanguageid=1&fullbook=1&rooms=${rooms}&adults=${adults}&pricerangestart=${priceRangeStart}&pricerangeend=${priceRangeEnd}&ratings=${rating}&propertycategory=${category}`);
    axios
        .get(`http://beapi.bookingwhizz.com/Connect.svc/xml/getaccommodationsearchtest?userid=10002&password=YGiDp9ex0022019&accommodationids=&agentid=1&cityname=${city}&checkin=${checkin}&checkout=${checkout}&offset=0&Sortby=2&Sort=1&&multilanguageid=1&fullbook=1&rooms=${rooms}&adults=${adults}&pricerangestart=${priceRangeStart}&pricerangeend=${priceRangeEnd}&ratings=${rating}&propertycategory=${category}`)
        .then(res => {
            var json;
            console.log(`statusCode0: ${res.status}`);
            const xml = res.data;
            //console.log(xml);
            xml2js.parseString(xml, (err, result) => {
                if (err) {
                    throw err;
                }
                // `result` is a JavaScript object
                // convert it to a JSON string
                json = JSON.stringify(result);
                //console.log(json);
                response.send(json);
            });
        })
        .catch(error => {
            console.error(error)
        })

});

app.post('/api/checkout', (req, response) => {
    city = req.body.postCity;
    checkin = req.body.postCheckIn;
    checkout = req.body.postCheckOut;
    adults = req.body.postAdults;
    rooms = req.body.postRooms;
    //console.log(category);
    axios
        .get(`http://beapi.bookingwhizz.com/Connect.svc/xml/getaccommodationsearchtest?userid=10002&password=YGiDp9ex0022019&accommodationids=&agentid=1&cityname=${city}&checkin=${checkin}&checkout=${checkout}&offset=0&Sortby=1&Sort=0&&multilanguageid=1&fullbook=1&rooms=${rooms}&adults=${adults}`)
        .then(res => {
            var json;
            console.log(`statusCodePC: ${res.status}`);
            const xml = res.data;
            xml2js.parseString(xml, (err, result) => {
                if (err) {
                    throw err;
                }
                json = JSON.stringify(result);
                response.send(json);

            });
        })
        .catch(error => {
            console.error(error)
        })

});


// app.post('/api/proprtyDetails', (req, response) => {
//     city = req.body.postCity;
//     checkin = req.body.postCheckIn;
//     checkout = req.body.postCheckOut;
//     adults = req.body.postAdults;
//     rooms = req.body.postRooms;
//     //console.log(city,checkin,checkout,adults,rooms);
//     axios
//         .get(`http://beapi.bookingwhizz.com/Connect.svc/xml/getaccommodationsearchtest?userid=10002&password=YGiDp9ex0022019&accommodationids=&agentid=1&cityname=${city}&checkin=${checkin}&checkout=${checkout}&offset=0&Sortby=1&Sort=0&&multilanguageid=1&fullbook=1&rooms=${rooms}&adults=${adults}`)
//         .then(res => {
//             var json;
//             console.log(`statusCode0: ${res.status}`);
//             const xml = res.data;
//             xml2js.parseString(xml, (err, result) => {
//                 if (err) {
//                     throw err;
//                 }
//                 json = JSON.stringify(result);
//                 response.send(json);
//             });
//         })
//         .catch(error => {
//             console.error(error)
//         })

// });

app.post('/api/hotelDetails', (req, response) => {
    var hotelId = req.body.postHotelId;
    //console.log(hotelId)
    //console.log(city,checkin,checkout,adults,rooms);
    axios
        .get(`http://beapi.bookingwhizz.com/Connect.svc/xml/getaccommodationdetail?userid=10002&password=YGiDp9ex0022019&accommodationid=${hotelId}&multilanguageid=1`)
        .then(res => {
            var json;
            console.log(`statusCode0: ${res.status}`);
            const xml = res.data;
            xml2js.parseString(xml, (err, result) => {
                if (err) {
                    throw err;
                }
                json = JSON.stringify(result);
                //console.log(json);
                response.send(json);
            });
        })
        .catch(error => {
            console.error(error)
        })

});

app.post('/api/hotelReviews', (req, response) => {
    var hotelId = req.body.postHotelId;
    //console.log(hotelId);
    axios
        .get(`https://www.roomph.pk/api/review/?user=roomph&pass=kI83bp0&method=getreviews&hotel_id=${hotelId}`)
        .then(res => {
            var json;
            console.log(`statusCodeSU: ${res.status}`);
            const xml = res.data;
            //console.log(xml)
            xml2js.parseString(xml, (err, result) => {
                if (err) {
                    throw err;
                }
                json = JSON.stringify(result);
                //console.log(json)
                response.send(json);

            });
        })
        .catch(error => {
            console.error(error)
        })

});

app.post('/api/getRooms', (req, response) => {
    idd = req.body.postID;
    checkin = req.body.postCheckIn;
    checkout = req.body.postCheckOut;
    //console.log(city,checkin,checkout,adults,rooms);
    axios
        .get(`http://beapi.bookingwhizz.com/Connect.svc/xml/getavailability?userid=10002&password=YGiDp9ex0022019&accommodationid=${idd}&checkin=${checkin}&checkout=${checkout}&multilanguageid=1`)
        .then(res => {
            var json;
            console.log(`statusCodePR: ${res.status}`);
            const xml = res.data;
            xml2js.parseString(xml, (err, result) => {
                if (err) {
                    throw err;
                }
                json = JSON.stringify(result);
                response.send(json);

            });
        })
        .catch(error => {
            console.error(error)
        })

});

app.post('/api/book', (req, response) => {
    city = req.body.postCity;
    checkin = req.body.postCheckIn;
    checkout = req.body.postCheckOut;
    adults = req.body.postAdults;
    rooms = req.body.postRooms;
    accommodationId = req.body.postId;
    uName = req.body.postName;
    email = req.body.postEmail;
    uCity = req.body.postPhone;
    phoneNo = req.body.postUcity;
    //roomId = req.body.postRoomId;
    roomsData = JSON.parse(req.body.postPlanId);
    //roomQuantity = req.body.postRoomQ;
    rate = req.body.postRate;
    var ProfileId = req.body.postProfId;
    //console.log(city, uCity);
    //console.log(roomsData)
    const roomids = [];
    const planids = [];
    const roomquns = [];
    const roomrate = [];
    roomsData.map((d) => {
        roomids.push(d.roomId);
        planids.push(d.planId);
        roomquns.push(d.roomQ);
        roomrate.push(d.roomRate);
    })
    //console.log(roomids.toString());
    //console.log(planids.toString());
    // let totalPrice = roomrate.toString();
    // totalPrice = totalPrice.replace(/,/g, '+')
    // console.log(parseInt(totalPrice, 10))
    //console.log(`http://beapi.bookingwhizz.com/Connect.svc/xml/createreservation?userid=10002&password=YGiDp9ex0022019&accommodationid=10122&roomids=${roomids.toString()}&rateplanids=${planids.toString()}&extraids=${planids.toString()}&roomqty=${roomquns.toString()}&checkin=${checkin}&checkout=${checkout}&booker_firstname=${uName}&booker_lastname=testbooking&booker_email=${email}&booker_telephone=${phoneNo}&booker_street=adasdasda&booker_zipcode=123213&booker_city=dsdasd&booker_country=PK&guest_qtys=${planids.toString()}&guest_names=test booking,sdasdasd,sdadasd&guest_emails=usamaaslam,sdasdasd,sdadasd &guest_telephones=922132131231&comments=testing&totalprice=92.00&ratesbydate=${roomrate.toString()}&payment_method=&charged_amount=10&reservation_type=&channelids=&promotion_code=&pms=0&pmsids=0&discounted_price=0.00&partnerid=BW&loyaltypoints=&loyaltydiscount=&membertype=&programname=&signupdate=&statuscode=&membership_id=&converted_currency=&converted_price=0.00&sourceid=Direct&profileid=${ProfileId}&multilanguageid=1&cc_no=`);
    axios
        .get(`http://beapi.bookingwhizz.com/Connect.svc/xml/createreservation?userid=10002&password=YGiDp9ex0022019&accommodationid=${accommodationId}&roomids=${roomids.toString()}&rateplanids=${planids.toString()}&extraids=${planids.toString()}&roomqty=${roomquns.toString()}&checkin=${checkin}&checkout=${checkout}&booker_firstname=${uName}&booker_lastname=testbooking&booker_email=${email}&booker_telephone=${phoneNo}&booker_street=adasdasda&booker_zipcode=123213&booker_city=dsdasd&booker_country=PK&guest_qtys=${planids.toString()}&guest_names=test booking,sdasdasd,sdadasd&guest_emails=usamaaslam,sdasdasd,sdadasd &guest_telephones=922132131231&comments=dasdas&totalprice=92.00&ratesbydate=${roomrate.toString()}&payment_method=&charged_amount=10&reservation_type=&channelids=&promotion_code=&pms=0&pmsids=0&discounted_price=0.00&partnerid=BW&loyaltypoints=&loyaltydiscount=&membertype=&programname=&signupdate=&statuscode=&membership_id=&converted_currency=&converted_price=0.00&sourceid=Direct&profileid=${ProfileId}&multilanguageid=1&cc_no=`)
        .then(res => {
            var json;
            console.log(`statusCode: ${res.status}`);
            const xml = res.data;
            xml2js.parseString(xml, (err, result) => {
                if (err) {
                    throw err;
                }
                json = JSON.stringify(result);
                //console.log(json);
                response.send(json);
            });
        })
        .catch(error => {
            console.error(error)
        })
});

app.post('/api/signup', (req, response) => {
    var fullname1 = req.body.postName;
    signupEmail = req.body.postEmail;
    var password1 = req.body.postPassword;
    var phone1 = req.body.postPhoneNo;
    //console.log(fullname1, signupEmail, password1, phone1);
    axios
        .get(`https://www.roomph.pk/api/?user=roomph&pass=kI83bp0&method=register&firstname=${fullname1}&lastname=${fullname1}&email=${signupEmail}&password=${password1}`)
        .then(res => {
            var json;
            console.log(`statusCodeSU: ${res.status}`);
            const xml = res.data;
            //console.log(xml)
            xml2js.parseString(xml, (err, result) => {
                if (err) {
                    throw err;
                }
                json = JSON.stringify(result);
                console.log(json)
                response.send(json);

            });
        })
        .catch(error => {
            console.error(error)
        })

});

app.post('/api/signin', (req, response) => {
    var email = req.body.postEmail;
    var password = req.body.postPassword;
    //console.log(email, password);
    axios
        .get(`https://www.roomph.pk/api/?user=roomph&pass=kI83bp0&method=login&email=${email}&password=${password}`)
        .then(res => {
            var json;
            console.log(`statusCodeSI: ${res.status}`);
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

app.post('/api/forgot', (req, response) => {
    forgotemail = req.body.postEmail;
    //console.log(forgotemail);
    axios
        .get(`https://www.roomph.pk/api/?user=roomph&pass=kI83bp0&method=forgot&email=${forgotemail}&password=`)
        .then(res => {
            var json;
            console.log(`statusCodeF: ${res.status}`);
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

app.post('/api/changepassword', (req, response) => {
    var key = req.body.postKey;
    var password = req.body.postPassword;
    var rePassword = req.body.postRePassword;
    //console.log(key, password, rePassword);
    axios
        .get(`https://www.roomph.pk/api/?user=roomph&pass=kI83bp0&method=changepass&email=${forgotemail}&key=${key}&new_password=${password}&re_password=${rePassword}`)
        .then(res => {
            var json;
            console.log(`statusCodeF: ${res.status}`);
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

app.post('/api/changepassword', (req, response) => {
    var key = req.body.postKey;
    //console.log(key);
    axios
        .get(`https://www.roomph.pk/api/?user=roomph&pass=kI83bp0&method=verify_account&email=${signupEmail}&key=${key}`)
        .then(res => {
            var json;
            console.log(`statusCodeF: ${res.status}`);
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

app.post('/api/bookings', (req, response) => {
    //var key = req.body.postKey;
    //console.log(key);
    var proId = req.body.postProfileId;
    axios
        .get(`http://beapi.bookingwhizz.com/connect.svc/xml/getuserreservations?userid=10002&password=YGiDp9ex0022019&profileid=${proId}`)
        .then(res => {
            var json;
            console.log(`statusCodeF: ${res.status}`);
            const xml = res.data;
            xml2js.parseString(xml, (err, result) => {
                if (err) {
                    throw err;
                }
                json = JSON.stringify(result);
                //console.log(json);
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
app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
app.listen(port, () => console.log(`Listening on port ${port}`));