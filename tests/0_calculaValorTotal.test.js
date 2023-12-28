const calculaValorTotal = require('../src/0_calculaValorTotal');


test('teste de carrinho cheio', () => {
    // parâmetro de teste p/ a função
    const burritos = [
        { valor: 20 }, 
        { valor: 30 },
        { valor: 40 },
    ]

    // valor de retorno esperado do teste
    const valorTotalEsperado = 90

    // teste da função
    const valorTotal = calculaValorTotal(burritos)
    
    // verifica se o retorno da função testada foi correta
    expect(valorTotal).toBe(valorTotalEsperado);
});


test('teste de carrinho vazio', () => {
    // parâmetro de teste p/ a função
    const burritos = []

    // valor de retorno esperado do teste
    const valorTotalEsperado = 0

    // teste da função
    const valorTotal = calculaValorTotal(burritos)
    
    // verifica se o retorno da função testada foi correta
    expect(valorTotal).toBe(valorTotalEsperado);
});

test('carrinho com um burrito', () => {
    //parametro de teste p/a função
    const burritos = [
        { valor: 20 }
    ]

    // valor de retorno esperado do teste
    const valorTotalEsperado = 20

    // teste da função
    const valorTotal = calculaValorTotal(burritos)

    // verifica se o retorno da função testada foi correta
    expect(valorTotal).toBe(valorTotalEsperado);

})
