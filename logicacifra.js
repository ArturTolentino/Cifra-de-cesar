
codificar.addEventListener("click", function(){
  document.getElementById("botao").innerText = "Codificar"
  document.getElementById("botao").setAttribute("onclick", "cifrarTexto()")
})

decodificar.addEventListener("click", function(){
  document.getElementById("botao").innerText = "Decodificar"
  document.getElementById("botao").setAttribute("onclick", "decifrarTexto()")
})

let ocultarIncremento = document.getElementById("ocultarIncremento")

let select = document.getElementById("selecione")
  select.addEventListener("change", ()=>{
    let option = select.value;
      if(option == "ccesar") {
        ocultarIncremento.style.display="block"
      } else {
        ocultarIncremento.style.display="none"
      }
  })

  let escrever = document.getElementById("escrever")
  let resultado = document.getElementById("resultado")
  

  function cifrarTexto(){
    resultado.value = select.value == "ccesar" ?algoritmoCifrar(escrever.value ,Number(ocultarIncremento.value)):btoa(escrever.value)
  }

  function decifrarTexto(){
    if(select.value == "ccesar"){
     let chaveReversa = Number(ocultarIncremento.value)*-1 + 26
     resultado.value = algoritmoCifrar(escrever.value, chaveReversa)
     return 
    }
    resultado.value = atob(escrever.value)
  }

// function cifrarTexto() {
//   document.getElementById("resultado").value = algoritmoCifrar(
//     document.getElementById("escrever").value,
//     Number(ocultarIncremento.value)
//   );
// }

// function decifrarTexto() {
//   let chaveReversa = Number(document.getElementById("ocultarIncremento").value)*-1 + 26
//   document.getElementById("resultado").value = algoritmoCifrar(
//     document.getElementById("escrever").value,
//     chaveReversa
//   );
// }


function algoritmoCifrar(mensagem, desloc) {
  let textoManipulado = [];
  let textoAcumulado = "";
  for (let i in mensagem) {
    textoManipulado[i] = mensagem.charCodeAt(i);
    if(textoManipulado)
    if (
      (textoManipulado[i] >= 65 && textoManipulado[i] <= 90 + desloc) ||
      (textoManipulado[i] >= 97 && textoManipulado[i] <= 122 + desloc)
    ) {
      textoManipulado[i] += desloc;
      
        if (
          (textoManipulado[i] > 90 && textoManipulado[i] <= 90 + desloc) ||
          textoManipulado[i] > 122
        ) {
          textoManipulado[i] -= 26;
        }
      }
    
    textoAcumulado = textoAcumulado.concat(
      String.fromCharCode(textoManipulado[i])
    );
  }
  return textoAcumulado;
}

