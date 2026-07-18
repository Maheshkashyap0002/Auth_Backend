const express = require('express')
const authRoute = require("./routes/auth.routers")
const cookieParser = require("cookie-parser")

const postRoute = require("./routes/post.router")


const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute );
app.use('/api/posts', postRoute );


module.exports = app ;