const express = require("express");
const router = express.Router();

const app = express();

const cors = require("cors");
const corsOptions = {
    origin : ["http://localhost:3000"]
};
app.use(cors(corsOptions));
app.use(express.json());  // pour autoriser json
app.use(router);

router.route("/")
    .get((req,res) => {
    // console.log("GET /");
        res.send((req.method + req.path));
    })
    .post(((req,res)=>{
        res.send((req.method + req.path));
    })
);

router.route("/formData")
    .get((req,res) => {
        res.send((req.body));
    })
    .post((req,res) => {
        const data = req.body;
        console.log(data);
        res.json(data);
    });

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is runnig on port ${PORT}.`);
});