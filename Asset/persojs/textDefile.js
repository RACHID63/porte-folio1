


var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('<strong>Capturer vos moments</strong>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong>avec passion</strong>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong>professionnalisme</strong>')
.pauseFor(2500)
.deleteAll()
.typeString('<strong>PHOTOGRAPHE</strong>')
.pauseFor(2500)
.deleteAll()
.typeString('<strong>CHARLES Cantin</strong>')
.pauseFor(2500)
    .start();