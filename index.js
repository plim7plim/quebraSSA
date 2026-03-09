function calcular(){

let pesoNota = Number(document.getElementById("pesoNota").value);
let pesoFinal = Number(document.getElementById("pesoFinal").value);

let tolerancia = pesoNota * 0.0025;

let quebra = pesoNota - pesoFinal;
let percentual = (quebra / pesoNota) * 100;

let excesso = Math.abs(quebra) - tolerancia;

let resultado = document.getElementById("resultado");

if (pesoFinal > pesoNota + tolerancia || pesoFinal < pesoNota - tolerancia){
resultado.innerText =
`Houve uma quebra de ${quebra.toFixed(2)} kg.
Poderia dar uma diferença de no máximo ${tolerancia.toFixed(2)} kg.
A diferença acima do permitido foi ${excesso.toFixed(2)} kg.
Isso representa ${percentual.toFixed(2)}% da carga.`;

}else{
resultado.innerText = "Peso dentro da tolerância.";
}

} 

function reiniciar(){
document.getElementById("formulario").reset();
document.getElementById("resultado").innerText = "";
}
