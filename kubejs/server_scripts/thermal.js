ServerEvents.recipes(event => {


     //eliminadas
     event.remove({id: 'thermal:fire_charge/enderium_ingot_2'})
     event.remove({id: 'thermal:enderium_dust_2'})
     event.remove({id: 'thermal:machines/smelter/smelter_alloy_enderium'})
     event.remove({id: 'alltheores:enderium_dust_from_alloy_blending'})




    function addRecipeRockGen(adjacent,below,out,id) {
        let recipe =  {
            "type": "thermal:rock_gen",
            "adjacent":adjacent,
            "result": Item.of(out)
        }
        if (below != '') {
            recipe.below = below
        }
        event.custom(recipe).id(id)
    }
    addRecipeRockGen('minecraft:water','minecraft:polished_diorite','minecraft:diorite','galaxyorigenes:rock_gen/rock_gen_diorite')
    addRecipeRockGen('minecraft:water','minecraft:polished_andesite','minecraft:andesite','galaxyorigenes:rock_gen/rock_gen_andesite')
    addRecipeRockGen('minecraft:water','minecraft:polished_granite','minecraft:granite','galaxyorigenes:rock_gen/rock_gen_granite')
    addRecipeRockGen('exnihilosequentia:witch_water','minecraft:redstone_block','minecraft:netherrack','galaxyorigenes:rock_gen/rock_gen_netherrack')
    addRecipeRockGen('exnihilosequentia:witch_water','minecraft:glowstone','minecraft:end_stone','galaxyorigenes:rock_gen/rock_gen_endstone')
    addRecipeRockGen('minecraft:water','minecraft:bone_block','minecraft:calcite','galaxyorigenes:rock_gen/rock_gen_calcite')
	
        //multiverso press
	event.recipes.thermal.press('alltheores:osmium_plate', ['#forge:ingots/osmium']).energy(2400)
	event.recipes.thermal.press('allthemodium:vibranium_plate', ['allthemodium:vibranium_ingot']).energy(2400)
	event.recipes.thermal.press('allthemodium:unobtainium_plate', ['allthemodium:unobtainium_ingot']).energy(2400)
	event.recipes.thermal.press('allthemodium:allthemodium_plate', ['allthemodium:allthemodium_ingot']).energy(2400)
	event.recipes.thermal.press('#forge:plates/brass', ['#forge:ingots/brass']).energy(2400)
	event.recipes.thermal.press('create:brass_sheet', ['#forge:ingots/brass']).energy(2400)
	event.recipes.thermal.press('alltheores:diamond_plate', ['minecraft:diamond']).energy(2400)
    event.recipes.thermal.press('thermal:constantan_gear', ['4x thermal:constantan_plate']).energy(2400)


    //induction smelter
    event.recipes.thermal.smelter('thermal:steel_ingot', ['minecraft:iron_ingot', 'minecraft:coal']).energy(4800).id('galaxytorigenes:steelingot')
    event.recipes.thermal.smelter('thermal:steel_block', ['minecraft:iron_block', 'minecraft:coal_block']).energy(4800).id('galaxytorigenes:steelblock')
    event.recipes.thermal.smelter('kubejs:lingotedeacero', ['minecraft:iron_ingot', 'minecraft:charcoal']).energy(4800).id('galaxytorigenes:steelingotdos')
    event.recipes.thermal.smelter('galaxy_core:hierro_pulsante', ['minecraft:iron_ingot', 'minecraft:ender_pearl']).energy(4800).id('galaxyorigenes:herropulsante')
    event.recipes.thermal.smelter('galaxy_core:redstone_alloy', ['minecraft:iron_ingot', 'minecraft:redstone', '#forge:silicon']).energy(4800).id('galaxyorigenes:redstonealloy')
    event.recipes.thermal.smelter('galaxy_core:hierro_conductor', ['minecraft:iron_ingot', 'minecraft:redstone']).energy(4800).id('galaxyorigenes:hierrocondustor')
    event.recipes.thermal.smelter('galaxy_core:energetic_alloy', ['minecraft:redstone', 'minecraft:glowstone_dust', 'minecraft:gold_ingot']).energy(4800).id('galaxyorigenes:aleacionenergetica')
    event.recipes.thermal.smelter('galaxy_core:soularium', ['minecraft:gold_ingot', 'minecraft:soul_sand']).energy(4800).id('galaxyorigenes:aleaciondealmas')
    event.recipes.thermal.smelter('galaxy_core:vibrant_alloy', ['galaxy_origins:aleacion_energetica', 'minecraft:ender_pearl']).energy(4800).id('galaxyorigenes:alaecionvibrante')
    event.recipes.thermal.smelter('galaxy_core:melodic_alloy', ['galaxy_origins:end_steel_alloy', 'minecraft:popped_chorus_fruit']).energy(4800).id('galaxyorigenes:melodicalloy')
    event.recipes.thermal.smelter('galaxy_core:end_steel_alloy', ['minecraft:end_stone', 'galaxy_origins:dark_steel', 'minecraft:obsidian']).energy(4800).id('galaxyorigenes:endsteelalloy')
    event.recipes.thermal.smelter('galaxy_core:dark_steel', ['minecraft:iron_ingot','#forge:dusts/coal', 'minecraft:obsidian']).energy(4800).id('galaxyorigenes:darksteelalloy')
    event.recipes.thermal.smelter('galaxy_core:stellar_alloy', ['minecraft:nether_star', 'galaxy_origins:melodic_alloy', '4x minecraft:clay_ball']).energy(4800).id('galaxyorigenes:stellaralloy')
    event.recipes.thermal.smelter('galaxy_core:enderium_base', ['2x #forge:ingots/tin', 'thermal:lead_ingot', '#forge:ingots/platinum']).energy(4800).id('galaxyorigenes:enderiumbase')
    event.recipes.thermal.smelter('#forge:ingots/enderium', ['2x galaxy_origins:enderium_base', 'thermal:basalz_powder', '2x minecraft:ender_pearl']).energy(4800).id('galaxyorigenes:enderiumingot')


    

    //molten dragon steel
    event.custom({
        "type": "thermal:chiller",
        "ingredients": [
          {
            "fluid": "mekanism:uranium_hexafluoride",
            "amount": 2500
          },
          {
            "item": "thermal:chiller_ball_cast"
          }
        ],
        "result": [
          {
            "item": 'thermal_extra:dragonsteel_bucket',
            "count": 1
          }
        ],
        "energy": 120000
      }).id('galaxtorigenes:moltendragonsteel')


      
     //caca super
    event.custom({
      "type": "thermal:chiller",
      "ingredients": [
        {
          "fluid": 'createaddition:bioethanol',
          "amount": 2500
        },
        {
          "item": "thermal:chiller_ball_cast"
        }
      ],
      "result": [
        {
          "item": 'galaxy_origins:cacota',
          "count": 1
        }
      ],
      "energy": 120000
    }).id('galaxyorigenes:poop')

   



})
