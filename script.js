
function addFilme() {   
    var titulo = document.getElementById('titulo').value;
    var diretor = document.getElementById('diretor').value;
    var anoLancamento = document.getElementById('ano').value;
    var lista = document.getElementById('lista');

    class Filme {
        constructor(tit, dir , an) {
            this.tit = tit;
            this.dir = dir;
            this.an = an;
        }

        dadosFilme() {
            return `${this.tit} - ${this.dir} (${this.an})<br><br>`
        }
    }

    if(titulo === "" || diretor === "" || isNaN(anoLancamento)) {
        alert('Não deixe nada vazio');
    } else {
        let novoFilme = new Filme(titulo, diretor, anoLancamento);
        let dadosDoFilme = novoFilme.dadosFilme();
        lista.innerHTML = lista.innerHTML + dadosDoFilme;
    }
}

