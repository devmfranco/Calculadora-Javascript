
function Sumar() {
    var x = parseInt(document.getElementById("primervalor").value);
    var y = parseInt(document.getElementById("segundovalor").value);
    document.getElementById("result").innerHTML = (x+y);

    if (x == 0 && y == 0) {
        document.getElementById("result").innerHTML = "";

        alert("No se puede sumar 0 + 0");
    }
     
    
    }
    


function Restar() {
    var x = parseInt(document.getElementById("primervalor").value);
    var y = parseInt(document.getElementById("segundovalor").value);
    document.getElementById("result").innerHTML = (x-y);

   if (x == 0 && y == 0) {
        document.getElementById("result").innerHTML = "";

        alert("No se puede restar 0 - 0");
    }

}


function Multiplicar() {
    var x = parseInt(document.getElementById("primervalor").value);
    var y = parseInt(document.getElementById("segundovalor").value);
    document.getElementById("result").innerHTML = (x*y);

    if (x == 0 && y == 0) {
        document.getElementById("result").innerHTML = "";

        alert("No se puede multiplicar 0 * 0");
    }

   

}

function Dividir() {
    var x = parseInt(document.getElementById("primervalor").value);
    var y = parseInt(document.getElementById("segundovalor").value);
    document.getElementById("result").innerHTML = (x/y);

    if (x == 0 && y == 0) {
        document.getElementById("result").innerHTML = "";

        alert("No se puede dividir 0 / 0");
    }

   
   
}

function Limpiar() {
    document.getElementById("primervalor").value = "";
    document.getElementById("segundovalor").value = "";
    document.getElementById("result").innerHTML = "";

    alert("Se han limpiado los campos");
}


