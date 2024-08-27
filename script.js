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