function producePrevious(generatorArray, diff) {
    for (let i = 1; i < generatorArray.length; i++) {
        let g = generatorArray[i]
        generatorArray[i - 1].amount += g.productionPerSecond * diff
    }
}



function gameLoop(that) {
    let diff = (Date.now() - that.player.lastUpdate)/1000
    that.player.money += that.player.sodaCompanies[0].productionPerSecond * diff
    that.player.soda += that.player.vendingMachines[0].productionPerSecond * diff
    producePrevious(that.player.sodaCompanies, diff)
    producePrevious(that.player.vendingMachines, diff)
    producePrevious(that.player.endorsements, diff)
    
    that.player.lastUpdate = Date.now()
}