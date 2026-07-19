function configurarCampo(checkboxId, inputId) {
    document.getElementById(checkboxId).addEventListener('change', function() {
        document.getElementById(inputId).style.display = this.checked ? 'block' : 'none';
    });
}

configurarCampo('checkOutros', 'inputOutros');
configurarCampo('checkPix', 'inputPix');
