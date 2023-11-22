const calculaValorTotal = require('./0_calculaValorTotal')
const calculaDesconto = require('./3_calcula_desconto')

const calculaTotalComDesconto = (burritos) => {
    return calculaValorTotal(burritos) - calculaDesconto(burritos)
}


module.exports = calculaTotalComDesconto

