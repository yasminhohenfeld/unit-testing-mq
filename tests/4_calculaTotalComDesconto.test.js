const calculaTotalComDesconto = require('../src/4_calculaTotalComDesconto');

test('teste de calcular desconto', () => {

    const burritos = [
        { proteina: 'bovina',    valor: 10 },
        { proteina: 'frango',    valor: 20 },
        { proteina: 'calabreza', valor: 30 },
    ];


    const valorFinalDeDescontoEsperado = 54

    const valorFinalDeDescontoCalculado = calculaTotalComDesconto(burritos)

    expect(valorFinalDeDescontoCalculado).toBe(valorFinalDeDescontoEsperado);
    
});


test('teste de calcular desconto', () => {

    const burritos = [
        { proteina: 'bovina',    valor: 10 }
    ];

    const valorFinalDeDescontoEsperado = 9

    const valorFinalDeDescontoCalculado = calculaTotalComDesconto(burritos)

    expect(valorFinalDeDescontoCalculado).toBe(valorFinalDeDescontoEsperado);
});

test('teste de calcular desconto', () => {

    const burritos = [];
    
    const valorFinalDeDescontoEsperado = 0

    const valorFinalDeDescontoCalculado = calculaTotalComDesconto(burritos)

    expect(valorFinalDeDescontoCalculado).toBe(valorFinalDeDescontoEsperado);
    
})