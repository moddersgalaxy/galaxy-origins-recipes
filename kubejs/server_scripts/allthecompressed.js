ServerEvents.recipes(event => {
    //nether star block
   event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "###",
      "###",
      "###"
    ],
    "key": {
      "#": {
        "item": 'minecraft:nether_star'
      }
    },
    "result": {
      "item": 'kubejs:nether_star_block',
      "count": 1
    }
  }).id('galaxyorigenes:netherstarblock')



      //piglitch hearth
      event.shaped('kubejs:piglich_heart_block', ['HHH','HHH','HHH'],{
        H: 'minecraft:netherite_helmet'
    }).id('galaxyorigenes:shapedheartblock')
      })