const formulario = document.getElementById("formulario");
const resultado = document.querySelector('#resultado');
//console.log(resultado);
formulario.addEventListener('submit', (evento) => { //arrow function ou função de seta
    evento.preventDefault();//evento padrão
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    console.log(`Nome: ${nome} email: ${email} senha: ${senha} `); 
    resultado.innerHTML = ` <p>Nome: ${nome}</p>
                            <p>email: ${email}</p>
                            <p>senha: ${senha} </p>`;
}) //escutador de eventos