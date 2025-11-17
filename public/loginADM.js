function fazerLogin() {

    // pegar valores reais dos inputs do HTML
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    // dados do admin
    const emailAdm = "admin";
    const senhaAdm = "cebolaloka";

    // validação
    if (email === emailAdm && senha === senhaAdm) {
        window.location.href = "./usuarios.html"; 
    } else {
        alert("Email ou senha incorretos! Tente novamente.");
    }
}
