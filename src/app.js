// PEGANDO ELEMENTOS DO HTML

const nascimento = document.getElementById("nascimento");
const idade = document.getElementById("idade");

const foto = document.getElementById("foto");
const preview = document.getElementById("preview");

const formulario = document.getElementById("cadastro");

const resultado = document.getElementById("resultado");
const perfilAdmin = document.getElementById("perfilAdmin");




// ==========================
// CALCULAR IDADE
// ==========================

nascimento.addEventListener("change", () => {

    let dataNascimento = new Date(nascimento.value);
    let hoje = new Date();


    let anos = hoje.getFullYear() - dataNascimento.getFullYear();

    let mes = hoje.getMonth() - dataNascimento.getMonth();


    if (
        mes < 0 ||
        (mes === 0 && hoje.getDate() < dataNascimento.getDate())
    ) {

        anos--;

    }


    idade.value = anos;


});




// ==========================
// FOTO DO USUÁRIO
// ==========================


foto.addEventListener("change", () => {


    let arquivo = foto.files[0];


    if (arquivo) {


        let leitor = new FileReader();


        leitor.onload = function(evento) {


            preview.src = evento.target.result;


        }


        leitor.readAsDataURL(arquivo);


    }


});





// ==========================
// ENVIO DO CADASTRO
// ==========================


formulario.addEventListener("submit", (evento) => {


    evento.preventDefault();



    // VALIDAR IDADE

    if (idade.value < 15) {


        alert(
            "Você precisa ter 15 anos ou mais para participar da Sibaúma Gamer."
        );


        return;


    }





    // CRIANDO OBJETO DO CANDIDATO


    let candidato = {


        nome:
        document.getElementById("nome").value,


        idade:
        idade.value,


        nick:
        document.getElementById("nick").value,


        email:
        document.getElementById("email").value,


        interesses:
        document.getElementById("interesses").value,


        ficha:
        document.getElementById("ficha").value,


        status:
        "Em análise"


    };





    // SALVAR NO NAVEGADOR


    localStorage.setItem(
        "candidato",
        JSON.stringify(candidato)
    );






    // STATUS DO CANDIDATO


    resultado.innerHTML = `

        🟡 <strong>Status:</strong> ${candidato.status}

        <br><br>

        Sua candidatura foi enviada.

        Aguarde a avaliação da equipe.

    `;







    // PAINEL DO ADMINISTRADOR


    perfilAdmin.innerHTML = `


        <h3>
        Ficha do candidato
        </h3>


        <br>


        <strong>Nome:</strong>
        ${candidato.nome}


        <br><br>


        <strong>Idade:</strong>
        ${candidato.idade} anos


        <br><br>


        <strong>Nick:</strong>
        ${candidato.nick}


        <br><br>


        <strong>Email:</strong>
        ${candidato.email}


        <br><br>


        <strong>Interesses:</strong>
        ${candidato.interesses}


        <br><br>


        <strong>Ficha técnica:</strong>
        ${candidato.ficha}


        <br><br>


        <strong>Status:</strong>
        🟡 Em análise


    `;




    alert(
        "Cadastro realizado com sucesso!"
    );

//mimi

});
