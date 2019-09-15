let express = require('express');
let app = express();

const cors = require('cors');
const Sequelize = require('sequelize');
//middleware para aceitar requests de outra url
app.use(cors());
const usersController = require('./routes/users')(Sequelize.Op, express.Router(), Sequelize);
app.use('/users', usersController);


app.get('/', function (req, res) {
    res.send('Index page!');
});

app.listen(3001, function () {
    console.log('Example app listening on port 3001!');
});