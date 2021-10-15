require("dotenv").config();

const express = require("express");
const cors = require('cors');
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
	credentials: true,
	origin: "http://localhost:3000"
}));

app.use(cookieParser());

require("./config/mongoose.config");

require("./routes/item.routes")(app);
require("./routes/shoppingCart.routes")(app);
require("./routes/user.routes")(app);

app.listen(8000, () => 
console.log(`You have successfully connected to port ${process.env.MY_PORT}`));

// process.env.MY_PORT