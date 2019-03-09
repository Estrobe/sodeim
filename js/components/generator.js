Vue.component('generator', {
    props: {
        generator: Generator
    },
    data: function() {
        return {

        }
    },
    methods: {
        format(amount) {
            return format(amount)
        }
    },
    template: 
    `<div>
        <h4> {{ generator.name }} </h4>
        <span id="gen-amount" class="generator-amount">{{ format(generator.amount) }}</span>
        <span id="gen-mult" class="generator-multiplier">x{{ format(generator.mult) }}</span>
        <span id="gen-cost" class="generator-cost">Cost: {{ format(generator.cost) }}</span>
        <button id="buy-button"@click="generator.buy()">Buy 1</button>
    </div>`
})
