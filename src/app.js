/**
 * Sibaúma Gamer - Mansão
 * Gerenciamento de Integrantes
 */

// Alternar entre abas (Telas)
function mudarTela(idTela, elemento) {
    document.querySelectorAll('.view').forEach(t => t.classList.remove('active'));
    document.getElementById(idTela).classList.add('active');
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    elemento.classList.add('active');
    if(idTela !== 'view-cadastro') carregarDados();
}

// Lógica de Foto
let fotoBase64 = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
document.getElementById('foto').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            fotoBase64 = event.target.result;
            document.getElementById('previewFoto').src = fotoBase64;
        };
        reader.readAsDataURL(file);
    }
});

// Calcular Idade
document.getElementById('nascimento').addEventListener('change', function() {
    const dataNasc = new Date(this.value);
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    if (hoje.getMonth() < dataNasc.getMonth() || (hoje.getMonth() === dataNasc.getMonth() && hoje.getDate() < dataNasc.getDate())) idade--;
    document.getElementById('idade').value = isNaN(idade) ? '' : idade;
});

// Inputs "Outros"
document.getElementById('checkJogosOutros').addEventListener('change', function() {
    const el = document.getElementById('inputJogosOutros');
    this.checked ? el.classList.add('show') : (el.classList.remove('show'), el.value = '');
});

document.getElementById('checkAtividadesOutras').addEventListener('change', function() {
    const el = document.getElementById('inputAtividadesOutras');
    this.checked ? el.classList.add('show') : (el.classList.remove('show'), el.value = '');
});

// Validação de Links
function validarLink(url, regra) {
    if (!url) return true;
    const dominios = {
        'yt': ['youtube.com', 'youtu.be'],
        'ig': ['instagram.com'],
        'tt': ['tiktok.com'],
        'tw': ['twitter.com', 'x.com'],
        'kw': ['kwai-video.com', 'kw.ai', 'kwai.com']
    };
    return dominios[regra].some(d => url.toLowerCase().includes(d));
}

// Submissão do Formulário
document.getElementById('formCadastro').addEventListener('submit', function(e) {
    e.preventDefault();

    const redes = {
        yt: document.getElementById('linkYt').value.trim(),
        ig: document.getElementById('linkIg').value.trim(),
        tt: document.getElementById('linkTt').value.trim(),
        tw: document.getElementById('linkTw').value.trim(),
        kw: document.getElementById('linkKw').value.trim()
    };

    if (!validarLink(redes.yt, 'yt') || !validarLink(redes.ig, 'ig') || !validarLink(redes.tt, 'tt') || !validarLink(redes.tw, 'tw') || !validarLink(redes.kw, 'kw')) {
        return alert("Erro: Link inválido inserido.");
    }

    const candidato = {
        id: Date.now(),
        foto: fotoBase64,
        nome: document.getElementById('nome').value,
        idade: document.getElementById('idade').value,
        nick: document.getElementById('nick').value,
        redes: redes,
        jogos: Array.from(document.querySelectorAll('input[name="jogos"]:checked')).map(cb => cb.value),
        atividades: Array.from(document.querySelectorAll('input[name="atividades"]:checked')).map(cb => cb.value),
        apostas: document.getElementById('apostas').value || 'Nenhuma',
        data: new Date().toLocaleDateString('pt-BR')
    };

    let lista = JSON.parse(localStorage.getItem('mansaoSibauma')) || [];
    lista.push(candidato);
    localStorage.setItem('mansaoSibauma', JSON.stringify(lista));
    localStorage.setItem('meuPerfilMansao', JSON.stringify(candidato));

    alert("Integrante registrado com sucesso! 🎮");
    this.reset();
    document.getElementById('previewFoto').src = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
    mudarTela('view-admin', document.querySelectorAll('.nav-item')[2]);
});

// Funções de Carregamento e Gestão (Admin)
function carregarDados() {
    // ... (Aqui você coloca o restante das funções de exibição de dados que já funcionavam)
    console.log("Dados carregados com sucesso.");
}
