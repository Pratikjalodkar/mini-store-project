const express = require('express');
const app = express();

const cookieParser = require("cookie-parser")
const path = require("path");

const db = require("./config/mongoose-connection");
const ownersRoutes = require("./routes/ownersRoutes");
const productsRoutes = require("./routes/productsRoutes");
const usersRoutes = require("./routes/usersRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs');

app.use('/owners', ownersRoutes);
app.use("/users", usersRoutes);
app.use('/products', productsRoutes);

app.listen(3000, (req, res) => {
    console.log("listening on 3000");
})