module.exports.index = function(app,req,res){

    const connection = app.config.dbConnection();
    const noticiaModel = new app.app.models.NoticiasDAO(connection);

    noticiaModel.get5UltimasNoticias(function(error,result){
        console.log(result);
        res.render("home/index",{noticias : result});
    });

    
}