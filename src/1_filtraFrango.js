

const filtraFrango = (burritos) => {
    return burritos.filter(burrito => burrito.proteina === 'frango')
}


module.exports = {
    filtraFrango,
};
