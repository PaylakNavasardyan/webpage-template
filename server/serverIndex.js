const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const secretKey = "your_secret_key"; 

app.use(cors());
app.use(bodyParser.json());

const users = [];

app.post('/register', (req, res) => {
    const { userName, password } = req.body;
    
    if (!userName || !password) {
        return res.status(400).json({ message: "enter your login and password" });
    }

    const existingUser = users.find(user => user.userName === userName);
    if (existingUser) {
        return res.status(400).json({ message: "user already exists" });
    }

    users.push({ userName, password });
    res.status(201).json({ message: "registration succesfull" });
});

app.post('/login', (req, res) => {
    const { userName, password } = req.body;

    const user = users.find(user => user.userName === userName && user.password === password);
    
    if (!user) {
        return res.status(401).json({ message: "wrong login or password" });
    }

    const token = jwt.sign({ userName }, secretKey, { expiresIn: "1h" });
    
    res.json({ token });
});

app.get('/protected', (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "no token" });
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        res.json({ message: "access allowed", user: decoded });
    } catch (err) {
        res.status(403).json({ message: "wrong token" });
    }
});

app.listen(8080, () => {
    console.log('server is listening port 8080');
});