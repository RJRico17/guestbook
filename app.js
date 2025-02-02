import express from "express";
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

const info = [];
const PORT = 3002;

app.listen(PORT, (req,res) => {
    console.log(`Server is running at http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/index.html`);
})

app.post('/thankyou', (req,res) => {
    info.push(req.body);
    res.sendFile(`${import.meta.dirname}/thankyou.html`);
    console.log(req.body);
});

app.get(`/admin`, (req,res) => {
    res.send(info);
})