
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none";

function validarTexto() {
    let textoEscrito = textArea.value;
    let validador = /^[a-z]*$/i.test(textoEscrito);

    if (!validador) {
        alert("Solo se permiten letras minúsculas y sin acentos");
        location.reload();
        return true;
    }
}

function btnEncriptar() {
    if (!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none";
        textArea.value = "";
        copia.style.display = "block";
    }
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        let regex = new RegExp(matrizCodigo[i][0], "g");
        stringEncriptada = stringEncriptada.replace(regex, matrizCodigo[i][1]);
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        let regex = new RegExp(matrizCodigo[i][1], "g");
        stringDesencriptada = stringDesencriptada.replace(regex, matrizCodigo[i][0]);
    }

    return stringDesencriptada;
}

function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto Copiado");
}
