const { filtraFrango } = require('../src/1_filtraFrango');


test('teste de filtraFrango', () => {
    // parâmetro de teste p/ a função
    const burritos = [
        { proteina: 'bovina',    valor: 10 },
        { proteina: 'frango',    valor: 20 },
        { proteina: 'calabreza', valor: 30 },
      ]

    // valor de retorno esperado do teste
    const burritosFiltradosEsperado = [
        { proteina: 'frango',    valor: 20 },
    ]

    // teste da função
    const burritosFiltrados = filtraFrango(burritos)

    // verifica se o retorno da função testada foi correta
    expect(burritosFiltrados).toEqual(burritosFiltradosEsperado);
});


test('teste quando não tiver frango', () => {

    // parâmetro de teste p/ a função
    const burritos = [
        { proteina: 'bovina',    valor: 10 },
        { proteina: 'calabreza', valor: 30 },
    ]

    // valor de retorno esperado do teste
    const burritosFiltradosEsperado = []

    // teste da função
    const burritosFiltrados = filtraFrango(burritos)

     // verifica se o retorno da função testada foi correta
    expect(burritosFiltrados).toEqual(burritosFiltradosEsperado);


})

test('teste quando a lista tiver vazia', () => {

    // parâmetro de teste p/ a função
    const burritos = []

    // valor de retorno esperado do teste
    const burritosFiltradosEsperado = []

    // teste da função
    const burritosFiltrados = filtraFrango(burritos)

     // verifica se o retorno da função testada foi correta
    expect(burritosFiltrados).toEqual(burritosFiltradosEsperado);


})