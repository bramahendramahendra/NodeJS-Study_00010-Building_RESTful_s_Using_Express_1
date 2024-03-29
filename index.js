const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});

// 1 parameter router
app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
});

// 2 parameter router 
app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params);
});

// PORT 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));