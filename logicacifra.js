
codificar.addEventListener("click", function(){
  document.getElementById("botao").innerText = "Codificar"
  document.getElementById("botao").setAttribute("onclick", "cifrarTexto()")
})

decodificar.addEventListener("click", function(){
  document.getElementById("botao").innerText = "Decodificar"
  document.getElementById("botao").setAttribute("onclick", "decifrarTexto()")
})


let esconderCodigo = document.querySelector('#esconderIncremento')

metodo.addEventListener('change', function (#esconderIncremento){
  let codigoEscondido = tipoDeCodigo.target.value

    if (metodo == 'base64') {
      esconderIncremento.style.display ='none'
      botao.setAttribute('onclick', cifrarTexto() )
    }
})


function cifrarTexto() {
  document.getElementById("resultado").value = algoritmoCifrar(
    document.getElementById("escrever").value,
    Number(document.getElementById("ocultarIncremento").value)
  );
}

function decifrarTexto() {
  let chaveReversa = Number(document.getElementById("ocultarIncremento").value)*-1 + 26
  document.getElementById("resultado").value = algoritmoCifrar(
    document.getElementById("escrever").value,
    chaveReversa
  );
}

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


