var frutas=['maca','abacaxi','pera','banana','laranja'];
var numeros=[100,200,288,114,455,2,5,66];
var linguagens = [];
linguagens[0]= 'Java';
linguagens[1]= 'C++';
linguagens[2]= 'Python';
linguagens[3]= 'Ruby';
linguagens[4]= 'JavaScript';


document.addEventListener('DOMContentLoaded', function() {
    
    linguagens.forEach(function(item,index){
        const container = document.getElementById('container');
        container.innerHTML += (index) + ' - ' +item+ '<br>';
    });

    frutas.forEach(function(item,index){
        const container = document.getElementById('containerFrutas');
        container.innerHTML += (index) + ' - ' +item+ '<br>';
    });
})
function inserir() {
    var indice = prompt('Insira um número que deseja consultar na lista');
    alert(linguagens[indice]);
}
var lista_generica={};
lista_generica['frutas']=['maca','abacaxi','pera','banana','laranja'];
lista_generica[numeros]=[100,200,288,114,455,2,5,66];
lista_generica[linguagens] = [];
    lista_generica['linguagens'][0]= 'Java';
    lista_generica['linguagens'][1]= 'C++';
    lista_generica['linguagens'][2]= 'Python';
    lista_generica['linguagens'][3]= 'Ruby';
    lista_generica['linguagens'][4]= 'JavaScript';