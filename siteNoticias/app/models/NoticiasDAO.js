function NoticiasDAO(Connection){
    this._Connection = Connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._Connection.query('select * from noticias',callback);
}

NoticiasDAO.prototype.getNoticia = function(callback){
    this._Connection.query('select * from noticias where id_noticias=2',callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia,callback){
    this._Connection.query("insert into noticias set ?",noticia,callback)
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
    this._Connection.query('select * from noticias order by id_noticias desc limit 5',callback);
}

module.exports = function(){
    return NoticiasDAO;
}