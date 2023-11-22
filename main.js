const aplausos = document .querySelector("#som_tecla_aplausos");
function tocasom(som){
        alert (som) ;
}
tocasom("clap, clap, clap ");
let comando = "tocar"
if (comando=="tocar"){
    alert("áudio pronto para tocar");
}else{
    alert("áudio não está pronto para tocar");
}
const buttons = document.querySelectorAll ("button");
let contador = 0;
while (contador < buttons . length){
    buttons[contador].textContent = contador;
    contador = contador + 1 ;
}