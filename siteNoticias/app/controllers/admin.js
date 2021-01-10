module.exports.formulario_inclusao_noticia = function(app,req,res){
    res.render("admin/form_add_noticia",{validacao:{}})
}

module.exports.salvar_noticias = function(app,req,res){
    var noticais = req.body;//pega os arquivos do corpo html

        req.assert("titulo","Titulo é obrigatorio").notEmpty();
        req.assert("resumo","Resumo é obrigatorio").notEmpty();
        req.assert("resumo","Resumo deve ter entre 10 e 100 caracter").len(10,100);
        req.assert("nome_autor","Nome do autor é obrigatorio").notEmpty();
        req.assert("data_fato","Data deve ser obrigatoria").notEmpty().isDate({format: 'YYYY-MM-DD'});
        req.assert("noticia","Notia é obrigatorio").notEmpty();

        var erros = req.validationErrors();

        if(erros){
            res.render("admin/form_add_noticia",{validacao  : erros});
            return;
        }

        var Connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(Connection);
        noticiasModel.salvarNoticia(noticais,function(error, result){
            res.redirect("/noticias")
        });
}