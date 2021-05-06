const app = require('express')();
const port = 3000;
// GET /add?a=1&b=2 => 3
app.get('/add', (req, res, next) => {
    const {a,b} = req.query;
    res.send(200, parseInt(a,10)+parseInt(b,10))
});
app.listen(port);