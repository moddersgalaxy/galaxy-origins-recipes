ServerEvents.recipes(event => {
	event.remove({output: ['nuclearcraft:tough_alloy_ingot', 'nuclearcraft:chassis']})





//tough alloy
event.custom({
    "type": "nuclearcraft:alloy_smelter",
    "input": [
      {
        "tag": 'forge:ingots/ferroboron'
      },
      {
        "tag": 'forge:ingots/steel'
      }
    ],
    "output": [
      {
        "count": 2,
        "item": 'nuclearcraft:tough_alloy_ingot'
      }
    ],
    "powerModifier": 1.0,
    "radiation": 0.0,
    "timeModifier": 1.5
  }).id('galaxyorigenes:toughalloy')





  //chassis
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "L": {
        "item": 'alltheores:diamond_plate'
      },
      "S": {
        "tag": "forge:ingots/steel"
      },
      "T": {
        "tag": "forge:ingots/tough_alloy"
      }
    },
    "pattern": [
      "LSL",
      "STS",
      "LSL"
    ],
    "result": {
      "item": "nuclearcraft:chassis"
    },
    "show_notification": true
  })


})