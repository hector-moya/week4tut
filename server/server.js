const express = require('express');
const app = express();
const apiRoutes = require('./api/auth');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/auth', apiRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
