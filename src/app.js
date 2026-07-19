<script>
    // 1. Função para carregar e exibir a logo completa
    document.getElementById('inputLogo').addEventListener('change', function(e) {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = e => document.getElementById('previewLogo').src = e.target.result;
            reader.readAsDataURL(e.target.files[0]);
        }
    });

    // 2. Lógica para mostrar/esconder campos extras
    document.getElementById('checkAtividadesOutras').addEventListener('change', function() {
        document.getElementById('inputAtividadesOutras').classList.toggle('show', this.checked);
    });
    document.getElementById('checkPix').addEventListener('change', function() {
        document.getElementById('inputPix').classList.toggle('show', this.checked);
    });

    // 3. Função do botão REGISTRAR (O que você estava perguntando)
    document.getElementById('formCadastro').addEventListener('submit', function(e) {
        e.preventDefault(); // Impede a página de recarregar
        
        alert("Integrante registrado com sucesso!");
        
        this.reset(); // Limpa o formulário
        
        // Esconde os campos extras novamente
        document.getElementById('inputAtividadesOutras').classList.remove('show');
        document.getElementById('inputPix').classList.remove('show');
    });
</script>
