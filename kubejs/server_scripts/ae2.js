ServerEvents.recipes(event => {

       

      //eliminados
      event.remove({output:'aeinfinitybooster:infinity_card'})
      event.remove({output:'aeinfinitybooster:dimension_card'})
      event.remove({output:'ae2:cell_workbench'})
      event.remove({output:'ae2:tiny_tnt'})
      event.remove({output:'ae2:matter_cannon'})


     //universal press
     event.shaped('kubejs:universal_press', ['FPF', 'CSL', 'FEF'], {
      F: '#forge:ingots/sky_steel',
      P: 'ae2:silicon_press',
      C: 'ae2:calculation_processor_press',
      S: 'kubejs:incomplete_press',
      L: 'ae2:logic_processor_press',
      E: 'ae2:engineering_processor_press'
    }).id('kubejs:universal_press_dos')
  
  //perfecto ciernes
  event.custom({
    "type": "ae2:transform",
    "circumstance": {
      "type": "fluid",
      "tag": "minecraft:water"
    },
    "ingredients": [
      {
        "item": "ae2:charged_certus_quartz_crystal"
      },
      {
        "item": "ae2:flawed_budding_quartz"
      }
    ],
    "result": {
      "item": "ae2:flawless_budding_quartz"
    }
  }).id('galaxyorigenes:ciernesperfecto')



    //incompleted base
    event.custom({
      "type": "ae2:transform",
      "circumstance": {
        "type": "fluid",
        "tag": "minecraft:water"
      },
      "ingredients": [
        {
          "item": 'nuclearcraft:basic_electric_circuit'
        },
        {
          "item": 'exnihilosequentia:unfired_crucible'
        }
      ],
      "result": {
        "item": 'kubejs:incomplete_press'
      }
    }).id('galaxyorigenes:incompletecircuitbasic')

	

        // silicona 
        event.custom({
          "type": "create:deploying",
          "ingredients": [
            {
              "tag": 'forge:plastic'
            },
            {
              "item": 'kubejs:universal_press'
            }
          ],
          "keepHeldItem": true,
          "results": [
            {
              "item": "ae2:printed_silicon"
            }
          ],
        });
    
    
        event.custom({
          "type": "ae2:inscriber",
          "mode": "inscribe",
          "result": {
            "item": "ae2:printed_silicon"
          },
          "ingredients": {
            "middle": {
              "tag": 'forge:plastic'
            },
            "top": {
              "item": 'kubejs:universal_press'
            }
          }
        })
        
        
        
          //procesador de oro
          event.recipes.createSequencedAssembly([ // start the recipe
          Item.of("ae2:logic_processor") // this is the item that will appear in JEI as the result
      ],"minecraft:gold_ingot",[ // the input
          // the transitional item
          event.recipes.createDeploying("ae2:printed_logic_processor",["ae2:printed_silicon",'kubejs:universal_press']).keepHeldItem(),
          event.recipes.createDeploying("ae2:printed_logic_processor",["ae2:printed_silicon","ae2:printed_silicon",]),
          event.recipes.createDeploying("ae2:printed_logic_processor",["ae2:printed_silicon","minecraft:redstone"]),
      ]).transitionalItem("ae2:printed_logic_processor").loops(1).id('galaxyorigenes:circuitodeoro') // set the transitional item and the loops (amount of repetitions)
      
    
        event.custom({
          "type": "ae2:inscriber",
          "mode": "inscribe",
          "result": {
            "item": "ae2:printed_logic_processor"
          },
          "ingredients": {
            "middle": {
              "tag": "forge:ingots/gold"
            },
            "top": {
              "item": 'kubejs:universal_press'
            }
          }
        }).id('galaxyorigenes:circuitodeoroinscriber')
    
        event.custom({
          "type": "ae2:inscriber",
          "mode": "press",
          "result": {
            "item": "ae2:logic_processor"
          },
          "ingredients": {
            "middle": {
              "item": 'botania:manasteel_ingot'
            },
            "top": {
              "item": "ae2:printed_logic_processor"
            },
            "bottom": {
              "item": "ae2:printed_silicon"
            }
          }
        })
    
    
    
    
           //procesador de diamante
           event.recipes.createSequencedAssembly([ // start the recipe
           Item.of("ae2:engineering_processor") // this is the item that will appear in JEI as the result
       ],'minecraft:diamond',[ // the input
           // the transitional item
           event.recipes.createDeploying("ae2:printed_engineering_processor",["ae2:printed_silicon",'kubejs:universal_press']).keepHeldItem(),
           event.recipes.createDeploying("ae2:printed_engineering_processor",["ae2:printed_silicon","ae2:printed_silicon"]),
           event.recipes.createDeploying("ae2:printed_engineering_processor",["ae2:printed_silicon","minecraft:redstone"]),
       ]).transitionalItem("ae2:printed_engineering_processor").loops(1).id('galaxyorigenes:circuitodediamantes') // set the transitional item and the loops (amount of repetitions)
    
        
      
       event.custom({
        "type": "ae2:inscriber",
        "mode": "press",
        "result": {
          "item": "ae2:engineering_processor"
        },
        "ingredients": {
          "middle": {
            "item": 'thermal:steel_ingot'
          },
          "top": {
            "item": "ae2:printed_engineering_processor"
          },
          "bottom": {
            "item": "ae2:printed_silicon"
          }
        }
      }).id('galaxyorigenes:circuitodediamantesinscriber')
    
      event.custom({
        "type": "ae2:inscriber",
        "mode": "inscribe",
        "result": {
          "item": "ae2:printed_engineering_processor"
        },
        "ingredients": {
          "middle": {
            "tag": "forge:gems/diamond"
          },
          "top": {
            "item": 'kubejs:universal_press'
          }
        }
      }).id('galaxyorigenes:circuitodediamantesimpreso')
    
    
    
    
    
    
           //procesador de calculo
           event.recipes.createSequencedAssembly([ // start the recipe
           Item.of("ae2:calculation_processor") // this is the item that will appear in JEI as the result
       ],"#ae2:all_certus_quartz",[ // the input// the transitional item
           event.recipes.createDeploying("ae2:printed_calculation_processor",["ae2:printed_silicon",'kubejs:universal_press']).keepHeldItem(),
           event.recipes.createDeploying("ae2:printed_calculation_processor",["ae2:printed_silicon","ae2:printed_silicon",]),
           event.recipes.createDeploying("ae2:printed_calculation_processor",["ae2:printed_silicon","minecraft:redstone"]),
       ]).transitionalItem("ae2:printed_calculation_processor").loops(1).id('galaxyorigenes:circuitodecalculo') // set the transitional item and the loops (amount of repetitions)
    
    
    
        event.custom({
          "type": "ae2:inscriber",
          "mode": "inscribe",
          "result": {
            "item": "ae2:printed_calculation_processor"
          },
          "ingredients": {
            "middle": {
              "item": "ae2:certus_quartz_crystal"
            },
            "top": {
              "item": 'kubejs:universal_press'
            }
          }
        }).id('galaxyorigenes:circuitodecalculoinscriber')
    
        event.custom({
          "type": "ae2:inscriber",
          "mode": "press",
          "result": {
            "item": "ae2:calculation_processor"
          },
          "ingredients": {
            "middle": {
              "item": 'mekanism:ingot_refined_glowstone'
            },
            "top": {
              "item": "ae2:printed_calculation_processor"
            },
            "bottom": {
              "item": "ae2:printed_silicon"
            }
          }
        }).id('galaxyorigenes:circuitodecalculoimpreso')
    
    
    
    
    //infinity card booster
    event.custom({
      "type": "extendedcrafting:shaped_table",
      "tier": 2,
      "pattern": [
        "AABAA",
        "CBDBC",
        "BDEDB",
        "CBDBC",
        "FFBFF"
      ],
      "key": {
        "A": {
          "item": "minecraft:ender_eye"
        },
        "B": {
          "item": "ae2:wireless_booster"
        },
        "C": {
          "item": "minecraft:nether_star"
        },
        "D": {
          "item": "extendedcrafting:ender_ingot"
        },
        "E": {
          "item": 'galaxy_core:patricio_estrella'
        },
        "F": {
          "item": "minecraft:netherite_ingot"
        }
      },
      "result": {
        "item": 'aeinfinitybooster:infinity_card',
        "count": 2
      },
    }).id('galaxyorigenes:infinitybooster')
      
      
      
      //infinity dimensional card
      event.custom({
      "type": "extendedcrafting:shaped_table",
      "tier": 2,
      "pattern": [
        "AABAA",
        "CBDBC",
        "BDEDB",
        "CBDBC",
        "FFBFF"
      ],
      "key": {
        "A": {
          "item": "minecraft:ender_eye"
        },
        "B": {
          "item": "aeinfinitybooster:infinity_card"
        },
        "C": {
          "item": "extendedcrafting:ender_star"
        },
        "D": {
          "item": "extendedcrafting:ender_ingot"
        },
        "E": {
          "item": 'galaxy_core:patricio_estrella'
        },
        "F": {
          "item": "minecraft:netherite_ingot"
        }
      },
      "result": {
        "item": 'aeinfinitybooster:dimension_card',
        "count": 1
      },
    }).id('galaxyorigenes:dimensioncard')
    
    
      
    })