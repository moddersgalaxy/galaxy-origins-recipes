ServerEvents.recipes(event => {
    [2,3,4,5].forEach(num =>  event.remove({id:`cobblefordays:tier_${num}`}));
    event.shaped('cobblefordays:tier_2',['OOO','WIL','OOO'], {
        O: '#forge:cobblestone',
        W: 'minecraft:water_bucket',
        L: 'minecraft:lava_bucket',
        I: 'cobblefordays:tier_1'
    })
    event.shaped('cobblefordays:tier_3',['OOO','WIL','OOO'], {
        O: 'minecraft:iron_ingot',
        W: 'minecraft:water_bucket',
        L: 'minecraft:lava_bucket',
        I: 'cobblefordays:tier_2'
    })
    event.shaped('cobblefordays:tier_4',['OOO','WIL','OOO'], {
        O: 'minecraft:gold_ingot',
        W: 'minecraft:water_bucket',
        L: 'minecraft:lava_bucket',
        I: 'cobblefordays:tier_3'
    })
    event.shaped('cobblefordays:tier_5',['OOO','WIL','OOO'], {
        O: 'minecraft:diamond',
        W: 'minecraft:water_bucket',
        L: 'minecraft:lava_bucket',
        I: 'cobblefordays:tier_4'
    })
})