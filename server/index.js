const express = require('express');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const router = require('./routes/index.router');
const mongoose = require('./config/database');


require('dotenv').config();

const app = express();
const post = process.env.PORT || 3000;


mongoose.connect();

app.use(cookieParser("JHGJKLKLGFLJK"));
app.use(session({ cookie: { maxAge: 60000 } }));

router(app);


app.listen(post, () => {
    console.log(`App listening on port ${post}`);
})

