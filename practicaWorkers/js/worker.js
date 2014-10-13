var url0 = "http://static.freepik.com/foto-gratis/casa_17-1008174100.jpg";
var url1 = "http://static.freepik.com/foto-gratis/icono-de-la-casa_17-1126210653.jpg";
var i;
var url;

function cambiarFoto() {
    
    for (i = 1; i <= 1; i++) {
        url.id = "url" + [i];
        
    };

    postMessage(url);
    setTimeout("cambiarFoto()", 3000);
    

};