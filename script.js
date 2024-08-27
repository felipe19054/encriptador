/*function encriptar() {
    var texto = document.getElementById("inputtexto").value.toLowerCase();
    //i es para que afecte a tanto mayus como minus
    //g afecta a toda la linea
    //m afecta a multiples lineas
    var txtcifrado = texto.replace(/e/igm,"enter");
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto2").innerHTML = txtcifrado;
    document.getElementById("inputtexto").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
  }
  
  function desencriptar() {
    var texto = document.getElementById("inputtexto").value.toLowerCase();
    var txtcifrado = texto.replace(/enter/igm,"e");
    var txtcifrado = txtcifrado.replace(/ober/igm,"o");
    var txtcifrado = txtcifrado.replace(/imes/igm,"i");
    var txtcifrado = txtcifrado.replace(/ai/igm,"a");
    var txtcifrado = txtcifrado.replace(/ufat/igm,"u");
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto2").innerHTML = txtcifrado;
    document.getElementById("inputtexto").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
  }
  
  function copia() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand('copy');
    alert("Copied!");
  }
  */

/*function encriptar() {
    var texto = document.getElementById("inputtexto").value.toLowerCase();
    // Reemplazar letras específicas
    var txtcifrado = texto
        .replace(/e/igm, "enter")
        .replace(/o/igm, "ober")
        .replace(/i/igm, "imes")
        .replace(/a/igm, "ai")
        .replace(/u/igm, "ufat");

    // Ocultar elementos y mostrar el texto cifrado
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("copiar").style.display = "block"; // Cambié "show" a "block"
    document.getElementById("texto2").innerHTML = txtcifrado;
    document.getElementById("inputtexto").value = ""; // Usé "value" en lugar de "innerHTML"
}

function desencriptar() {
    var textoCifrado = document.getElementById("texto2").innerText.toLowerCase();
    // Reemplazar las cadenas cifradas por sus equivalentes originales
    var txtOriginal = textoCifrado
        .replace(/enter/igm, "e")
        .replace(/ober/igm, "o")
        .replace(/imes/igm, "i")
        .replace(/ai/igm, "a")
        .replace(/ufat/igm, "u");

    // Mostrar el texto descifrado
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("copiar").style.display = "block"; // Cambié "show" a "block"
    document.getElementById("texto2").innerHTML = txtOriginal;
    document.getElementById("inputtexto").value = ""; // Usé "value" en lugar de "innerHTML"
}

function copia() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    navigator.clipboard.writeText(contenido.innerText)
        .then(() => {
            alert("¡Copiado al portapapeles!");
        })
        .catch((error) => {
            console.error("Error al copiar al portapapeles:", error);
        });
}
*/
function encriptar() {
    var texto = document.getElementById("inputtexto").value.toLowerCase();
    // Reemplazar letras específicas
    var txtcifrado = texto
        .replace(/e/g, "enter")
        .replace(/o/g, "ober")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/u/g, "ufat");

    // Mostrar el texto cifrado
    document.getElementById("texto2").value = txtcifrado;
}

function desencriptar() {
    var textoCifrado = document.getElementById("texto2").value.toLowerCase();
    // Reemplazar las cadenas cifradas por sus equivalentes originales
    var txtOriginal = textoCifrado
        .replace(/enter/g, "e")
        .replace(/ober/g, "o")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ufat/g, "u");

    // Mostrar el texto descifrado
    document.getElementById("texto2").value = txtOriginal;
}

function copia() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    navigator.clipboard.writeText(contenido.value)
        .then(() => {
            alert("¡Copiado al portapapeles!");
        })
        .catch((error) => {
            console.error("Error al copiar al portapapeles:", error);
        });
}