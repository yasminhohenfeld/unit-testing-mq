const calculaDesconto = require('../src/3_calcula_desconto');

test('teste de calcular desconto', () => {

    const burritos = [
        { proteina: 'bovina',    valor: 10 },
        { proteina: 'frango',    valor: 20 },
        { proteina: 'calabreza', valor: 30 },
    ];


    const valorDeDescontoEsperado = 6 

    const valorDeDescontoCalculado = calculaDesconto(burritos)

    expect(valorDeDescontoCalculado).toBe(valorDeDescontoEsperado);
    
});


test('teste de calcular desconto', () => {

    const burritos = [
        { proteina: 'bovina',    valor: 10 }
    ];

    const valorDeDescontoEsperado = 1

    const valorDeDescontoCalculado = calculaDesconto(burritos)

    expect(valorDeDescontoCalculado).toBe(valorDeDescontoEsperado);
    
});

test('teste de calcular desconto', () => {

    const burritos = [];
    
    const valorDeDescontoEsperado = 0

    const valorDeDescontoCalculado = calculaDesconto(burritos)

    expect(valorDeDescontoCalculado).toBe(valorDeDescontoEsperado);
    
})

    
