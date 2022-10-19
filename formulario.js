function main() {
    
    document.getElementById('usuario').oninput = function () {
        const usuario = document.getElementById('usuario').value;
        const senha = document.getElementById('senha').value;
        if(usuario.localeCompare('') == '0' || senha.localeCompare('') == 0) {
            document.getElementById('entrar').disabled = true;
        } else {
            document.getElementById('entrar').disabled = false;
        }
    }

    document.getElementById('senha').oninput = function () {
        const usuario = document.getElementById('usuario').value;
        const senha = document.getElementById('senha').value;
        if(usuario.localeCompare('') == '0' || senha.localeCompare('') == 0) {
            document.getElementById('entrar').disabled = true;
        } else {
            document.getElementById('entrar').disabled = false;
        }
    }

    document.getElementById('cancelar').onclick = function () {
        document.getElementById('usuario').value = '';
        document.getElementById('senha').value = '';
        document.getElementById('entrar').disabled = true;
    }

}