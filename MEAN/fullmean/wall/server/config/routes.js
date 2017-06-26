// Mongoose controllers
var Users = require('./../controllers/users.js');

module.exports = function(app){
    app.post('/api/users', Users.create);
    //app.use(authenticate);
    app.get('/api/users', Users.index);
    app.get('/api/current_user', Users.getCurrent);
    app.all("*", (req,res,next) => {
        res.sendfile(path.resolve("./wallapp/dist/index.html"))
    });
}


// define middleware
// function authenticate(req,res,next){
//     if(req.session.userId){
//         next();
//     }else{
//         res.sendStatus(401);
//     }
// }