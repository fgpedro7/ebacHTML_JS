function validarFormulario() {
    var campoA = document.getElementById('campoA').value;
    var campoB = document.getElementById('campoB').value;

    if (campoB > campoA) {
        document.getElementById('mensagem-validacao').innerHTML = 'Formulário válido!';
        document.getElementById('mensagem-validacao').style.color = 'green';
    } else {
        document.getElementById('mensagem-validacao').innerHTML = 'Formulário inválido! Certifique-se de que o valor no campo B seja maior do que no campo A.';
        document.getElementById('mensagem-validacao').style.color = 'red';
    }
}