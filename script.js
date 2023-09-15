let display = document.getElementById("result"); /* obtendo a secção onde aparecerão os números  */
let valor = "";

function calculando(v) {
  valor = valor + v;
  display.innerText = valor;
} 

function cancel() {
  display.innerText = display.innerText.substring(0,display.innerText.length - 1);
  /* obtendo o valor interno do display (onde os números aparecem), o qual recebe
  ele mesmo, porém, contando todo o seu tamanho e subtraindo da direita à esquerda.  
*/
  valor = "";  /* esta instrução faz com que, após deletar um valor (número),
  o valor anterior não concatene com o novo! */
}

function equal() {
  try {
    let resultado = eval(valor);
    display.innerText = resultado;
    valor = resultado.toString(); 
  } catch (error) {
    display.innerText = "error";
  }
}   