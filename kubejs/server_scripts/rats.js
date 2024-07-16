
ServerEvents.recipes(event => {


  event.remove({output:['rats:rat_upgrade_tick_accelerator', 'rats:rat_upgrade_time_manipulator',]})


  //tick accelerator
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "C": {
        "item": 'mekanism_extras:alloy_spectrum'
      },
      "L": {
        "item": 'allthecompressed:lapis_block_1x'
      },
      "T": {
        "item": "rats:tangled_rat_tails"
      },
      "U": {
        "item": "rats:rat_upgrade_basic"
      }
    },
    "pattern": [
      "LTL",
      "CUC",
      "LCL"
    ],
    "result": {
      "item": "rats:rat_upgrade_tick_accelerator"
    },
    "show_notification": true
  }).id('galaxtorigenes:tickaccelerator')

 


  //time manipulator
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "A": {
        "item": "rats:rat_upgrade_tick_accelerator"
      },
      "C": {
        "item": "rats:charged_creeper_chunk"
      },
      "S": {
        "item": "minecraft:nether_star"
      },
      "T": {
        "item": 'mekanism_extras:alloy_spectrum'
      }
    },
    "pattern": [
      "TCT",
      "ASA",
      "TCT"
    ],
    "result": {
      "item": "rats:rat_upgrade_time_manipulator"
    },
    "show_notification": true
  }).id('galaxtorigenes:timeaccelerator')


})

