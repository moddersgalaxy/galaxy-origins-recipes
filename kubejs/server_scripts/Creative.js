ServerEvents.recipes(event => {
        event.recipes.create.mechanical_crafting('create:creative_blaze_cake', [
          '     ',
          'AAAAA',
          'BCCCB',
          'BCDCB',
          ' BAB '
        ], {
          A: 'create:precision_mechanism',
          B: 'create:blaze_cake',
          C: 'create:experience_block',
          D: 'kubejs:star'

        })


  
    
        event.recipes.create.mechanical_crafting('ae2:creative_energy_cell', [
          'BBAAABB',
          'BGCCCGB',
          'ACEDECA',
          'ACDFDCA',
          'ACEDECA',
          'BGCCCGB',
          'BBAAABB'
        ], {
          A:'ae2:singularity', 
          B:'ae2:spatial_anchor', 
          C: Item.of('megacells:mega_energy_cell', '{internalCurrentPower:1.28E7d,internalMaxPower:1.28E7d}'), 
          D:'ae2:quantum_ring', 
          E:'ae2additions:me_wireless_transceiver', 
          F:'kubejs:star',
          G:'ae2:not_so_mysterious_cube'

        })


        event.recipes.create.mechanical_crafting('mekanism:creative_chemical_tank', [
          'EEEEE',
          'EBCBE',
          'EBABE',
          'EDDDE',
          'FFFFF'
        ], {
          
          A:'kubejs:star',
          B:'mekanism:ultimate_chemical_tank', 
          C:'mekanism:pellet_antimatter', 
          D:'mekanism:ultimate_induction_provider', 
          E:'mekanism:hdpe_stick', 
          F:'mekanismgenerators:fusion_reactor_frame'

        })
  
  
        event.recipes.create.mechanical_crafting('mekanism:creative_fluid_tank', [
          'EEEEE',
          'EBCBE',
          'EBABE',
          'EDDDE',
          'FFFFF'
        ], {

          A:'kubejs:star',
          B:'mekanism:ultimate_fluid_tank', 
          C:'mekanism:pellet_antimatter', 
          D:'mekanism:ultimate_induction_provider', 
          E:'mekanism:hdpe_stick', 
          F:'mekanismgenerators:fusion_reactor_frame'

        })
      })