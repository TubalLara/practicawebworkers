var trabajador;

var urlprovi = [];

foten.src = urlprovi;


function iniciar() {
    
    
    if (typeof (Worker) !== "undefined") {
        trabajador = new Worker("js/worker.js");

    }


    trabajador.onmessage = function (evt) {
        urlprovi = evt.data;
        
        
    };

    trabajador.onerror = function (err) {
        alert(err.data);

    };

}

(function () {
    iniciar();

})();