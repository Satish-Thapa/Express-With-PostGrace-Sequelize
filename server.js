const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const router = require("./router/routes")

//Database Connection
const db = require('./config/database');
db.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})

const app = express();
app.use(express.urlencoded({ extended: true }))


app.use(bodyParser.json());
app.use(express.json())
app.use(cors("*"));

app.use('/', router)



const PORT = process.env.PORT || 5000;
db.sync().then(() => { //db.sync function updates the database with new tables or any changes 
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
}).catch(err => console.log("Error: " + err));