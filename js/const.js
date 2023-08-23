const body = document.querySelector('body');
const container = document.querySelector('#container');
//const btn = document.querySelector('#change');
function darkMode() {
    const horaAtual = new Date().getHours();
    return horaAtual < 5  || horaAtual > 18;
}

function updateModo() {
    if (darkMode()) {
        body.classList.add('dark-mode');
        container.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        container.classList.remove('dark-mode');
    }
}

// Chamar a função inicialmente para definir o modo com base na hora atual
updateModo();
/*btn.addEventListener('click', function(){
    body.classList.toggle('dark-mode')
    container.classList.toggle('dark-mode')
})*/

function calcular(){
    const nome = document.querySelector('#nome').value
    const salario = document.querySelector('#salario').value
    const resultado = document.querySelector('#resultado')
    var calculo

    if(salario <= 3500){
        calculo = salario - (salario*(8/100))
    }else{
        calculo = salario - (salario*(18/100))
    }

    var calculoFinal = calculo - (calculo * (5/100))

    resultado.innerHTML = `${nome}, seu salário liquido é de: R$ ${calculoFinal.toFixed(2)}`

}