
## Testes de unidade

Para realizar os exercícios desse módulo serão providenciadas funções prontas já implementadas. Essas seriam funções que supostamente você já teria implementado e que agora pretende criar testes de unidade para elas. Para contexto, essas funções fariam parte de um sistema de um suposto delivery de burritos. 

### Formato dos dados de burrito

Para referência esse seria um exemplo do formato de dados de burritos

```
const burritos = [
    {
        'valor': 3000,
        'proteina': 'frango',
        'molho': 'cheddar',
    },
    {
        'valor': 2800,
        'proteina': 'bovino',
        'molho': 'sour_cream',
    },
    {
        'valor': 3200,
        'proteina': 'calabreza',
        'molho': 'cheddar',
    },
]
```

## Primeiro exemplo de teste de unidade

Imagine q você tenha implementado o código dentro do arquivo [0_calculaValorTotal.js](./src/0_calculaValorTotal.js) dentro da pasta `/src`. Nele a função implementada `calculaValorTotal` calcula a soma dos valores de uma lista de burritos.

Para realizar um teste de unidade criamos o arquivo [0_calculaValorTotal.test.js](tests/0_calculaValorTotal.test.js) na pasta `/tests`. Nele a função que implementamos anteriormente `calculaValorTotal` foi importada e foi realizado um teste de unidade.

Agora para executar o teste baste executar o sequinte comando:
```
npm test -- tests/0_calculaValorTotal.test.js
```
Exercício: Olhe o arquivo de teste e verifique como a função foi importada e chamada dentro do teste.
