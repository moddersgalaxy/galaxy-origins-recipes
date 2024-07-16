ServerEvents.recipes(event => {


  //eliminadas
  event.remove({output:'immersiveengineering:treated_wood_horizontal'})




 //trated wood
 event.custom({
    "type": "pedestals:cobblegen",
    "blockBelow": {
      "item": "immersiveengineering:duroplast"
    },
    "result": {
      "item": "immersiveengineering:treated_wood_horizontal"
    }
  }).id('galaxyorigenes:tratedwood')

   //crushed netherrack
  event.custom({
    "type": "pedestals:cobblegen",
    "blockBelow": {
      "item": 'mysticalagradditions:dragon_egg_crux'
    },
    "result": {
      "item": 'exnihilosequentia:crushed_netherrack'
    }
  }).id('galaxyorigenes:crushednetherrack')


  //crushed end stone
  event.custom({
    "type": "pedestals:cobblegen",
    "blockBelow": {
      "item": 'mysticalagradditions:nether_star_crux'
    },
    "result": {
      "item": 'exnihilosequentia:crushed_end_stone'
    }
  }).id('galaxyorigenes:crushedendstone')



  //dust 
  event.custom({
    "type": "pedestals:cobblegen",
    "blockBelow": {
      "item": 'excompressum:compressed_dust'
    },
    "result": {
      "item": 'exnihilosequentia:dust'
    }
  }).id('galaxyorigenes:soulstone')





   //black stone
   event.custom({
      "type": "pedestals:cobblegen",
      "blockBelow": {
        "item": "minecraft:coal_block"
      },
      "result": {
        "item": "minecraft:blackstone"
      }
    }).id('galaxyorigenes:blackstone')



      //end stone
      event.custom({
      "type": "pedestals:cobblegen",
      "blockBelow": {
        "item": "farmersdelight:organic_compost"
      },
      "result": {
        "item": "minecraft:dirt"
      }
    }).id('galaxyorigenes:compostdirt')





     //end stone
     event.custom({
      "type": "pedestals:cobblegen",
      "blockBelow": {
        "item": "minecraft:end_stone_bricks"
      },
      "result": {
        "item": "minecraft:end_stone"
      }
    }).id('galaxyorigenes:endstone')


      
      //tierra
      event.custom({
      "type": "pedestals:cobblegen",
      "blockBelow": {
        "item": "farmersdelight:rich_soil"
      },
      "result": {
        "item": "minecraft:dirt"
      }
    }).id('galaxyorigenes:richdirt')


  
      //darkstone forbidden
      event.custom({
      "type": "pedestals:cobblegen",
      "blockBelow": {
        "item": "minecraft:chiseled_polished_blackstone"
      },
      "result": {
        "item": "forbidden_arcanus:darkstone"
      }
    }).id('galaxyorigenes:darkstonforb')



   //cristal
    event.custom({
      "type": "pedestals:cobblegen",
      "blockBelow": {
        "item": 'biggerreactors:heat_exchanger_glass'
      },
      "result": {
        "item": 'minecraft:glass'
      }
    }).id('galaxyorigenes:glass')

    
    //certus crystal
    event.custom({
      "type": "pedestals:cobblegen",
      "blockBelow": {
        "item": 'ae2:64k_crafting_storage'
      },
      "result": {
        "item": 'ae2:quartz_block'
      }
    }).id('galaxyorigenes:certuscrystal')

    //soulstone
    event.custom({
      "type": "pedestals:cobblegen",
      "blockBelow": {
        "item": 'thermal_extra:soul_infused_block'
      },
      "result": {
        "item": 'mysticalagriculture:soulstone_cobble'
      }
    }).id('galaxyorigenes:soulstone')



    //pedestal
    event.custom({

      "type": "minecraft:crafting_shaped",
      "pattern": [
        "SLS",
        " B ",
        "BBB"
      ],
      "key": {
        "S": {
          "item": 'minecraft:cobblestone_slab'
        },
        "B": {
        "item": 'minecraft:cobblestone'
        },
        "L": {
        "tag": "pedestals:linkingtools"
        }
      },
      "result": {
        "item": "pedestals:block_pedestal"
        },
      }).id('galaxyorigenes:pedestalcustom')
    
    })
