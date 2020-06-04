//este objeto funciona casi igual al io de server.js
var socket = io();
//escuchar
socket.on('connect', function() {
        console.log('conectado al servido');
    })
    // se desconecta el server
socket.on('disconnect', function() {
        console.log('perdimos coneccion con el servidor');
    })
    //los emits son para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'damian',
    mensaje: 'hola C:'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

//escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('servidor:', mensaje);

})