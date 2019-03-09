// This, good sir, is the player variable in case you can't tell you imbecile.

var player = {

    money: 10,
    soda: 0,
    endorsementsCurrency: 0,
    sodaCompanies: [],
    vendingMachines: [],
    endorsements: [],
    lastUpdate: Date.now()


}
// This, my good sir, is the first soda company. The name references to Lachlan Mitchell saying that he (quote on quote) "sells cobblestone"
var firstSodaCompany = {
    tier: 0,
    cost: 10,
    mult: 1,
    amount: 0,
    bought: 0,
    name: "Lachlan's Liquid Cobblestone"
}

var firstvendingMachine = {
    tier: 0,
    cost: 30,
    mult: 1,
    amount: 0,
    bought: 0,
    name: "Cardboard Box"
}

var firstendorsement = {
    tier: 0,
    cost: 10000,
    mult: 1,
    amount: 0,
    bought: 0,
    name: "Geometry Dash Youtuber"
}


player.sodaCompanies.push(new Generator(firstSodaCompany))
player.vendingMachines.push(new Generator(firstvendingMachine))
player.endorsements.push(new Generator(firstendorsement))