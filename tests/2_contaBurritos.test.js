const contaBurritos = require('../src/2_contaBurritos');

test('teste quantidade de burritos', () => {
    //parâmetro de teste p/ função
    const burritos = [
        { proteina: 'bovina',    valor: 10 },
        { proteina: 'frango',    valor: 20 },
        { proteina: 'calabreza', valor: 30 },
    ]

    // valor de retorno esperado do teste
    const burritosContadosEsperado = 3;

    //valor de burritos contados
    const burritosContados = contaBurritos(burritos)

    //resultado esperado
    expect(burritosContados).toEqual(burritosContadosEsperado);
})

test('Se não tiver nenhum burrito', () => {
     //parâmetro de teste p/ função
    const burritos = []

    // valor de retorno esperado do teste
    const burritosContadosEsperado = 0;

    //valor de burritos contados
    const burritosContados = contaBurritos(burritos)

    //resultado esperado
    expect(burritosContados).toEqual(burritosContadosEsperado);
})