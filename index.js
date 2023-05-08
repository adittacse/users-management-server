const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: "Leo Messi", email: "leomessi@gmail.com" },
    { id: 2, name: "Di Maria", email: "dimaria@gmail.com" },
    { id: 3, name: "Rudrigo De Paul", email: "depaul@gmail.com" },
]

app.get("/", (req, res) => {
    res.send("User management server is running!");
});

app.get("/users", (req, res) => {
    res.send(users);
});

app.post("/users", (req, res) => {
    console.log("post api hitting");
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});