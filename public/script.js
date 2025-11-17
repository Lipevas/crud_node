//Função que é chamada quando o botão de login é clicado
function fazerLogin() {

    //Obter valores inputs
    var email = document.getElementById ('email').value
    var senha = document.getElementById ('senha').value
    

    //Fazer um requisição GET - READ e busca a pessoa
    fetch('http://localhost:3000/pessoas').then(resposta=> resposta.json()).then(data =>{
        //Busca a pessoa cujo e senha estejam com valores digitados
        //Esse seria um parametro do FIND
        var pessoa = data.find(pessoas => pessoas.email === email && pessoas.senha === senha)
        //Se existir tal pessoa, redirecionar para a página de bem vindo.html
        if(pessoa) {
            window.location.href = "./bemVindo.html"
            //Caso contrário exibir um alerta com erro de usuario ou senha
        }else{
            alert("Usuário/Senha incorretos! Tente Novamente")
        }
    })



















}





