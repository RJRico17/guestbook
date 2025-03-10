import express from "express";
import validateForm from './public/script/validation.js';
const app = express();
app.use(express.static('public'));
app.use(express.static('views'));
app.use(express.urlencoded({extended: true}));
app.set('view engine','ejs');

const contacts = [];
const PORT = 2000;

app.listen(PORT, (req,res) => {
    console.log(`Server is running at http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.render(`index`);
})
app.post('/thankyou', (req,res) => {
    const contact = {
        firstName: req.body.fname,
        lastName: req.body.lname,
        jobTitle: req.body.title,
        company: req.body.company,
        linkedin: req.body.linkedin,
        email: req.body.email,
        howMeet: req.body.meet,
        otherMeet: req.body.othermeet,
        message: req.body.message,
        mailing: req.body.mailing,
        format: req.body.format,
        dateTime: new Date()
    }
    const result = validateForm(contact);
    if (!result.isValid) {
        console.log(result.errors);
        res.send(result.errors);
        return;
    }
    contacts.push(contact);
    console.log(contact);
    res.render(`thankyou`,{contact});
});

app.get(`/admin`, (req,res) => {
    if (contacts.length === 0) {
        res.send("No contacts!");
    }
    else {
        res.send(contacts);
    }
})