function calcular(n1,n2){
    n1 = parseFloat(document.getElementById("n1").value) 
    n2 = parseFloat(document.getElementById("n2").value)

    selector = document.getElementById('selector').value
    //Chamando elementos que estão dentro do HTML

    switch(selector){ //O switch vai ficar observando o valor a ser preenchido no seletor
        case '+' :
            calculo = (n1 + n2)
            document.getElementById('resultado').innerHTML  = `O resultado da soma de ${n1} + ${n2} é = ${calculo}` //innerHTML usado para atribuir resultados ao h3 
            break     
            
        case '-' :
            calculo = (n1 - n2)
            document.getElementById('resultado').innerHTML  = `O resultado da subtração de ${n1} - ${n2} é = ${calculo}` //innerHTML usado para atribuir resultados ao h3 
            break   
        
        case '/' :
            calculo = Math.round(n1 / n2)//Arredonda o valor 
            if(Number.isNaN(calculo)){
                document.getElementById("resultado").innerHTML = "Insira um divisível válido!"
            } else {
            document.getElementById("resultado").innerHTML  = `O resultado da divisão de ${n1} / ${n2} é = ${calculo}` //innerHTML usado para atribuir resultados ao h3 
            break
            }

        case '*' : 
            calculo = (n1 * n2)
            document.getElementById('resultado').innerHTML = `O resultado da multiplicação de ${n1} / ${n2} é = ${calculo}`
            break
        
        case '%' : 
            calculo = ((n1 / 100) * n2)
            document.getElementById('resultado').innerHTML = `O resultado de ${n1} % de ${n2} é = ${calculo}`
            break
    }
}
    