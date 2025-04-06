import express from 'express'
import markDownRoute from "./routes/markdownRoutes"
const cors = require("cors")
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 7231;

app.use(cors());
app.use(express.json()); 
app.use("/api",markDownRoute);

app.listen(PORT,()=>{
    console.log(`listening to port: ${PORT}`)
});