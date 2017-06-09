const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());



app.get('/goats', function (req,res) {
console.log('hitting route');
res.json({
  "data" : {
    "type":"goat",
    "id":"1",
    "attributes": {
      "first-name": "Kilian",
      "last-name": "Jornet Burgada",
      "status": "G.O.A.T",
      "image": "https://cdn.ukc2.com/t_300h/291742.jpg"
      }
    }
  })
})

// "data" : {
//   "type":"goat",
//   "id":"1",
//   "attributes": {
//     "first-name": "Kilian",
//     "last-name": "Jornet Burgada",
//     "status": "G.O.A.T",
//     "image": "https://cdn.ukc2.com/t_300h/291742.jpg"
//
//     }
//   }

// "response": "Hello World!",
app.get('/goateee', function (req,res) {
res.send('Hello World version 2')
})
// var port = normalizePort(process.env.PORT || 5000);

var port = 3000;

// app.set('port', port);

app.listen(3000, function () {
  console.log(`escuchando a puerto ${port}`)
})

// this.get('/goat', function (){
//       return {
//         data: [{
//           type : 'kilian J info',
//           firstName: 'Kilian',
//           lastName: 'Jornet Burgada',
//           status: 'G.O.A.T',
//           image: ''
//         }]
//       };
//
//   });
