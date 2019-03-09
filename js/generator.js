class Generator {

    constructor(props) {
        this.name = props.name
        this.cost = props.cost
        this.mult = props.mult
        this.amount = props.amount
        this.bought = props.bought
        this.tier = props.tier
        
    }

    get canBuy() {
      return this.cost <= player.money
    }

    buy() {
        if (!this.canBuy) return
            player.money -= this.cost
            this.cost *= 1 + (this.tier+1)*0.25
            this.amount += 1
            this.bought += 1
            if (this.bought%100 == 0) this.mult *= 5
            else if(this.bought%25 == 0) this.mult *=3 
    }

    get productionPerSecond() {
        let ret = this.amount * this.mult
        if (this.tier !== 0) ret /= 5
        return ret
    }
}

function getColumn(type) {
    switch (type) {
        case "sodaCompanies":
        return 1;
        
        case "vendingMachines":
        return 2;

        case "endorsements":
        return 3;
    }
}

const sodaCompanies_names = ["Lachlan's Liquid Cobblestone"]
const vendingMachines_names = ["Cardboard Box"]
const endorsements_names = ["Geometry Dash Youtuber"]


function generateGeneratorName(tier, type) {
    switch (type) {
        case "sodaCompanies":
        return sodaCompanies_names[tier%sodaCompanies_names.length];
        
        case "vendingMachines":
        return vendingMachines_names[tier%vendingMachines_names.length];

        case "endorsements":
        return endorsements_names[tier%endorsements_names.length];
    }
}

function createGenerator(tier, type) {
    let col = getColumn(type)

    const g = {
        name: generateGeneratorName(tier, type),
        cost: Math.pow(10, tier * (col + 1)),
        mult: 1,
        amount: 0,
        bought: 0,
        tier: tier
    }

    return new Generator(g)
}