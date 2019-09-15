module.exports = function (op, router, sequelize) {
    router.get('/', function (req, res) {
        res.send('Users Index Page');
    });

    router.get('/listar', function (req, res) {
        try {
            let models = require('../models')(sequelize);
            models.User.findAll({
                include: [
                    {
                        model: models.Perfil,
                    }
                ],
                order: [
                    ['id', 'ASC']
                ]
            }).then(function (result) {
                res.status(200).send(result);
            }).catch(function (error) {
                console.log(error);
            });
        } catch (e) {
            console.log(e);
            res.status(200).send({erro: 'Não foi possível acessar os dados. Por favor, acesse o portal através do link exclusivo gerado para o seu usuário.'});
        }
    });

    router.get('/ver/:id', function (req, res) {
        try {
            let user_id = req.params['id'];
            if (!user_id) {
                res.status(500).send('id vazio!');
            }
            let models = require('../models')(sequelize);
            models.User.findAll({
                include: [
                    {
                        model: models.Perfil,
                    }
                ],
                where: {
                    id: user_id
                }
            }).then(function (result) {
                res.status(200).send(result[0]);
            }).catch(function (error) {
                console.log(error);
            });
        } catch (e) {
            console.log(e);
            res.status(200).send({erro: 'Não foi possível acessar os dados. Por favor, acesse o portal através do link exclusivo gerado para o seu usuário.'});
        }
    });

    return router;
};