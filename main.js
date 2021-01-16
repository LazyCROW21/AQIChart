const express = require('express');
const mongoose = require('mongoose');
const AirQIdx = require('./models/airqstat');
const path = require('path');


const app = express();

const PORT = 3000;


// mongoose.connect('mongodb://localhost:27017/AirQualityIndex', {useNewUrlParser: true, useUnifiedTopology: true}, () => {
//     console.log('Connected to DB');
// });

app.set('view engine', 'ejs');

// Routes
app.use(express.static('public'));

// Website Routes
app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/forcast', (req, res)=>{
    res.render('forcast');
});

app.get('/services', (req, res)=>{
    res.render('services');
});

app.get('/contactus', (req, res)=>{
    res.render('contactus');
});


// APIs
// app.get('/test', (req, res)=>{
//     const data = {
//         "results": [
//           {
//             "id": 1,
//             "text": "Option 1"
//           },
//           {
//             "id": 2,
//             "text": "Option 2"
//           },
//           {
//             "id": 3,
//             "text": "Option 3"
//           }
//         ]
//     };
//     res.send(data);
// });

// app.get('/alldata', (req, res)=>{
//     console.log("Requested All Data");
//     AirQIdx.find({}, function (err, data) {
//         if(err)
//         {
//             console.error(err);
//         }
//         else
//         {
//             console.log("All data sent");
//             res.send(data);
//         }
//     });
//     // res.send("Requested Id: "+req.params.id);
// });

// app.get('/aiqstat/:id', (req, res)=>{
//     console.log("Requested Id: ", req.params.id);
//     AirQIdx.findOne({Index: req.params.id}, function (err, data) {
//         if(err)
//         {
//             console.error(err);
//         }
//         else
//         {
//             console.log(data);
//             res.send(data);
//         }
//     });
//     // res.send("Requested Id: "+req.params.id);
// });

// app.get('/save', (req, res)=>{
//     var stat = new AirQIdx({
//         _id: mongoose.Types.ObjectId(),
//         Index: -1,
//         PM2dot5: -1,
//         PM10: -1,
//         NO: -1, 
//         NO2: -1,
//         NOx: -1,
//         CO: -1,
//         SO2: -1,
//         O3: -1,
//         AQI: -1,
//         AQI_Bucket: 'String'
//     });
//     stat.save().then((result)=>{
//         console.log(result);
//         res.send(result);
//     }).catch((err)=>{
//         console.log(err);
//     });
// });

app.listen(PORT);