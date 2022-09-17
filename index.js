const express = require('express');
const app = express();
const { getGender } = require('gender-detection-from-name');


//app.get("/helper_test", () => {

 // const gender = getGender('Arek');
 // console.log(gender);
//});

app.use(express.static(__dirname + "/public"));
app.listen(3000, () => {
  console.log('server started');
});

"";

