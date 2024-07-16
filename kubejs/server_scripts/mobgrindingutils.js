//mobgrindingutils by srnadien
ServerEvents.recipes(event => {
	
	
	//eliminadas
	event.remove({output:'mob_grinding_utils:saw'})
	event.remove({output:'mob_grinding_utils:entity_spawner'})
	event.remove({output:'mob_grinding_utils:jumbo_tank'})
	event.remove({output:'mob_grinding_utils:tinted_glass'})
	event.remove({output:'mob_grinding_utils:xp_tap'})
	event.remove({output:'mob_grinding_utils:mob_swab'})
	

  
  
    //entity spawner
    event.shaped('mob_grinding_utils:entity_spawner', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'minecraft:netherite_ingot',
    C: 'minecraft:netherite_ingot',
    Q: 'minecraft:netherite_ingot',
    I: 'mob_grinding_utils:solid_xp_block',
    L: 'create:brass_casing',
    W: 'mob_grinding_utils:solid_xp_block',
    E: 'allthemodium:vibranium_block',
    H: 'minecraft:sticky_piston',
    P: 'allthemodium:unobtainium_block'
  }).id('galaxyorigenes:entityspawner')
  
  
   //jumbo tank
    event.shaped('mob_grinding_utils:jumbo_tank', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'minecraft:netherite_ingot',
    C: 'mob_grinding_utils:tank',
    Q: 'minecraft:netherite_ingot',
    I: 'mob_grinding_utils:tinted_glass',
    L: 'minecraft:nether_star',
    W: 'mob_grinding_utils:tinted_glass',
    E: 'minecraft:netherite_ingot',
    H: 'mob_grinding_utils:tank_sink',
    P: 'minecraft:netherite_ingot'
  }).id('galaxyorigenes:jumbotank')



     //Tinted Glass
     event.shaped('mob_grinding_utils:tinted_glass', [
    'TCQ',
    'I W',
    'EHP'
  ], {
    T: 'minecraft:black_concrete',
    C: 'minecraft:black_stained_glass',
    Q: 'minecraft:black_concrete',
    I: 'minecraft:black_stained_glass',
    W: 'minecraft:black_stained_glass',
    E: 'minecraft:black_concrete',
    H: 'minecraft:black_stained_glass',
    P: 'minecraft:black_concrete'
  }).id('galaxyorigenes:tintedglass')
  
  
    //xp tap
    event.shaped('mob_grinding_utils:xp_tap', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'mob_grinding_utils:tinted_glass',
    C: 'minecraft:iron_block',
    Q: 'minecraft:iron_block',
    I: 'advancednetherite:netherite_diamond_ingot',
    L: 'mob_grinding_utils:tank_sink',
    W: 'sophisticatedbackpacks:xp_pump_upgrade',
    E: 'advancednetherite:netherite_diamond_ingot',
    H: 'minecraft:iron_block',
    P: 'minecraft:iron_block'
  }).id('galaxyorigenes:xptap')
  
    
	//pcr
    event.shaped('mob_grinding_utils:mob_swab', [
    'T  ',
    ' L ',
    '  T'
  ], {
    T: 'minecraft:white_wool',
    L: '#forge:rods/iron'
  }).id('galaxyorigenes:pcr')
	

  //golden egg
  event.custom({
    "type": "extendedcrafting:shaped_flux_crafter",
    "powerRequired": 1200,
    "powerRate": 70,
    "pattern": [
      "ABC",
      "CDE",
      "ACA"
    ],
    "key": {
      "A": {
        "item": "minecraft:pink_dye"
      },
      "B": {
        "item": "minecraft:cooked_chicken"
      },
      "C": {
        "item": "minecraft:lime_dye"
      },
      "D": {
        "item": "minecraft:nether_star"
      },
      "E": {
        "item": "mob_grinding_utils:nutritious_chicken_feed"
      }
    },
    "result": {
      "item": 'mob_grinding_utils:golden_egg'
    }
  }).id('galaxyorigenes:goldenegg')
   

  //cursed egg
  event.custom({
    "type": "extendedcrafting:shaped_flux_crafter",
    "powerRequired": 100000,
    "powerRate": 400,
    "pattern": [
      "ABC",
      "CDE",
      "ACA"
    ],
    "key": {
      "A": {
        "item": "minecraft:magenta_dye"
      },
      "B": {
        "item": 'rats:rat_king_crown'
      },
      "C": {
        "item": "minecraft:purple_dye"
      },
      "D": {
        "item": "minecraft:nether_star"
      },
      "E": {
        "item": "mob_grinding_utils:gm_chicken_feed_cursed"
      }
    },
    "result": {
      "item": 'mob_grinding_utils:rotten_egg'
    }
  }).id('galaxyorigenes:rottenegg')

	
})