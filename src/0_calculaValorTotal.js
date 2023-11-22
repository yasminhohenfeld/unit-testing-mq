const calculaValorTotal = (burritos) => {
    if (burritos.length === 0) {
        return 0
    }
    return burritos
        .map(burrito => burrito.valor)
        .reduce((acumulador, current) => acumulador + current)
}


module.exports = calculaValorTotal

