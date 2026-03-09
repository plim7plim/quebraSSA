function calcular(){

let pesoNota = Number(document.getElementById("pesoNota").value);
let pesoFinal = Number(document.getElementById("pesoFinal").value);

let tolerancia = pesoNota * 0.0025;

let quebra = pesoNota - pesoFinal;
let percentual = (quebra / pesoNota) * 100;

let resultado = document.getElementById("resultado");

if (pesoFinal > pesoNota + tolerancia || pesoFinal < pesoNota - tolerancia){

resultado.innerText =
`Houve uma quebra de ${quebra.toFixed(2)} kg.
Poderia dar uma diferença de no máximo ${tolerancia.toFixed(2)} kg.
A diferença foi ${quebra.toFixed(2)} kg.
Isso representa ${percentual.toFixed(3)}% da carga.`;

}else{

resultado.innerText = "Peso dentro da tolerância.";

}

}