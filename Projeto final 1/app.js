const formulario = document.getElementById("formulario");
const resultado = document.querySelector('#resultado');
//console.log(resultado);
formulario.addEventListener('submit', (evento) => { //arrow function ou função de seta
    evento.preventDefault();//evento padrão
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    //let bolo = document.getElementById('bolo').value;
    //let suco = document.getElementById('suco').value;
    //let pagamento = document.getElementById('pagamento').value;

    console.log(`Nome: ${nome} email: ${email} senha: ${senha} bolo: ${bolo} suco: ${suco} pagamento: ${pagamento}`);
    resultado.innerHTML = ` <p>Nome: ${nome}</p>
                            <p>Email: ${email}</p>
                            <p>Senha: ${senha} </p>
                            <p>Sabor do Bolo: ${bolo} </p>
                            <p>Bebida: ${suco} </p>
                            <p>Forma de Pagamento: ${pagamento} </p>`;


}) //escutador de eventos

const toggleBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
toggleNtn.addEventListener('click', () => { });