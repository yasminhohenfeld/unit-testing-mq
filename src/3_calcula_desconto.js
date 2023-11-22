const calculaValorTotal = require('./0_calculaValorTotal');

const calculaDesconto = (burritos) => {
    return calculaValorTotal(burritos) * 0.1
}


module.exports = calculaDesconto
