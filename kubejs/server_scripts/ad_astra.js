ServerEvents.recipes(e=> {
    e.remove({ id: 'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot'})
    e.remove({ id: 'electrodynamics:blasting/steel_ingot_from_iron_ingot'})
    e.remove({ output: 'ad_astra:nasa_workbench'})
  




  e.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
          "#": {
            "item": "thermal_extra:dragonsteel_plate"
          },
          "B": {
            "item": 'ad_astra:rocket_nose_cone'
          },
          "C": {
            "item": "extendedcrafting:crafting_core"
          },
          "L": {
            "item": 'immersiveengineering:logic_circuit'
          },
          "R": {
            "item": "industrialforegoing:machine_frame_supreme"
          },
          "T": {
            "item": 'occultism:spirit_torch'
          }
        },
        "pattern": [
          "TLT",
          "#C#",
          "RBR"
        ],
        "result": {
          "item": "ad_astra:nasa_workbench"
        }
      }).id('galaxtorigenes:mesadelanasa')
  
       
})
