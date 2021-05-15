require('dotenv').config();

const app = require('express')();

app.get('/', (req, res) => {
    res.json({status: 'ok', message: 'server running'});
});

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => console.log(`Server running on http://${process.env.APP_HOST}:${process.env.APP_PORT}`));

