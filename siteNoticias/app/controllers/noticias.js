module.exports.noticias = function(app,req,res){
    var Connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(Connection);
        noticiasModel.getNoticias(function(error, result){
            res.render("noticias/noticias",{note : result});

        })
}

module.exports.noticia = function(app,req,res){
    var Connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(Connection);
        noticiasModel.getNoticia(function(error, result){
            res.render("noticias/noticia",{note : result});
        })
}