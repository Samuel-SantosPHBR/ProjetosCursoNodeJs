// importar configurações do servidor
const app = require('./config/server')

//parametrização da porta que escuta

const server = app.listen(3000,() => {
    console.log("Servidor Online");
})

const io = require('socket.io').listen(server);

app.set('io',io);

/* criar a conexao por websocket */

io.on('connection', (socket) =>{
    console.log('usuario conectou');

    socket.on('disconnect',()=>{
        console.log('usuario desconectou')
    })

    /* Eventos dialogos */
    socket.on('msgParaServidor',(data)=>{
        socket.emit(
            'msgParaCliente',
            {apelido:data.apelido,mensagem:data.mensagem}
        );
        socket.broadcast.emit(
            'msgParaCliente',
            {apelido:data.apelido,mensagem:data.mensagem}
        );
    })

    /* Participantes para Cliente */
    if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
        socket.on('msgParaServidor',(data)=>{
            socket.emit(
                'participantesParaClientes',
                {apelido:data.apelido}
            );
            socket.broadcast.emit(
                'participantesParaClientes',
                {apelido:data.apelido}
            );
        })
    }
})