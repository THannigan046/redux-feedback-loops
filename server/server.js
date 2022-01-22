const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool');
/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/feedback', (req, res) => {
    let feedback = req.body;
    console.log('adding feedback', req.body);

    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4)
    `;
    pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
        .then(result => {
            res.sendStatus(201)
            console.log('post successful', result);
            
        })
        .catch(err => {
            console.log('error adding fdbk', err);
            res.sendStatus(500)
        })


})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});