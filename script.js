var valor = document.getElementById("valor");
valor.addEventListener('keyup', convertir);
txtResultado = document.getElementById("resultado");

unidad1 = document.getElementById("unidad1");
unidad1.addEventListener('change', convertir);
unidad2 = document.getElementById("unidad2");
unidad2.addEventListener('change', convertir);

var resultado;

function convertir(){
    if(valor.value==''){
        return;
    }

    numero = valor.value;
    numero = parseFloat(numero);

    if(unidad1.value=="Quilometro" && unidad2.value=="Quilometro"){
        resultado = numero * 1;
        txtResultado.innerHTML = numero + " Quilômetro/s equivale a " + resultado + " Quilômetro/s";
    }
    if(unidad1.value=="Quilometro" && unidad2.value=="Metro"){
        resultado = numero * 1000;
        txtResultado.innerHTML = numero + " Quilômetro/s equivale a " + resultado + " Metro/s";
    }
    if(unidad1.value=="Quilometro" && unidad2.value=="Centimetro"){
        resultado = numero * 100000;
        txtResultado.innerHTML = numero + " Quilômetro/s equivale a " + resultado + " Centimetro/s";
    }

    if(unidad1.value=="Metro" && unidad2.value=="Quilometro"){
        resultado = numero / 1000;
        txtResultado.innerHTML = numero + " Metro/s equivale a " + resultado + " Quilômetro/s";
    }
    if(unidad1.value=="Metro" && unidad2.value=="Metro"){
        resultado = numero * 1;
        txtResultado.innerHTML = numero + " Metro/s equivale a " + resultado + " Metro/s";
    }
    if(unidad1.value=="Metro" && unidad2.value=="Centimetro"){
        resultado = numero * 100;
        txtResultado.innerHTML = numero + " Metro/s equivale a " + resultado + " Centimetro/s";
    }

    if(unidad1.value=="Centimetro" && unidad2.value=="Quilometro"){
        resultado = numero / 100000;
        txtResultado.innerHTML = numero + " Centimetro/s equivale a " + resultado + " Quilômetro/s";
    }
    if(unidad1.value=="Centimetro" && unidad2.value=="Metro"){
        resultado = numero / 100;
        txtResultado.innerHTML = numero + " Centimetro/s equivale a " + resultado + " Metro/s";
    }
    if(unidad1.value=="Centimetro" && unidad2.value=="Centimetro"){
        resultado = numero * 1;
        txtResultado.innerHTML = numero + " Centimetro/s equivale a " + resultado + " Centimetro/s";
    }
}