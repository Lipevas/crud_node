fetch('http://localhost:3000/pessoas')
    .then(resposta => resposta.json())
    .then(dados => {
        //Selecionar a tabela tbody
        var tabelaCorpo = document.getElementById('tabela-corpo')

        //Para cada objeto do JSON, cria uma linha da tabela
        dados.forEach(objeto => {
            var tr = document.createElement('tr')
            var tdId = document.createElement('td')
            var tdNome = document.createElement('td')
            var tdSobrenome = document.createElement('td')
            var tdCPF = document.createElement('td')
            var tdEmail = document.createElement('td')
            var tdSenha = document.createElement('td')
            var tdRua = document.createElement('td')
            var tdCEP = document.createElement('td')
            var tdCidade = document.createElement('td')
            var tdEstado = document.createElement('td')
            var tdTelefone = document.createElement('td')

            //Preenche as celula da linha com as informações
            tdId.innerText = objeto.id
            tdNome.innerText = objeto.nome
            tdSobrenome.innerText = objeto.sobrenome
            tdCPF.innerText = objeto.cpf
            tdEmail.innerText = objeto.email
            tdSenha.innerText = objeto.senha
            tdRua.innerText = objeto.rua
            tdCEP.innerText = objeto.cep
            tdCidade.innerText = objeto.cidade
            tdEstado.innerText = objeto.estado
            tdTelefone.innerText = objeto.telefone


            tr.appendChild(tdId)
            tr.appendChild(tdNome)
            tr.appendChild(tdSobrenome)
            tr.appendChild(tdCPF)
            tr.appendChild(tdEmail)
            tr.appendChild(tdSenha)
            tr.appendChild(tdRua)
            tr.appendChild(tdCEP)
            tr.appendChild(tdCidade)
            tr.appendChild(tdEstado)
            tr.appendChild(tdTelefone)
            tabelaCorpo.appendChild(tr)
        })
    })
    function buscarDados() {
    var cpf = document.getElementById('identificadorCPF').value ////////

    fetch('http://localhost:3000/pessoas', {
        method: 'GET'
    })
    .then(resposta => resposta.json())
    .then(dados => {
        let pessoaEncontrada = dados.find(pessoa => pessoa.cpf == cpf) //////

        if(pessoaEncontrada) {
            document.getElementById('nomeAtualizar').value = pessoaEncontrada.nome
            document.getElementById('sobrenomeAtualizar').value = pessoaEncontrada.sobrenome
            document.getElementById('emailAtualizar').value = pessoaEncontrada.email
            document.getElementById('senhaAtualizar').value = pessoaEncontrada.senha
            document.getElementById('ruaAtualizar').value = pessoaEncontrada.rua
            document.getElementById('cepAtualizar').value = pessoaEncontrada.cep
            document.getElementById('cidadeAtualizar').value = pessoaEncontrada.cidade
            document.getElementById('estadoAtualizar').value = pessoaEncontrada.estado
            document.getElementById('telefoneAtualizar').value = pessoaEncontrada.telefone
            document.getElementById('identificadorCPF').value = pessoaEncontrada.cpf ///////
            document.getElementById('identificador').value = pessoaEncontrada.id ///////
        } else {
            alert("Pessoa não encontrada")
        }
    })
}

function atualizarDados() {
    var id = document.getElementById('identificador').value //////
    var cpf = document.getElementById('identificadorCPF').value //////
    var nome = document.getElementById('nomeAtualizar').value
    var sobrenome = document.getElementById('sobrenomeAtualizar').value
    var email = document.getElementById('emailAtualizar').value
    var senha = document.getElementById('senhaAtualizar').value
    var rua = document.getElementById('ruaAtualizar').value
    var cep = document.getElementById('cepAtualizar').value
    var cidade = document.getElementById('cidadeAtualizar').value
    var estado = document.getElementById('estadoAtualizar').value
    var telefone = document.getElementById('telefoneAtualizar').value


    fetch(`http://localhost:3000/pessoas/${id}`, {
        method: 'PUT', //Metodo POST HTTP
        headers: {
            'Content-Type': 'application/json' //Tipo de conteudo enviado JSON
        },
        body: JSON.stringify({nome: nome, sobrenome: sobrenome, cpf: cpf, email:email, senha:senha, rua:rua, cep:cep, cidade:cidade, estado:estado, telefone:telefone}) //Dados a serem enviados e convertidos ////////
    })
    .then(resposta => resposta.JSON) //Converte a resposta para JSON
}
// function deletarDados() {
//     var id = document.getElementById('identificador').value

//     fetch(`http://localhost:3000/pessoas/${id}`, {
//         method: 'DELETE'
//     })
//     .then(response => response.json())
// }


function deletarDados() {
    var cpf = document.getElementById('identificadorCPF').value

    fetch('http://localhost:3000/pessoas')
        .then(response => response.json())
        .then(data => {
            
            const pessoa = data.find(pessoa => pessoa.cpf === cpf)

            if (pessoa) {
                
                fetch(`http://localhost:3000/pessoas/${pessoa.id}`, {
                    method: 'DELETE'
                })
                .then(() => alert('Pessoa deletada com sucesso!'))
            } else {
                alert('CPF não encontrado.')
            }
        })
}

