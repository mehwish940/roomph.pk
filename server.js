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
let planId = "";
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
    console.log(rating,category);
    axios
        .get(`http://beapi.bookingwhizz.com/Connect.svc/xml/getaccommodationsearchtest?userid=10002&password=YGiDp9ex0022019&accommodationids=&agentid=1&cityname=${city}&checkin=${checkin}&checkout=${checkout}&limits=10&offset=0&Sortby=1&Sort=0&&multilanguageid=1&fullbook=1&rooms=${rooms}&adults=${adults}&pricerangestart=${priceRangeStart}&pricerangeend=${priceRangeEnd}&ratings=${rating}&propertycategory=${category}`)
        .then(res => {
            var json;
            console.log(`statusCode0: ${res.status}`);
            const xml = res.data;
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
    console.log(category);
    axios
        .get(`http://beapi.bookingwhizz.com/Connect.svc/xml/getaccommodationsearchtest?userid=10002&password=YGiDp9ex0022019&accommodationids=&agentid=1&cityname=${city}&checkin=${checkin}&checkout=${checkout}&limits=10&offset=0&Sortby=1&Sort=0&&multilanguageid=1&fullbook=1&rooms=${rooms}&adults=${adults}`)
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


app.post('/api/proprtyDetails', (req, response) => {
    city = req.body.postCity;
    checkin = req.body.postCheckIn;
    checkout = req.body.postCheckOut;
    adults = req.body.postAdults;
    rooms = req.body.postRooms;
    //console.log(city,checkin,checkout,adults,rooms);
    axios
        .get(`http://beapi.bookingwhizz.com/Connect.svc/xml/getaccommodationsearchtest?userid=10002&password=YGiDp9ex0022019&accommodationids=&agentid=1&cityname=${city}&checkin=${checkin}&checkout=${checkout}&limits=10&offset=0&Sortby=1&Sort=0&&multilanguageid=1&fullbook=1&rooms=${rooms}&adults=${adults}`)
        .then(res => {
            var json;
            console.log(`statusCode0: ${res.status}`);
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
    phoneNo = req.body.postPhone;
    uCity = req.body.postUcity;
    roomId = req.body.postRoomId;
    planId = req.body.postPlanId;
    roomQuantity = req.body.postRoomQ;
    rate = req.body.postRate;
    console.log(rooms,roomId,planId,roomQuantity);
    if(rooms == 2){
        rooms = 1;
    axios
        .get(`http://beapi.bookingwhizz.com/Connect.svc/xml/createreservation?userid=10002&password=YGiDp9ex0022019&accommodationid=${accommodationId}&roomids=${roomId},${roomId}&rateplanids=${planId},${planId}&extraids=0,0&roomqty=${roomQuantity},${rooms}&checkin=${checkin}&checkout=${checkout}&booker_firstname=${uName}&booker_lastname=test&booker_email=${email}&booker_telephone=${phoneNo}&booker_street=eeqweqweqweqweqwe&booker_zipcode=2313123&booker_city=${uCity}&booker_country=PK&guest_qtys=${adults}&guest_names=${uName}&guest_emails=test test,qeqweqwe&guest_telephones=92232131231231&comments=dfdsfsdfdf&totalprice=${rate}&ratesbydate=2.00,2.00&payment_method=&charged_amount=0&reservation_type=&channelids=&promotion_code=&pms=0&pmsids=0&discounted_price=0.00&partnerid=BW&loyaltypoints=&loyaltydiscount=&membertype=&programname=&signupdate=&statuscode=&membership_id=&converted_currency=&converted_price=0.00&sourceid=Direct&profileid=0&multilanguageid=1&cc_no=`)   
// http://beapi.bookingwhizz.com/Connect.svc/xml/createreservation?userid=10002&password=YGiDp9ex0022019&accommodationid=${accommodationId}&roomids=${roomId}&rateplanids=${planId}&extraids=0,0&roomqty=${rooms}&checkin=${checkin}&checkout=${checkout}&booker_firstname=${uName}&booker_lastname=test&booker_email=${email}&booker_telephone=${phoneNo}&booker_street=eeqweqweqweqweqwe&booker_zipcode=2313123&booker_city=${uCity}&booker_country=PK&guest_qtys=${adults}&guest_names=${uName}&guest_emails=test test,qeqweqwe&guest_telephones=92232131231231&comments=dfdsfsdfdf&totalprice=${rate}&ratesbydate=2.00,2.00&payment_method=&charged_amount=0&reservation_type=&channelids=&promotion_code=&pms=0&pmsids=0&discounted_price=0.00&partnerid=BW&loyaltypoints=&loyaltydiscount=&membertype=&programname=&signupdate=&statuscode=&membership_id=&converted_currency=&converted_price=0.00&sourceid=Direct&profileid=0&multilanguageid=1&cc_no=
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
        })}
        else if(rooms == 1){
            axios
            .get(`http://beapi.bookingwhizz.com/Connect.svc/xml/createreservation?userid=10002&password=YGiDp9ex0022019&accommodationid=${accommodationId}&roomids=${roomId}&rateplanids=${planId}&extraids=0,0&roomqty=${rooms}&checkin=${checkin}&checkout=${checkout}&booker_firstname=${uName}&booker_lastname=test&booker_email=${email}&booker_telephone=${phoneNo}&booker_street=eeqweqweqweqweqwe&booker_zipcode=2313123&booker_city=${uCity}&booker_country=PK&guest_qtys=${adults}&guest_names=${uName}&guest_emails=test test,qeqweqwe&guest_telephones=92232131231231&comments=dfdsfsdfdf&totalprice=${rate}&ratesbydate=2.00,2.00&payment_method=&charged_amount=0&reservation_type=&channelids=&promotion_code=&pms=0&pmsids=0&discounted_price=0.00&partnerid=BW&loyaltypoints=&loyaltydiscount=&membertype=&programname=&signupdate=&statuscode=&membership_id=&converted_currency=&converted_price=0.00&sourceid=Direct&profileid=0&multilanguageid=1&cc_no=`)   
    // http://beapi.bookingwhizz.com/Connect.svc/xml/createreservation?userid=10002&password=YGiDp9ex0022019&accommodationid=${accommodationId}&roomids=${roomId}&rateplanids=${planId}&extraids=0,0&roomqty=${rooms}&checkin=${checkin}&checkout=${checkout}&booker_firstname=${uName}&booker_lastname=test&booker_email=${email}&booker_telephone=${phoneNo}&booker_street=eeqweqweqweqweqwe&booker_zipcode=2313123&booker_city=${uCity}&booker_country=PK&guest_qtys=${adults}&guest_names=${uName}&guest_emails=test test,qeqweqwe&guest_telephones=92232131231231&comments=dfdsfsdfdf&totalprice=${rate}&ratesbydate=2.00,2.00&payment_method=&charged_amount=0&reservation_type=&channelids=&promotion_code=&pms=0&pmsids=0&discounted_price=0.00&partnerid=BW&loyaltypoints=&loyaltydiscount=&membertype=&programname=&signupdate=&statuscode=&membership_id=&converted_currency=&converted_price=0.00&sourceid=Direct&profileid=0&multilanguageid=1&cc_no=
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
        }
        else if(rooms == 3){
            rooms = 1;
        axios
            .get(`http://beapi.bookingwhizz.com/Connect.svc/xml/createreservation?userid=10002&password=YGiDp9ex0022019&accommodationid=${accommodationId}&roomids=${roomId},${roomId},${roomId}&rateplanids=${planId},${planId},${planId}&extraids=0,0&roomqty=${rooms},${rooms},${rooms}&checkin=${checkin}&checkout=${checkout}&booker_firstname=${uName}&booker_lastname=test&booker_email=${email}&booker_telephone=${phoneNo}&booker_street=eeqweqweqweqweqwe&booker_zipcode=2313123&booker_city=${uCity}&booker_country=PK&guest_qtys=${adults}&guest_names=${uName}&guest_emails=test test,qeqweqwe&guest_telephones=92232131231231&comments=dfdsfsdfdf&totalprice=${rate}&ratesbydate=2.00,2.00&payment_method=&charged_amount=0&reservation_type=&channelids=&promotion_code=&pms=0&pmsids=0&discounted_price=0.00&partnerid=BW&loyaltypoints=&loyaltydiscount=&membertype=&programname=&signupdate=&statuscode=&membership_id=&converted_currency=&converted_price=0.00&sourceid=Direct&profileid=0&multilanguageid=1&cc_no=`)   
    // http://beapi.bookingwhizz.com/Connect.svc/xml/createreservation?userid=10002&password=YGiDp9ex0022019&accommodationid=${accommodationId}&roomids=${roomId}&rateplanids=${planId}&extraids=0,0&roomqty=${rooms}&checkin=${checkin}&checkout=${checkout}&booker_firstname=${uName}&booker_lastname=test&booker_email=${email}&booker_telephone=${phoneNo}&booker_street=eeqweqweqweqweqwe&booker_zipcode=2313123&booker_city=${uCity}&booker_country=PK&guest_qtys=${adults}&guest_names=${uName}&guest_emails=test test,qeqweqwe&guest_telephones=92232131231231&comments=dfdsfsdfdf&totalprice=${rate}&ratesbydate=2.00,2.00&payment_method=&charged_amount=0&reservation_type=&channelids=&promotion_code=&pms=0&pmsids=0&discounted_price=0.00&partnerid=BW&loyaltypoints=&loyaltydiscount=&membertype=&programname=&signupdate=&statuscode=&membership_id=&converted_currency=&converted_price=0.00&sourceid=Direct&profileid=0&multilanguageid=1&cc_no=
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
            })}
            else if(rooms == 4){
                rooms = 1;
            axios
                .get(`http://beapi.bookingwhizz.com/Connect.svc/xml/createreservation?userid=10002&password=YGiDp9ex0022019&accommodationid=${accommodationId}&roomids=${roomId},${roomId},${roomId},${roomId}&rateplanids=${planId},${planId},${planId},${planId}&extraids=0,0&roomqty=${rooms},${rooms},${rooms},${rooms}&checkin=${checkin}&checkout=${checkout}&booker_firstname=${uName}&booker_lastname=test&booker_email=${email}&booker_telephone=${phoneNo}&booker_street=eeqweqweqweqweqwe&booker_zipcode=2313123&booker_city=${uCity}&booker_country=PK&guest_qtys=${adults}&guest_names=${uName}&guest_emails=test test,qeqweqwe&guest_telephones=92232131231231&comments=dfdsfsdfdf&totalprice=${rate}&ratesbydate=2.00,2.00&payment_method=&charged_amount=0&reservation_type=&channelids=&promotion_code=&pms=0&pmsids=0&discounted_price=0.00&partnerid=BW&loyaltypoints=&loyaltydiscount=&membertype=&programname=&signupdate=&statuscode=&membership_id=&converted_currency=&converted_price=0.00&sourceid=Direct&profileid=0&multilanguageid=1&cc_no=`)   
        // http://beapi.bookingwhizz.com/Connect.svc/xml/createreservation?userid=10002&password=YGiDp9ex0022019&accommodationid=${accommodationId}&roomids=${roomId}&rateplanids=${planId}&extraids=0,0&roomqty=${rooms}&checkin=${checkin}&checkout=${checkout}&booker_firstname=${uName}&booker_lastname=test&booker_email=${email}&booker_telephone=${phoneNo}&booker_street=eeqweqweqweqweqwe&booker_zipcode=2313123&booker_city=${uCity}&booker_country=PK&guest_qtys=${adults}&guest_names=${uName}&guest_emails=test test,qeqweqwe&guest_telephones=92232131231231&comments=dfdsfsdfdf&totalprice=${rate}&ratesbydate=2.00,2.00&payment_method=&charged_amount=0&reservation_type=&channelids=&promotion_code=&pms=0&pmsids=0&discounted_price=0.00&partnerid=BW&loyaltypoints=&loyaltydiscount=&membertype=&programname=&signupdate=&statuscode=&membership_id=&converted_currency=&converted_price=0.00&sourceid=Direct&profileid=0&multilanguageid=1&cc_no=
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
                })}
                else if(rooms == 5){
                    rooms = 1;
                axios
                    .get(`http://beapi.bookingwhizz.com/Connect.svc/xml/createreservation?userid=10002&password=YGiDp9ex0022019&accommodationid=${accommodationId}&roomids=${roomId},${roomId},${roomId},${roomId},${roomId}&rateplanids=${planId},${planId},${planId},${planId},${planId}&extraids=0,0&roomqty=${rooms},${rooms},${rooms},${rooms},${rooms}&checkin=${checkin}&checkout=${checkout}&booker_firstname=${uName}&booker_lastname=test&booker_email=${email}&booker_telephone=${phoneNo}&booker_street=eeqweqweqweqweqwe&booker_zipcode=2313123&booker_city=${uCity}&booker_country=PK&guest_qtys=${adults}&guest_names=${uName}&guest_emails=test test,qeqweqwe&guest_telephones=92232131231231&comments=dfdsfsdfdf&totalprice=${rate}&ratesbydate=2.00,2.00&payment_method=&charged_amount=0&reservation_type=&channelids=&promotion_code=&pms=0&pmsids=0&discounted_price=0.00&partnerid=BW&loyaltypoints=&loyaltydiscount=&membertype=&programname=&signupdate=&statuscode=&membership_id=&converted_currency=&converted_price=0.00&sourceid=Direct&profileid=0&multilanguageid=1&cc_no=`)   
            // http://beapi.bookingwhizz.com/Connect.svc/xml/createreservation?userid=10002&password=YGiDp9ex0022019&accommodationid=${accommodationId}&roomids=${roomId}&rateplanids=${planId}&extraids=0,0&roomqty=${rooms}&checkin=${checkin}&checkout=${checkout}&booker_firstname=${uName}&booker_lastname=test&booker_email=${email}&booker_telephone=${phoneNo}&booker_street=eeqweqweqweqweqwe&booker_zipcode=2313123&booker_city=${uCity}&booker_country=PK&guest_qtys=${adults}&guest_names=${uName}&guest_emails=test test,qeqweqwe&guest_telephones=92232131231231&comments=dfdsfsdfdf&totalprice=${rate}&ratesbydate=2.00,2.00&payment_method=&charged_amount=0&reservation_type=&channelids=&promotion_code=&pms=0&pmsids=0&discounted_price=0.00&partnerid=BW&loyaltypoints=&loyaltydiscount=&membertype=&programname=&signupdate=&statuscode=&membership_id=&converted_currency=&converted_price=0.00&sourceid=Direct&profileid=0&multilanguageid=1&cc_no=
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
                    })}
        

});

app.post('/api/signup', (req, response) => {
    var fullname1 = req.body.postName;
    signupEmail = req.body.postEmail;
    var password1 = req.body.postPassword;
    var phone1 = req.body.postPhoneNo;
    console.log(fullname1,signupEmail,password1,phone1);
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
    console.log(email,password);
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
    console.log(forgotemail);
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
            // let transporter = nodemailer.createTransport({
            //     service: 'gmail',
            //     auth: {
            //       type: 'OAuth2',
            //       user: 'a7lamusama@gmail.com',
            //       pass: 'Usama.1000',
            //       clientId: '818939098430-8qdpkbnl4m2eud4rgjo84uv7uo379ttj.apps.googleusercontent.com',
            //       clientSecret: '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',
            //       refreshToken: '1//04oWCsHbaKGrECgYIARAAGAQSNgF-L9IraZ5iJeDuwDPMTQ94u4FwoeESHlni6cM7vD3xcfsxAiqKbTMHS335eU6ltBsejcEbwQ'
            //     }
            //   });
            
            //   let mailOptions = {
            //     from: 'a7lamusama@gmail.com',
            //     to: {email},
            //     subject: 'Change Password',
            //     text: `Your Key is ${key}`
            //   };
            //   transporter.sendMail(mailOptions, function(err, data) {
            //     if (err) {
            //       console.log("Error " + err);
            //     } else {
            //       console.log("Email sent successfully");
            //     }
            //   });

        })
        .catch(error => {
            console.error(error)
        })

});

app.post('/api/changepassword', (req, response) => {
    var key = req.body.postKey;
    var password = req.body.postPassword;
    var rePassword = req.body.postRePassword;
    console.log(key, password, rePassword);
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
    console.log(key);
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
//Build
// Step 1:

app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function(request, response) {
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
app.listen(port, () => console.log(`Listening on port ${port}`));