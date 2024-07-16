
ServerEvents.recipes(event => {


  event.remove({output:['excompressum:auto_compressor', 'excompressum:auto_compressed_hammer', 'excompressum:auto_hammer', 'excompressum:auto_heavy_sieve', 'excompressum:auto_sieve', 'excompressum:rationing_auto_compressor']})


  //auto compressor
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "B": {
        "item": 'advancednetherite:netherite_iron_block'
      },
      "C": {
        "item": 'ad_astra:cheese'
      },
      "I": {
        "item": 'thermalendergy:stellarium_ingot'
      }
    },
    "pattern": [
      "CIC",
      "IBI",
      "CIC"
    ],
    "result": {
      "item": "excompressum:auto_compressor"
    },
    "show_notification": true
  }).id('galaxtorigenes:autocompressor')



  //auto compressor rotating
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "C": {
        "item": "excompressum:auto_compressor"
      },
      "G": {
        "item": 'thermalendergy:stellarium_ingot'
      }
    },
    "pattern": [
      " G ",
      "GCG",
      " G "
    ],
    "result": {
      "item": "excompressum:rationing_auto_compressor"
    },
    "show_notification": true
  }).id('galaxtorigenes:autocompressorrotating')


  //auto compressed hammer
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "B": {
        "item": 'rats:rat_upgrade_block'
      },
      "H": {
        "item": "excompressum:compressed_diamond_hammer"
      },
      "I": {
        "item": 'ad_astra:desh_ingot'
      },
      "P": {
        "item": "minecraft:heavy_weighted_pressure_plate"
      }
    },
    "pattern": [
      "BPB",
      "IHI",
      "BPB"
    ],
    "result": {
      "item": "excompressum:auto_compressed_hammer"
    },
    "show_notification": true
  }).id('galaxtorigenes:autocompressedhammer')


  //auto hammer
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "H": {
        "tag": "excompressum:diamond_hammers"
      },
      "I": {
        "item": 'ad_astra:cheese_block'
      },
      "P": {
        "item": "minecraft:heavy_weighted_pressure_plate"
      }
    },
    "pattern": [
      "IPI",
      "IHI",
      "IPI"
    ],
    "result": {
      "item": "excompressum:auto_hammer"
    },
    "show_notification": true
  }).id('galaxtorigenes:autohammer')


  //auto heavy sieve
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "B": {
        "item": 'rats:rat_upgrade_block'
      },
      "G": {
        "item": "minecraft:glass_pane"
      },
      "I": {
        "item": 'ad_astra:desh_ingot'
      },
      "S": {
        "tag": "excompressum:heavy_sieves"
      }
    },
    "pattern": [
      "BGB",
      "GSG",
      "IGI"
    ],
    "result": {
      "item": "excompressum:auto_heavy_sieve"
    },
    "show_notification": true
  }).id('galaxtorigenes:autoheavysieve')

 


  //heavy sieve
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "B": {
        "item": 'ad_astra:cheese_block'
      },
      "G": {
        "item": "minecraft:glass_pane"
      },
      "I": {
        "item": "minecraft:iron_ingot"
      },
      "S": {
        "tag": "excompressum:sieves"
      }
    },
    "pattern": [
      "BGB",
      "GSG",
      "IGI"
    ],
    "result": {
      "item": "excompressum:auto_sieve"
    },
    "show_notification": true
  }).id('galaxtorigenes:autosieve')



  //compressed cobblestone to gravel x9
  event.custom({"type":"immersiveengineering:crusher","energy":54000,"input":{"item":'excompressum:compressed_cobblestone'},"result":{"base_ingredient":{"item":'minecraft:gravel'},"count":9},"secondaries":[]}).id('galaxtorigenes:togravel')


  //compressed gravel to sand x9
  event.custom({"type":"immersiveengineering:crusher","energy":54000,"input":{"item":'excompressum:compressed_gravel'},"result":{"base_ingredient":{"item":'minecraft:san'},"count":9},"secondaries":[]}).id('galaxtorigenes:tosand')


  //compressed sand to dust x9
  event.custom({"type":"immersiveengineering:crusher","energy":54000,"input":{"item":'excompressum:compressed_sand'},"result":{"base_ingredient":{"item":'exnihilosequentia:dust'},"count":9},"secondaries":[]}).id('galaxtorigenes:todust')


})

