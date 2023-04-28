function receitas() {
    let valorHora = Number(document.getElementById('valorHora').value);
    let totalHoras = Number(document.getElementById('totalHoras').value);
    let totalSemanas = Number(document.getElementById('totalSemanas').value);

    let receitas = 0;

    if (valorHora || totalHoras || totalSemanas === '' || null || 0 || undefined) {
        if (valorHora === ('' || null || 0 || undefined)) {
            valorHora = 1;
        }
        else if (totalHoras === ('' || null || 0 || undefined)) {
            totalHoras = 1;
        }
        else {
            totalSemanas = 1;
        }
    }
    receitas = valorHora * totalHoras * totalSemanas;

    return receitas;
}

function despesas() {
    let aluguel = document.getElementById('aluguel').value;
    let alimentacao = document.getElementById('alimentacao').value;
    let transporte = document.getElementById('transporte').value;
    let pequenasDespesas = document.getElementById('pequenasDespesas').value;
    let outrasDespesas = document.getElementById('outrasDespesas').value;

    aluguel = parseInt('aluguel');
    alimentacao = parseInt('alimentacao');
    transporte = parseInt('transporte');
    pequenasDespesas = parseInt('pequenasDespesas');
    outrasDespesas = parseInt('outrasDespesas');

    if (outrasDespesas === ('' || null || 0 || undefined)) {
        outrasDespesas = 1;
    }

    let despesas = aluguel + alimentacao + transporte + pequenasDespesas;

    return despesas;
}


function saldoTotal() {
    let receitas = receitas()
    let despesas = despesas()

    let saldoTotal = despesas - receitas;

    receitas = document.getElementById('receitasTotal')
        receitas.innerHTML = `${receitas}`
    despesas = document.getElementById('despesasTotal')
        despesas.innerHTML = `${despesas}`
    saldoTotal = document.getElementById('saldoTotal')
        saldoTotal.innerHTML = `${saldoTotal}`
}