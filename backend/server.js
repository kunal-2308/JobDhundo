//Imports :
const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("../backend/DbConfig/dbConfig");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");

//Calls:
dotenv.config();
connectDb();

//Middlewares:
let app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin : "http://localhost:5173/",
    credentials: true, // Allow cookies to be sent and received
  })
);

app.use(express.json());

app.use(cookieParser());

//Routes:
app.use("/api/v1", authRoutes);

//Port Call:
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
