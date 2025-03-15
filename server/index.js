const express = require('express');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const router = require('./routes/index.router');
const mongoose = require('./config/database');
const cors = require('cors');


require('dotenv').config();

const app = express();
const post = process.env.PORT || 3000;


mongoose.connect();

app.use(express.json());

app.use(cookieParser("JHGJKLKLGFLJK"));
app.use(session({ cookie: { maxAge: 60000 } }));

const corsOptions = {
    origin: true, //included origin as true
    credentials: true, //included credentials as true
    // methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    // preflightContinue: false
};

app.use(cors(corsOptions));


router(app);


app.listen(post, () => {
    console.log(`App listening on port ${post}`);
})

