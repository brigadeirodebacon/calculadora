function soma(){
var n1 = parseFloat(document.getElementById("n1").value);
var n2 = parseFloat(document.getElementById("n2").value);
var resultado;
resultado = n1+n2;
document.getElementById("resultado").value = resultado;
}

function subtrair(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var resultado;
    resultado = n1-n2;
    document.getElementById("resultado").value = resultado;
    }

    function vezes(){
        var n1 = parseFloat(document.getElementById("n1").value);
        var n2 = parseFloat(document.getElementById("n2").value);
        var resultado;
        resultado = n1*n2;
        document.getElementById("resultado").value = resultado;
        }

        function dividir(){
            var n1 = parseFloat(document.getElementById("n1").value);
            var n2 = parseFloat(document.getElementById("n2").value);
            var resultado;
            resultado = n1/n2;
            document.getElementById("resultado").value = resultado;
            }