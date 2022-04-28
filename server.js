const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require("path");
const app = express();

const port = process.env.PORT || 5000;
let city = "";
let data = "";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  axios
    .get(`https://www.roomph.pk/roomph_api/get_banners?limit=1`)
    .then(resp => {
      data = resp.data;
      //console.log(data);
      res.send({ express: data}); 
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
      res.send({ express: data}); 
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
    res.send({ express: data}); 
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
    res.send({ express: data}); 
  })
  .catch(error => {
    console.error(error)
  })

});

// axios
//     .get(`https://www.roomph.pk/roomph_api/get_blogs`)
//     .then(res => {
//       //console.log(`statusCode: ${res.status}`)
//       // const data = res.data.Collection;
//       //res.status(200).send({express: res.data.Collection});
//       //const dat = res.data.Collection.RowCount;
//       console.log(res.data.Collection.Rows[0].ShortDescription)
//       //console.log(res.data.Collection)
      
//     })
//     .catch(error => {
//       console.error(error)
//     })

app.post('/api/world', (req, res) => {
  city = req.body.post;
  axios
  .get(`http://beapi.bookingwhizz.com/Connect.svc/xml/getaccommodationsearchtest?userid=10002&password=YGiDp9ex0022019&accommodationids=&agentid=1&cityname=${city}&checkin=2022-04-27&checkout=2022-05-13&limits=100&offset=0&Sortby=1&Sort=0&&multilanguageid=1&fullbook=1&rooms=1&adults=2`)
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })

  console.log(`Loading Results for ${city}`);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

// //Build
// // Step 1:
// app.use(express.static(path.resolve(__dirname, "./client/build")));
// // Step 2:
// app.get("*", function (request, response) {
//   response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
// });

app.listen(port, () => console.log(`Listening on port ${port}`));