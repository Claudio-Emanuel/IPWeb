function myfunction(x) {
    var sqrt = Math.sqrt(x); 
    alert('A raiz quadrada de ' + x + ' é: ' + sqrt);
    var cado = sqrt > 10;
    alert("A resposta é: " + cado);
}

function mytxt(text) {
    document.getElementById("MinhaDiv").innerHTML = text;
}

function mostrarPrompt() {
    // Exibe o prompt e armazena o valor inserido pelo usuário
    var num = prompt("Por favor, insira um número:");

    // Verifica se o usuário inseriu um valor e se é um número
    if (num !== null && num !== "" && !isNaN(num)) {
        num = parseInt(num); // Converte o valor para inteiro
        var output = '';

        // Gera a sequência de num até 10
        for (var i = 1; i <= num; i++) {
            output += i + '<br>';
        }

        // Exibe o resultado na div
        document.getElementById("cont").innerHTML = output;
    } else {
        document.getElementById("cont").innerHTML = "Você não inseriu um número válido.";
    }
}

function janela(){
    var texto = prompt("Por favor, insira um texto:");
    document.getElementById("textmodal").innerHTML = texto;
    var janelaModal= new bootstrap.Modal(document.getElementById('janela'));
    janelaModal.show();
}