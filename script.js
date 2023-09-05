let display = document.getElementById("result"); /* obtendo a secção onde aparecerão os números  */
let button = document.querySelectorAll(".btn"); /* obtendo todos os botões pela "class" e
inserindo em uma variável mutável chamada "button" */

for (let btn of button){ 
  btn.addEventListener("click", () => { 
  display.innerText += btn.value;
  }) 
}    

function cancel() {
  display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
  /* obtendo o valor interno do display (onde os números aparecem), o qual recebe
  ele mesmo, porém, contando todo o seu tamanho e subtraindo da direita à esquerda.  */
}    
/*
function sum(){

}*/