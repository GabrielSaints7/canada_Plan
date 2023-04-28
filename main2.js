function receitas() {
    let valorHora = Number(document.getElementById('valorHora').value);
    let totalHoras = 40
    let totalSemanas = 4;

    let receitas = valorHora * totalHoras * totalSemanas;

    let aluguel = Number(document.getElementById('aluguel').value);
    let alimentacao = Number(document.getElementById('alimentacao').value);
    let transporte = Number(document.getElementById('transporte').value);
    let pequenasDespesas = Number(document.getElementById('pequenasDespesas').value);
    let outrasDespesas = Number(document.getElementById('outrasDespesas').value);
    
    let despesas = aluguel + alimentacao + transporte + pequenasDespesas + outrasDespesas;

    let saldoTotal = receitas - despesas;

    document.getElementById('receitasTotal').innerHTML = `$${receitas}`
    document.getElementById('despesasTotal').innerHTML = `$${despesas}`
    document.getElementById('saldoTotal').innerHTML = `$${saldoTotal}`
}