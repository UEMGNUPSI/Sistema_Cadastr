const express = require("express");
const app = express();

const db = require("./db");

app.get("/", (req, res) => {
    res.json({ message: '' });
});

app.get("/users/:id", (req, res) => {
   const userId = req.params.id;

   db.user.findOne({
    where: {
        id: userId
    }
   }).then((user) => {
       if (user) {
            const retorno = user.toJSON();

            user.getRoles().then(roles => {
                for (var i = 0; i < roles.length; i++) {
                    roles[i] = roles[i].name;
                }

                retorno['roles'] = roles;

                res.json(retorno);
            });
       }
   });
});



app.listen(8080, () => {
    console.log('Rodando');
});
