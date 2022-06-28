function calcular(valor1, valor2){
valor1 = parseFloat(document.getElementById('valor1').value) //primeiro valor adicionado
valor2 = parseFloat(document.getElementById('valor2').value) //segundo valor adicionado 

let selector = document.getElementById('operadores').value //selector (pegando o valor)

switch(selector){
    case "+" : 
    calculo = (valor1 + valor2)
    document.getElementById('resultado').innerHTML = `O resultado da soma é: ${calculo}`
    console.log(calculo)
    break

    case "-" :
    calculo = (valor1 - valor2)
    console.log(calculo)
    document.getElementById('resultado').innerHTML = `O resultado da subtração é: ${calculo}`
    break

    case "*" :
    calculo = (valor1 * valor2)
    document.getElementById('resultado').innerHTML = `O resultado da multiplicação é ${calculo}`
    break

    case "/" :
    calculo = (valor1 / valor2)
        if (valor2 === 0){
            document.getElementById('resultado').innerHTML = `Digite um valor válido`
        }else{
            document.getElementById('resultado').innerHTML = `O resultado é ${calculo}`
        }
        break

    case 'media' :
    calculo = ((valor1 + valor2) / 2)
    document.getElementById('resultado').innerHTML = `O resultado da média é ${calculo}`
    break

    case 'raiz' :
    calculo= (Math.sqrt(valor1))
    calculo1 = (Math.sqrt(valor2))
    document.getElementById('resultado').innerHTML = `Os resultados das radiciações são ${calculo} e ${calculo1}`
    break

    case 'potencia' :
    calculo= (Math.pow(valor1, valor2))
    document.getElementById('resultado').innerHTML = `O resultado da potenciação é ${calculo}`
    break

    case 'fatorial' :
    fatorial = valor1
    resultado = fatorial
    for(let i = 1; i < fatorial; i++){
        resultado *= i 
    }
    document.getElementById('resultado').innerHTML = `O resultado do fatorial é ${resultado}`
    break

    case 'porcento':
    if(valor1 > valor2){
        calculo= ((valor1 / 100) * valor2)
        document.getElementById('resultado').innerHTML = `O resultado da porcentagem é ${calculo}`}
        else{
        calculo= ((valor2/ 100) * valor1)
        document.getElementById('resultado'),innerHTML = `O resultado da porcentagem é ${calculo}`}
    }

        }
    
    



   
