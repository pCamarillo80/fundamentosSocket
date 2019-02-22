var socket = io();

//escucha
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
//escucha
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});
//enviar información
socket.emit('enviarMensaje', {
    usuario: 'Pilar',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server', resp);
});

socket.on('enviarMensaje', function(resp) {
    console.log('servidor', resp);
});