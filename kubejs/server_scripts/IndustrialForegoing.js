ServerEvents.recipes(event => {
  
  
  
  
  
  //eliminado
  event.remove({output: 'industrialforegoing:ether_gas' })
  event.remove({id: 'industrialforegoing:ore_laser_base'})

//machine frame basic
event.replaceInput({id: 'industrialforegoing:machine_frame_pity'}, 'minecraft:redstone_block', 'create:brass_casing')




//apatite ore
event.custom({
"type": "industrialforegoing:laser_drill_ore",
"catalyst": {
  "item": "industrialforegoing:laser_lens3"
},
"output": {
  "item": "thermal:apatite_ore"
},
"pointer": 0,
"rarity": [
  {
    "blacklist": {
      "type": "minecraft:worldgen/biome",
      "values": [
        "minecraft:the_end",
        "minecraft:the_void",
        "minecraft:small_end_islands",
        "minecraft:end_barrens",
        "minecraft:end_highlands",
        "minecraft:end_midlands"
      ]
    },
    "depth_max": 16,
    "depth_min": 5,
    "weight": 28,
    "whitelist": {}
  },
  {
    "blacklist": {
      "type": "minecraft:worldgen/biome",
      "values": [
        "minecraft:the_end",
        "minecraft:the_void",
        "minecraft:small_end_islands",
        "minecraft:end_barrens",
        "minecraft:end_highlands",
        "minecraft:end_midlands"
      ]
    },
    "depth_max": 255,
    "depth_min": 0,
    "weight": 4,
    "whitelist": {}
  }
]
}).id('galaxyorigenes:srnaptite')




//gas ether
event.custom({
  "type": "create:mixing",
  "heatRequirement": "superheated",
  "ingredients": [
    {
      "amount": 1000,
      "fluid": 'kubejs:wrought_iron',
      "nbt": {}
    },
    {
      "amount": 1000,
      "fluid": "immersiveengineering:phenolic_resin"
    }
  ],
  "results": [
    {
      "amount": 500,
      "fluid": "industrialforegoing:ether_gas"
    }
  ]
}).id('galaxyorigenes:gasether')

//petroleo
event.custom({
  "type": "forge:conditional",
  "recipes": [
    {
      "conditions": [
        {
          "type": "forge:mod_loaded",
          "modid": "pneumaticcraft"
        }
      ],
      "recipe": {
        "type": "industrialforegoing:laser_drill_fluid",
        "catalyst": {
          "item": "industrialforegoing:laser_lens15"
        },
        "entity": "minecraft:empty",
        "output": "{Amount:50,FluidName:\"pneumaticcraft:oil\"}",
        "pointer": 0,
        "rarity": [
          {
            "blacklist": {},
            "depth_max": 60,
            "depth_min": 20,
            "weight": 8,
            "whitelist": {
              "type": "minecraft:worldgen/biome",
              "values": [
                "minecraft:nether_wastes",
                "minecraft:basalt_deltas",
                "minecraft:warped_forest",
                "minecraft:crimson_forest",
                "minecraft:soul_sand_valley",
                "minecraft:badlands",
                "minecraft:forest",
                "minecraft:plains",
                "minecraft:river",
                "minecraft:jungle",
                "minecraft:savanna",
                "minecraft:savanna_plateau",
                "minecraft:swamp",
                "minecraft:taiga",
                "minecraft:windswept_savanna",
                "minecraft:windswept_gravelly_hills",
                "minecraft:bamboo_jungle",
                "minecraft:dark_forest",
                "minecraft:beach",
                "minecraft:jagged_peaks",
                "minecraft:flower_forest",
                "minecraft:cherry_grove",
                "minecraft:grove",
                "minecraft:birch_forest",
                "minecraft:mangrove_swamp",
                "minecraft:meadow",
                "minecraft:mushroom_fields",
                "minecraft:snowy_plains",
                "minecraft:snowy_slopes",
                "minecraft:snowy_taiga",
                "minecraft:the_void",
                "minecraft:the_end",
                "minecraft:the_void",
                "minecraft:small_end_islands",
                "minecraft:end_barrens",
                "minecraft:end_highlands",
                "minecraft:end_midlands"
              ]
            }
          }
        ]
      }
    }
  ]
}).id('galaxyorigenes:petroleo')


//laser ore base
event.shaped('industrialforegoing:ore_laser_base', ['PTP','OFO','GRG'],{
  P: 'industrialforegoing:plastic',
  T: 'allthemodium:allthemodium_pickaxe',
  O: '#forge:ores/iron',
  F: 'industrialforegoing:machine_frame_advanced',
  G: '#forge:gears/vibranium',
  R: 'minecraft:redstone'
}).id('galaxyorigenes:industrialforegoings/ore_laser_drill')

})