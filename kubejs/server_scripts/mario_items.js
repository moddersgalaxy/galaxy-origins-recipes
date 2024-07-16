//star items v2 By SrNadien 
ServerEvents.recipes(event => {




    //Muñeco De Paja
    event.recipes.create.mixing('galaxy_core:muneco_de_paja', ['galaxy_origins:cacota', 'galaxy_core:super_semilla', 'minecraft:sculk_sensor', 'experienceobelisk:cognitive_crystal_block', 'argentinas_delight:matedulceitem', 'ars_nouveau:glyph_wither']).superheated()
  

    //super semilla
    event.recipes.create.mixing('galaxy_core:super_semilla', ['galaxy_core:cajita_feliz', 'galaxy_core:cajita_feliz', 'galaxy_core:super_caca', 'growthcraft_milk:yogurt_apple', 'growthcraft_milk:cheddar_cheese', 'argentinas_delight:matedulceitem', 'galaxy_origins:cacota', 'createaddition:chocolate_cake', 'integrateddynamics:crystalized_chorus_chunk']).superheated()

    //planos
    event.custom({
      "type": "extendedcrafting:combination",
      "powerCost": 100000,
      "input": {
        "item": "allthecompressed:quartz_block_4x"
      },
      "ingredients": [
        {
          "item": "artifacts:running_shoes"
        },
        {
          "item": "artifacts:kitty_slippers"
        },
        {
          "item": "artifacts:aqua_dashers"
        },
        {
          "item": "artifacts:umbrella"
        },
        {
          "item": "artifacts:aqua_dashers"
        },
        {
          "item": "artifacts:snowshoes"
        },
        {
          "item": "artifacts:steadfast_spikes"
        },
        {
          "item": "artifacts:flippers"
        },
        {
          "item": "artifacts:rooted_boots"
        },
        {
          "item": "artifacts:whoopee_cushion"
        },
        {
          "item": "artifacts:plastic_drinking_hat"
        },
        {
          "item": "artifacts:novelty_drinking_hat"
        },
        {
          "item": "artifacts:snorkel"
        },
        {
          "item": "artifacts:night_vision_goggles"
        },
        {
          "item": "artifacts:villager_hat"
        },
        {
          "item": "artifacts:superstitious_hat"
        }
      ],
      "result": {
        "item": 'galaxy_core:planos',
        "count": 1
      }
    }).id('galaxyorigenes:planos')



    //combustible radiactivo
    event.custom({
      "type": "extendedcrafting:combination",
      "powerCost": 100000,
      "input": {
        "item": "allthecompressed:uranium_block_9x"
      },
      "ingredients": [
        {
          "item": "mekanism:module_radiation_shielding_unit"
        },
        {
          "item": "allthecompressed:uranium_block_5x"
        },
        {
          "item": "mekanism:pellet_plutonium"
        },
        {
          "tag": "forge:ores/uranium"
        },
        {
          "item": "mekanism:pellet_polonium"
        },
        {
          "item": "mekanism:pellet_polonium"
        },
        {
          "item": "mekanism:module_radiation_shielding_unit"
        },
        {
          "item": "mekanism:pellet_plutonium"
        },
        {
          "item": "mekanism:pellet_plutonium"
        },
        {
          "item": "mekanism:module_radiation_shielding_unit"
        },
        {
          "item": "mekanism:pellet_polonium"
        },
        {
          "item": "mekanism:pellet_polonium"
        },
        {
          "tag": "forge:ores/uranium"
        },
        {
          "item": "mekanism:pellet_plutonium"
        },
        {
          "item": "allthecompressed:uranium_block_5x"
        },
        {
          "item": "mekanism:module_radiation_shielding_unit"
        }
      ],
      "result": {
        "item": 'galaxy_core:combustible_radiactivo',
        "count": 1
      }
    }).id('galaxyorigenes:combustible')
	

  //alma de dragon
  event.custom({
    "type": "extendedcrafting:combination",
    "powerCost": 100000,
    "input": {
      "item": "minecraft:dragon_egg"
    },
    "ingredients": [
      {
        "item": "thermal_extra:fluid_tank_augment_5"
      },
      {
        "item": "thermal_extra:potion_amplifier_augment_5"
      },
      {
        "item": "thermal_extra:potion_duration_augment_5"
      },
      {
        "item": 'mm_grinding:item_mob_catcher_dragon'
      },
      {
        "item": "mob_grinding_utils:dragon_muffler"
      },
      {
        "item": "thermal_extra:dragonsteel_block"
      },
      {
        "item": "minecraft:dragon_breath"
      },
      {
        "item": "thermal_extra:dragonsteel_block"
      },
      {
        "item": "thermal_extra:dragonsteel_ingot"
      },
      {
        "item": "thermal_extra:dragonsteel_plate"
      },
      {
        "item": 'mm_grinding:item_mob_catcher_dragon'
      },
      {
        "item": "thermal_extra:dragonsteel_bucket"
      },
      {
        "item": 'mm_grinding:item_mob_catcher_dragon'
      },
      {
        "item": "minecraft:dragon_head"
      },
      {
        "item": 'mm_grinding:item_mob_catcher_dragon'
      },
      {
        "item": 'mob_grinding_utils:mob_swab'
      }
    ],
    "result": {
      "item": 'galaxy_core:alma_de_dragon',
      "count": 1
    }
  }).id('galaxyorigenes:alma')


  //antimateria
  event.custom({
    "type": "extendedcrafting:combination",
    "powerCost": 100000,
    "input": {
      "item": 'electrodynamics:motor'
    },
    "ingredients": [
      {
        "item": 'galaxy_core:panchito'
      },
      {
        "item": "create:mechanical_crafter"
      },
      {
        "item": "create:mechanical_crafter"
      },
      {
        "item": 'galaxy_core:panchito'
      },
      {
        "item": "createsifter:advanced_brass_mesh"
      },
      {
        "item": "createsifter:advanced_brass_mesh"
      },
      {
        "item": 'nuclearcraft:empty_frame'
      },
      {
        "item": "create:mechanical_crafter"
      },
      {
        "item": 'galaxy_core:super_semilla'
      },
      {
        "item": 'galaxy_core:panchito'
      },
      {
        "item": 'galaxy_core:panchito'
      },
      {
        "item": 'nuclearcraft:empty_frame'
      },
      {
        "item": "create:mechanical_crafter"
      },
      {
        "item": "ae2:engineering_processor"
      },
      {
        "item": "createsifter:advanced_brass_mesh"
      },
      {
        "item": "createsifter:advanced_brass_mesh"
      }
    ],
    "result": {
      "item": 'galaxy_core:anti_materia',
      "count": 1
    }
  }).id('galaxyorigenes:uumater')




  //mini portal
  event.custom({
    "type": "extendedcrafting:combination",
    "powerCost": 100000,
    "input": {
      "item": "minecraft:end_portal_frame"
    },
    "ingredients": [
      {
        "item": "create:mechanical_saw"
      },
      {
        "item": "ad_astra:desh_block"
      },
      {
        "item": "ad_astra:calorite_plate"
      },
      {
        "item": "ad_astra:desh_block"
      },
      {
        "item": "betterfurnacesreforged:extreme_forge"
      },
      {
        "item": "betterfurnacesreforged:extreme_forge"
      },
      {
        "item": "create:mechanical_saw"
      },
      {
        "item": "ad_astra:calorite_plate"
      },
      {
        "item": "ad_astra:calorite_plate"
      },
      {
        "item": "create:mechanical_saw"
      },
      {
        "item": "betterfurnacesreforged:extreme_forge"
      },
      {
        "item": "betterfurnacesreforged:extreme_forge"
      },
      {
        "item": "ad_astra:desh_block"
      },
      {
        "item": "ad_astra:calorite_plate"
      },
      {
        "item": "ad_astra:desh_block"
      },
      {
        "item": "create:mechanical_saw"
      }
    ],
    "result": {
      "item": 'galaxy_core:mini_portal',
      "count": 1
    }
  }).id('galaxyorigenes:miniportal')


  //mini reactor
  event.custom({
    "type": "extendedcrafting:combination",
    "powerCost": 100000,
    "input": {
      "item": "industrialforegoing:mycelial_netherstar"
    },
    "ingredients": [
      {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:netherstar\"}"
      },
      {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:netherstar\"}"
      },
      {
        "item": "sophisticatedbackpacks:battery_upgrade"
      },
      {
        "item": "extendedcrafting:nether_star_block"
      },
      {
        "item": "sophisticatedbackpacks:battery_upgrade"
      },
      {
        "type": "forge:nbt",
        "item": "hostilenetworks:prediction",
        "count": 1,
        "nbt": "{data_model:{id:\"hostilenetworks:ender_dragon\"}}"
      },
      {
        "type": "forge:nbt",
        "item": "hostilenetworks:prediction",
        "count": 1,
        "nbt": "{data_model:{id:\"hostilenetworks:ender_dragon\"}}"
      },
      {
        "item": "sophisticatedbackpacks:battery_upgrade"
      },
      {
        "item": "extendedcrafting:nether_star_block"
      },
      {
        "item": "sophisticatedbackpacks:battery_upgrade"
      },
      {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:netherstar\"}"
      },
      {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:netherstar\"}"
      },
      {
        "type": "forge:nbt",
        "item": "hostilenetworks:prediction",
        "count": 1,
        "nbt": "{data_model:{id:\"hostilenetworks:ender_dragon\"}}"
      },
      {
        "item": "extendedcrafting:nether_star_block"
      },
      {
        "item": "extendedcrafting:nether_star_block"
      },
      {
        "type": "forge:nbt",
        "item": "hostilenetworks:prediction",
        "count": 1,
        "nbt": "{data_model:{id:\"hostilenetworks:ender_dragon\"}}"
      }
    ],
    "result": {
      "item": 'galaxy_core:mini_reactor',
      "count": 1
    }
  }).id('galaxyorigenes:minireactor')



  //black hole
  event.custom({
    "type": "extendedcrafting:combination",
    "powerCost": 100000,
    "input": {
      "item": "mekanism:pigment_mixer"
    },
    "ingredients": [
      {
        "item": 'ars_nouveau:magebloom'
      },
      {
        "item": 'functionalstorage:iron_downgrade'
      },
      {
        "item": 'functionalstorage:iron_downgrade'
      },
      {
        "item": 'chisel:chisel'
      },
      {
        "item": 'industrialforegoing:laser_lens13'
      },
      {
        "item": 'biggerreactors:ludicrite_block'
      },
      {
        "item": 'botanypotstiers:ultra_orange_terracotta_hopper_botany_pot',
      },
      {
        "item": 'nuclearcraft:slime_heat_sink'
      },
      {
        "item": 'industrialforegoing:sewer'
      },
      {
        "item": 'mob_grinding_utils:spawner_upgrade_width'
      },
      {
        "item": 'ars_nouveau:glyph_rune'
      },
      {
        "item": "powah:battery_nitro",
      },
      {
        "item": 'immersiveengineering:floodlight'
      },
      {
        "item": "farmersdelight:mushroom_rice"
      },
      {
        "item": "experienceobelisk:experience_obelisk"
      },
      {
        "item": "easy_villagers:villager"
      }
    ],
    "result": {
      "item": 'galaxy_core:agujero_negro',
      "count": 1
    }
  }).id('galaxyorigenes:blackhole')



    //semilla
    event.custom({
      "type": "extendedcrafting:combination",
      "powerCost": 100000,
      "input": {
        "item": "integratedterminals:chorus_glass"
      },
      "ingredients": [
        {
          "item": "galaxy_origins:cacota"
        },
        {
          "item": "galaxy_core:super_caca"
        },
        {
          "item": "powerrangersunlimited:goldenmorpher"
        },
        {
          "item": "minecraft:beetroot_seeds"
        },
        {
          "item": "powerrangersunlimited:goldenmorpher"
        },
        {
          "item": "galaxy_origins:cacota"
        },
        {
          "item": "rats:block_of_cheese"
        },
        {
          "item": "rats:block_of_cheese"
        },
        {
          "item": "galaxy_core:super_caca"
        },
        {
          "item": "minecraft:wheat_seeds"
        },
        {
          "item": "growthcraft_apples:apple_seeds"
        },
        {
          "item": "galaxy_core:super_caca"
        },
        {
          "item": "rats:block_of_cheese"
        },
        {
          "item": "rats:block_of_cheese"
        },
        {
          "item": "galaxy_origins:cacota"
        },
        {
          "item": "powerrangersunlimited:goldenmorpher"
        },
        {
          "item": "exnihilosequentia:grass_seeds"
        },
        {
          "item": "powerrangersunlimited:goldenmorpher"
        },
        {
          "item": "galaxy_core:super_caca"
        },
        {
          "item": "galaxy_origins:cacota"
        }
      ],
      "result": {
        "item": 'galaxy_core:semilla'
      }
    }).id('galaxyorigenes:semilla')



    //buscador del universo
    event.custom({
      "type": "extendedcrafting:combination",
      "powerCost": 100000,
      "input": {
        "item": "ad_astra_rocketed:tier_7_rocket"
      },
      "ingredients": [
        {
          "item": "thermalendergy:melodium_plate"
        },
        {
          "item": "ad_astra:calorite_plate"
        },
        {
          "item": "thermalendergy:melodium_plate"
        },
        {
          "item": "ad_astra:calorite_plate"
        },
        {
          "item": "ad_astra:calorite_plate"
        },
        {
          "item": "ad_astra:calorite_plate"
        },
        {
          "item": "ad_astra:calorite_plate"
        },
        {
          "item": "ad_astra:calorite_plate"
        },
        {
          "item": "ad_astra:calorite_plate"
        },
        {
          "item": "thermalendergy:melodium_plate"
        },
        {
          "item": "ad_astra:calorite_plate"
        },
        {
          "item": "thermalendergy:melodium_plate"
        }
      ],
      "result": {
        "item": 'galaxy_core:buscador_del_universo',
        "count": 1
      }
    })



  //catalizador del olvido
  event.shaped('galaxy_core:catalizador', [' AB', 'ACA', 'BA '], {
    A: 'occultism:soul_gem',
    C: 'allthecompressed:glass_5x',
    B: 'kubejs:doll'
  }).id('galaxyorigenes:catalizador')



   // Brujula Maldita
   event.shaped('galaxy_core:brujula_maldita', ['DED', 'ABA', 'DED'], {
    A: 'mekanism:module_gravitational_modulating_unit',
    B: 'industrialforegoing:wither_builder',
    D: 'ae2:energy_card',
    E: 'mekanism:module_gravitational_modulating_unit'
  }).id('galaxyorigenes:brujula')



    //calavaera maldita
    event.recipes.create.mechanical_crafting('galaxy_core:calavera_oscura', [
      '    F    ',
      '   AAA   ',
      '  FACAF  ',
      '  FABAF  ',
      '   NNN   ',
      '    F    '
      ], {
        A: 'minecraft:wither_skeleton_skull',
        B: 'thermal_extra:upgrade_augment',
        C: 'industrialforegoing:wither_builder',
        F: 'minecraft:wither_rose',
        N: 'occultism:soul_gem'
      }) 



  // transmisor
  event.shaped('galaxy_core:transmisor', ['A B', ' CF', 'GED'], {
    A: Item.of('mekanism:canteen', '{mekData:{FluidTanks:[{Tank:0b,stored:{Amount:64000,FluidName:"mekanism:nutritional_paste"}}]}}'),
    B: 'ae2wtlib:wireless_universal_terminal',
    C: 'mekanism:supercharged_coil',
    D: 'pneumaticcraft:module_expansion_card',
    E: 'ae2:singularity',
    F: 'mekanismgenerators:module_solar_recharging_unit',
    G: 'createaddition:tesla_coil'
  })


    


   //star nuget
   event.shaped('9x galaxy_core:pepita_de_mega_estrella', [
    '   ',
    ' A ',
    '   '
  ], {
    A: 'galaxy_core:starlight'
  }).id('galaxyorigenes:starnugget')



})