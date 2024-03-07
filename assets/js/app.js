let h_nota1 = document.querySelector("#h_nota1");
let h_nota2 = document.querySelector("#h_nota2");
let h_nota3 = document.querySelector("#h_nota3");
let c_nota1 = document.querySelector("#c_nota1");
let c_nota2 = document.querySelector("#c_nota2");
let c_nota3 = document.querySelector("#c_nota3");
let j_nota1 = document.querySelector("#j_nota1");
let j_nota2 = document.querySelector("#j_nota2");
let j_nota3 = document.querySelector("#j_nota3");

document.addEventListener('DOMContentLoaded', function() {
    notasHtml();
    notasCss();
    notasJs();
});

function notasHtml (){
    let nota1 = prompt("Ingrese nota 1 [HTML]");
    let nota2 = prompt("Ingrese nota 2 [HTML]");
    let nota3 = prompt("Ingrese nota 3 [HTML]");
    mostrarTabla(nota1, nota2, nota3, "h");

}
function notasCss (){
    let nota1 = prompt("Ingrese nota 1 [CSS]");
    let nota2 = prompt("Ingrese nota 2 [CSS]");
    let nota3 = prompt("Ingrese nota 3 [CSS]");
    mostrarTabla(nota1, nota2, nota3, "c");
}
function notasJs (){
    let nota1 = prompt("Ingrese nota 1 [Javascript]");
    let nota2 = prompt("Ingrese nota 2 [Javascript]");
    let nota3 = prompt("Ingrese nota 3 [Javascript]");
    mostrarTabla(nota1, nota2, nota3, "j");
}

function mostrarTabla (nota1, nota2, nota3, ramo){
    if(ramo === "h"){
        h_nota1.textContent = nota1;
        h_nota2.textContent = nota2;
        h_nota3.textContent = nota3;
        calcularPromedio(nota1,nota2,nota3,ramo);
    }else if(ramo === "c"){
        c_nota1.textContent = nota1;
        c_nota2.textContent = nota2;
        c_nota3.textContent = nota3;
        calcularPromedio(nota1,nota2,nota3,ramo);
    }else{
        j_nota1.textContent = nota1;
        j_nota2.textContent = nota2;
        j_nota3.textContent = nota3;
        calcularPromedio(nota1,nota2,nota3,ramo);
    }
}

function calcularPromedio (nota1, nota2, nota3, ramo){

    nota1 = parseInt(nota1);
    nota2 = parseInt(nota2);
    nota3 = parseInt(nota3);

    let promedio = (nota1 + nota2 + nota3)/3;
    promedio = promedio.toFixed(1);
    
    if(ramo === "h"){
        let prom_h = document.querySelector("#h_prom");
        prom_h.textContent = promedio;
    }else if(ramo === "c"){
        let prom_c = document.querySelector("#c_prom");
        prom_c.textContent = promedio;
    }else{
        let prom_j = document.querySelector("#j_prom");
        prom_j.textContent = promedio;
    }
}


