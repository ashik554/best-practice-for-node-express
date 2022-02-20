/// {This is a common convension to keep everything related to express in the app.js file and everything related to server{exmaple: starting file and env variables,database configuration ,error handling staffs etc} in the server.js file}
//Start server
const dotenv = require('dotenv');
/// SETTING OF ENV FILE
dotenv.config({ path: './config.env' });
// dotenv must write before app . we can not read it inside app.
const app = require('./app');
// console.log(process.env);
// console.log(process.env.PORT);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
const x = 23;
x + 2;
