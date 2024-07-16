ServerEvents.recipes(event => {
	event.remove({output: ['#botanypots:all_botany_pots', 'extendedcrafting:black_iron_ingot']})



  //botanypot
  event.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'botanypots:terracotta_botany_pot',"count": 2},"input":{"item":'avaritia:addon_singularity'},"energy":2400}).id('galaxyorigenes:potnormal')



  //hopper botany pot
  event.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'botanypots:terracotta_hopper_botany_pot',"count": 2},"input":{"item":'thermal:machine_insolator'},"energy":2400}).id('galaxyorigenes:potnrmalhoppered')
 

  //elite botany pot
  event.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'botanypotstiers:elite_terracotta_botany_pot',"count": 2},"input":{"item":'extendedcrafting:frame'},"energy":2400}).id('galaxyorigenes:potelite')



  //elite hopper botani pot
  event.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'botanypotstiers:elite_terracotta_hopper_botany_pot',"count": 2},"input":{"item":'botanypotstiers:elite_terracotta_botany_pot'},"energy":2400}).id('galaxyorigenes:potelitehoppered')


  //ultra botany pot
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "tier": 4,
    "pattern": [
      "AAAAAAA",
      "ABCCCBA",
      "ACDEDCA",
      "ACEFECA",
      "ACDEDCA",
      "ABCCCBA",
      "AAAAAAA"
    ],
    "key": {
      "A": {
        "item": "botania:stripped_dreamwood"
      },
      "B": {
        "item": "ae2:quartz_block"
      },
      "C": {
        "item": "minecraft:iron_ingot"
      },
      "D": {
        "item": 'megacells:sky_steel_ingot'
      },
      "E": {
        "item": "extendedcrafting:ultimate_catalyst"
      },
      "F": {
        "item": "botanypotstiers:elite_terracotta_botany_pot"
      }
    },
    "result": {
      "item": 'botanypotstiers:ultra_terracotta_botany_pot',
      "count": 2
    }
  }).id('galaxyorigenes:ultrabotanypot')



  //ultra hopper botany pot
event.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "AAAAAAA",
    "ABCCCBA",
    "ACDEDCA",
    "ACEFECA",
    "ACDEDCA",
    "ABCCCBA",
    "AAAAAAA"
  ],
  "key": {
    "A": {
      "item": "botania:stripped_dreamwood"
    },
    "B": {
      "item": "ae2:quartz_block"
    },
    "C": {
      "item": "minecraft:iron_ingot"
    },
    "D": {
      "item": 'thermalendergy:stellarium_ingot'
    },
    "E": {
      "item": "extendedcrafting:ultimate_catalyst"
    },
    "F": {
      "item": "botanypotstiers:ultra_terracotta_botany_pot"
    }
  },
  "result": {
    "item": 'botanypotstiers:ultra_terracotta_hopper_botany_pot',
    "count": 2
  }
}).id('galaxyorigenes:ultrahopperbotanypot')



  //creative botany pot
  event.custom({
    "type": "extendedcrafting:combination",
    "powerCost": 100000,
    "input": {
      "item": "botanypotstiers:ultra_terracotta_botany_pot"
    },
    "ingredients": [
      {
        "item": "extendedcrafting:crystaltine_ingot"
      },
      {
        "item": "extendedcrafting:crystaltine_ingot"
      },
      {
        "item": 'nuclearcraft:plate_advanced'
      },
      {
        "item": 'nuclearcraft:plate_advanced'
      },
      {
        "item": "extendedcrafting:crystaltine_ingot"
      },
      {
        "item": "extendedcrafting:crystaltine_ingot"
      },
      {
        "item": 'nuclearcraft:plate_advanced'
      },
      {
        "item": 'nuclearcraft:plate_advanced'
      }
    ],
    "result": {
      "item": 'botanypotstiers:creative_terracotta_botany_pot',
      "count": 1
    }
  }).id('galaxyorigenes:creativebotanypot')


  //creative hopper botany pot
  event.custom({
    "type": "extendedcrafting:combination",
    "powerCost": 100000,
    "input": {
      "item": "botanypotstiers:creative_terracotta_botany_pot"
    },
    "ingredients": [
      {
        "item": "thermal:signalum_ingot"
      },
      {
        "item": 'powah:energy_hopper_nitro'
      },
      {
        "item": 'powah:energy_hopper_nitro'
      },
      {
        "item": 'powah:energy_hopper_nitro'
      },
      {
        "item": "thermal:signalum_ingot"
      },
      {
        "item": "thermal:signalum_ingot"
      },
      {
        "item": 'powah:energy_hopper_nitro'
      },
      {
        "item": 'powah:energy_hopper_nitro'
      }
    ],
    "result": {
      "item": 'botanypotstiers:creative_terracotta_hopper_botany_pot',
      "count": 1
    }
  }).id('galaxyorigenes:creativehopperbotanypot')


  //caca
  event.recipes.botanypots.crop(
    'galaxy_origins:cacota', // seed item
    ["sand","dirt"], // categories that this crop can be planted on
    { block: 'galaxy_core:sexy_xd' }, // display block
    [
        Item.of ('galaxy_core:super_caca') // item
            .withChance(89) // weight of this entry compared to the others
            .withRolls(1, 2) // the times this loot will be chosen (min, max)
        // for example, when chosen this will give 1 to 2 candles
    ],
    10, // growthTicks
    1,).id('galaxyorigenes:caca') // optional, growthModifier - this can be set to 1 in most cases


    //certus
    event.recipes.botanypots.crop(
      'ae2:certus_quartz_crystal', // seed item
      ["certus"], // categories that this crop can be planted on
      { block: 'ae2:flawless_budding_quartz' }, // display block
      [
          Item.of ('ae2:certus_quartz_crystal') // item
              .withChance(70) // weight of this entry compared to the others
              .withRolls(1, 2) // the times this loot will be chosen (min, max)
          // for example, when chosen this will give 1 to 2 candles
      ],
      10, // growthTicks
      1, // optional, growthModifier - this can be set to 1 in most cases
    )

  //custom soil ae2
  event.recipes.botanypots.soil(
    'ae2:quartz_block', // the item that this soil is attached to
    { block: 'ae2:flawless_budding_quartz' }, // display block
    ["certus"], // categories that this soil provides
    100, // growth ticks that this soil will provide, set to -1 for no modifier
    1) // optional, growth modifier, example: 0.5 means all crops will take half the time





})