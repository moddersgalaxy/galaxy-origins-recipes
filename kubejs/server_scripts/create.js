//create By Srnadien
ServerEvents.recipes(event => {

    //eliminadas
    event.remove({output:'create:mechanical_crafter'})


    //mechanical crafter
    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "powerRequired": 10000,
        "powerRate": 12500,
        "pattern": [
          "ABA",
          "ACA",
          "ADA"
        ],
        "key": {
          "A": {
            "item": 'advancednetherite:netherite_emerald_ingot'
          },
          "B": {
            "item": "create:electron_tube"
          },
          "C": {
            "item": "create:brass_casing"
          },
          "D": {
            "item": "thermal:tinker_bench"
          }
        },
        "result": {
          "item": 'create:mechanical_crafter',
          "count": 8
        },
      }).id('galaxyorigenes:mechanicalcrafter')


   








})

// Add missing ore crushing recipes for Create
let missingCreateOres = [
    'aluminum',
    'lead',
    'nickel',
    'osmium',
    'platinum',
    'silver',
    'tin',
    'uranium',
]
ServerEvents.recipes(event => {
    missingCreateOres.forEach(ore => {
        event.smelting('alltheores:' + ore + '_ingot', 'create:crushed_raw_' + ore + '').xp(0.1).id('galaxyorigenes:smelting/' + ore + '_ingot_from_crushed')
        event.blasting('alltheores:' + ore + '_ingot', 'create:crushed_raw_' + ore + '').xp(0.1).id('galaxyorigenes:blasting/' + ore + '_ingot_from_crushed')
        event.custom({
            type: 'create:splashing',
            ingredients: [
                {
                    'item': 'create:crushed_raw_' + ore
                }
            ],
            results: [
                {
                    'count': 9,
                    'item': 'alltheores:' + ore + '_nugget'
                }
            ]
        }).id('galaxyorigenes:splashing/crushed_raw_' + ore)
    })



   




})
