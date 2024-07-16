//mekanism By SrNadien
ServerEvents.recipes(event => {
	
	
	//eliminadas
	event.remove({output:'mekanism:personal_chest'})
  event.remove({output:'mekanism:atomic_disassembler'})
	event.remove({output:'mekanism:robit'})
	event.remove({output:'mekanism:flamethrower'})
	event.remove({output:'mekanism:scuba_tank'})
	event.remove({output:'mekanism:free_runners'})
	event.remove({output:'mekanism:free_runners_armored'})
	event.remove({output:'mekanism:personal_barrel'})
	event.remove({output:'mekanismgenerators:wind_generator'})
	event.remove({output:'mekanismgenerators:heat_generator'})
	event.remove({output:'mekanism:metallurgic_infuser'})
	event.remove({output:'mekanism:steel_casing'})
	event.remove({output:'mekanism:enrichment_chamber'})
	event.remove({output:'mekanism:basic_energy_cube'})
	event.remove({output:'mekanism:purification_chamber'})
	event.remove({output:'mekanism:electric_pump'})
	event.remove({output:'mekanism:energy_tablet'})
	event.remove({output:'mekanism:electrolytic_separator'})
	event.remove({output:'mekanism:precision_sawmill'})
	event.remove({output:'mekanism:jetpack'})
	event.remove({output:'mekanismgenerators:solar_generator'})
	event.remove({output:'mekanism:basic_universal_cable'})
	event.remove({output:'mekanism:basic_logistical_transporter'})
	event.remove({output:'mekanism:basic_thermodynamic_conductor'})
	event.remove({output:'mekanism:basic_tier_installer'})
	event.remove({output:'mekanism:advanced_tier_installer'})
	event.remove({output:'mekanism:elite_tier_installer'})
	event.remove({output:'mekanism:ultimate_tier_installer'})
	event.remove({output:'mekanism:basic_logistical_transporter'})
	event.remove({output:'mekanism:advanced_logistical_transporter'})
	event.remove({output:'mekanism:elite_logistical_transporter'})
	event.remove({output:'mekanism:ultimate_logistical_transporter'})
	event.remove({output:'mekanism:restrictive_transporter'})
	event.remove({output:'mekanism:diversion_transporter'})
	event.remove({output:'mekanism:digital_miner'})
	event.remove({output:'mekanism:cardboard_box'})
	event.remove({output:'mekanism:basic_bin'})
	event.remove({output:'mekanism:module_blasting_unit'})
	event.remove({output:'mekanism:upgrade_anchor'})
	event.remove({output:'thermal:machine_frame'})
	event.remove({output:'thermal:rf_coil'})
	event.remove({output:'mekanism:alloy_infused'})
	event.remove({output:'mekanism:basic_control_circuit'})
	event.remove({output:'mekanism:combiner'})
	event.remove({output:'immersiveengineering:concrete_leaded'})
	event.remove({output:'hostilenetworks:empty_prediction'})
  event.remove({output:'sophisticatedbackpacks:upgrade_base'})
	event.remove({output:'mekanism:chemical_oxidizer'})
	event.remove({ id: 'mekanism:alloys/infused' });
	event.remove({ id: 'mekanism:basic_control_circuit' });
  event.remove({ id: 'mekanism:crusher' });
  event.remove({ output: 'mekanism:chemical_infuser' });
  event.remove({ output: 'mekanismgenerators:fusion_reactor_frame' });
  event.remove({ output: 'mekanismgenerators:fission_reactor_casing' });
  event.remove({ output: 'mekanism:chemical_dissolution_chamber' });
  event.remove({ output: 'mekanismgenerators:gas_burning_generator' });
  event.remove({ output: 'mekanism:chemical_washer' });
  event.remove({ output: 'mekanism:resistive_heater' });
  event.remove({ output: 'mekanism:laser' });
  event.remove({ output: 'mekanismgenerators:fusion_reactor_frame' });
  event.remove({ output: 'mekanismgenerators:gas_burning_generator' });
  event.remove({ output: 'mekanismgenerators:fission_reactor_casing' });

	
	//recetas maquinas


  //generador de calor
	event.shaped('mekanismgenerators:heat_generator', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: '#forge:plates/iron',
    C: '#forge:plates/iron',
    Q: '#forge:plates/iron',
    I: '#minecraft:planks',
    L: '#forge:plates/osmium',
    W: '#minecraft:planks',
    E: 'thermal:saw_blade',
    H: 'minecraft:blast_furnace',
    P: 'thermal:saw_blade'
  }).id('galaxyorigenes:generadordecalor')
    
  //infusor metalurgico
    event.shaped('mekanism:metallurgic_infuser', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: '#forge:plates/iron',
    C: 'minecraft:blast_furnace',
    Q: '#forge:plates/iron',
    I: 'minecraft:redstone',
    L: '#forge:plates/osmium',
    W: 'minecraft:redstone',
    E: '#forge:plates/iron',
    H: 'minecraft:blast_furnace',
    P: '#forge:plates/iron'
  }).id('galaxyorigenes:infussormetalurgico')

  //tuvo de energia basico
    event.shaped('mekanism:basic_energy_cube', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'mekanism:alloy_infused',
    C: 'mekanism:energy_tablet',
    Q: 'mekanism:alloy_infused',
    I: '#forge:plates/steel',
    L: 'industrialforegoing:machine_frame_advanced',
    W: '#forge:plates/steel',
    E: 'mekanism:alloy_infused',
    H: 'mekanism:energy_tablet',
    P: 'mekanism:alloy_infused'
  }).id('galaxyorigenes:cubodeenergia')

  //purificadora
    event.shaped('mekanism:purification_chamber', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'mekanism:alloy_infused',
    C: 'mekanism:advanced_control_circuit',
    Q: 'mekanism:alloy_infused',
    I: '#forge:plates/osmium',
    L: 'industrialforegoing:machine_frame_advanced',
    W: '#forge:plates/osmium',
    E: 'mekanism:alloy_infused',
    H: 'mekanism:advanced_control_circuit',
    P: 'mekanism:alloy_infused'
  }).id('galaxyorigenes:purificadora')

  //panel solar 2
    event.shaped('mekanismgenerators:solar_panel', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'minecraft:glass_pane',
    C: 'minecraft:glass_pane',
    Q: 'minecraft:glass_pane',
    I: 'mekanism:alloy_reinforced',
    L: 'mekanism:alloy_infused',
    W: 'mekanism:alloy_reinforced',
    E: '#forge:plates/osmium',
    H: '#forge:plates/osmium',
    P: '#forge:plates/osmium'
  }).id('galaxyorigenes:panelsolardos')

  //bomba electrica
    event.shaped('mekanism:electric_pump', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
	T: 'mob_grinding_utils:spawner_upgrade_height',
	C: 'minecraft:bucket',
    Q: 'mob_grinding_utils:spawner_upgrade_height',
    I: 'mekanism:alloy_infused',
    L: 'industrialforegoing:machine_frame_advanced',
    W: 'mekanism:alloy_infused',
    E: '#forge:plates/osmium',
    H: '#forge:plates/osmium',
    P: '#forge:plates/osmium'
  }).id('galaxyorigenes:bombaelectrica')

  //tabla de energia
    event.shaped('mekanism:energy_tablet', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: '#forge:plates/steel',
    C: '#forge:plates/gold',
    Q: '#forge:plates/steel',
    I: 'mekanism:alloy_infused',
    L: '#forge:plates/gold',
    W: 'mekanism:alloy_infused',
    E: '#forge:plates/steel',
    H: '#forge:plates/gold',
    P: '#forge:plates/steel'
  }).id('galaxyorigenes:tabletadeenergia')

  //separador de electrolitos
    event.shaped('mekanism:electrolytic_separator', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: '#forge:plates/steel',
    C: 'mekanism:alloy_infused',
    Q: '#forge:plates/steel',
    I: 'mekanism:alloy_infused',
    L: 'mekanism:electrolytic_core',
    W: 'mekanism:alloy_infused',
    E: '#forge:plates/steel',
    H: 'mekanism:alloy_infused',
    P: '#forge:plates/steel'
  }).id('galaxyorigenes:separadordeelectrolitos')

  //cortadora de madera
    event.shaped('mekanism:precision_sawmill', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: '#forge:plates/steel',
    C: 'mekanism:advanced_control_circuit',
    Q: '#forge:plates/steel',
    I: 'mekanism:alloy_infused',
    L: 'industrialforegoing:machine_frame_advanced',
    W: 'mekanism:alloy_infused',
    E: '#forge:plates/steel',
    H: 'mekanism:advanced_control_circuit',
    P: '#forge:plates/steel'
  }).id('galaxyorigenes:sierrameka')

  //generador solar
    event.shaped('mekanismgenerators:solar_generator', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'mekanismgenerators:solar_panel',
    C: 'mekanismgenerators:solar_panel',
    Q: 'mekanismgenerators:solar_panel',
    I: 'mekanism:alloy_reinforced',
    L: '#forge:plates/steel',
    W: 'mekanism:alloy_reinforced',
    E: '#forge:plates/osmium',
    H: 'mekanism:energy_tablet',
    P: '#forge:plates/osmium'
  }).id('galaxyorigenes:generadorsolar')

  //tubo universal basico
    event.shaped('8x mekanism:basic_universal_cable', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: '#forge:plates/steel',
    C: '#forge:plates/steel',
    Q: '#forge:plates/steel',
    I: 'minecraft:glass',
    L: 'minecraft:redstone',
    W: 'minecraft:glass',
    E: '#forge:plates/steel',
    H: '#forge:plates/steel',
    P: '#forge:plates/steel'
  }).id('galaxyorigenes:cableuniversal')

  //tubo presurizado basico
    event.shaped('8x mekanism:basic_pressurized_tube', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: '#forge:plates/steel',
    C: '#forge:plates/steel',
    Q: '#forge:plates/steel',
    I: 'minecraft:glass',
    L: 'minecraft:glass',
    W: 'minecraft:glass',
    E: '#forge:plates/steel',
    H: '#forge:plates/steel',
    P: '#forge:plates/steel'
  });

  //tubo conductor de energia
     event.shaped('8x mekanism:basic_thermodynamic_conductor', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: '#forge:plates/steel',
    C: '#forge:plates/steel',
    Q: '#forge:plates/steel',
    I: 'minecraft:glass',
    L: 'alltheores:copper_plate',
    W: 'minecraft:glass',
    E: '#forge:plates/steel',
    H: '#forge:plates/steel',
    P: '#forge:plates/steel'
  }).id('galaxyorigenes:tuboconductor')

  //instalador basico
     event.shaped('mekanism:basic_tier_installer', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'minecraft:redstone',
    C: 'mekanism:basic_control_circuit',
    Q: 'minecraft:redstone',
    I: '#forge:plates/steel',
    L: '#minecraft:planks',
    W: '#forge:plates/steel',
    E: 'minecraft:redstone',
    H: 'mekanism:basic_control_circuit',
    P: 'minecraft:redstone'
  }).id('galaxyorigenes:instaladorbasico')

  //instalador avanzado
     event.shaped('mekanism:advanced_tier_installer', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'mekanism:alloy_infused',
    C: 'mekanism:advanced_control_circuit',
    Q: 'mekanism:alloy_infused',
    I: '#forge:plates/lumium',
    L: '#minecraft:planks',
    W: '#forge:plates/lumium',
    E: 'mekanism:alloy_infused',
    H: 'mekanism:advanced_control_circuit',
    P: 'mekanism:alloy_infused'
  }).id('galaxyorigenes:instaladoravanzado')


  //instalador elite
    event.shaped('mekanism:elite_tier_installer', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'mekanism:alloy_reinforced',
    C: 'mekanism:elite_control_circuit',
    Q: 'mekanism:alloy_reinforced',
    I: '#forge:plates/signalum',
    L: '#minecraft:planks',
    W: '#forge:plates/signalum',
    E: 'mekanism:alloy_reinforced',
    H: 'mekanism:elite_control_circuit',
    P: 'mekanism:alloy_reinforced'
  }).id('galaxyorigenes:instaladorelite')

  //instalador definitivo
    event.shaped('mekanism:ultimate_tier_installer', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'mekanism:alloy_atomic',
    C: 'mekanism:ultimate_control_circuit',
    Q: 'mekanism:alloy_atomic',
    I: '#forge:plates/enderium',
    L: '#minecraft:planks',
    W: '#forge:plates/enderium',
    E: 'mekanism:alloy_atomic',
    H: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:alloy_atomic'
  }).id('galaxyorigenes:instaladordefinitivo')

  //enriquesedora
    event.shaped('mekanism:enrichment_chamber', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'mekanism:alloy_infused',
    C: 'mekanism:advanced_control_circuit',
    Q: 'mekanism:alloy_infused',
    I: '#forge:plates/diamond',
    L: 'industrialforegoing:machine_frame_advanced',
    W: '#forge:plates/diamond',
    E: 'mekanism:alloy_infused',
    H: 'mekanism:advanced_control_circuit',
    P: 'mekanism:alloy_infused'
  }).id('galaxyorigenes:enriquesedora')

  //combinador
    event.shaped('mekanism:combiner', [
    'TCQ',
    'ILI',
    'EHP'
  ], {
    T: 'mekanism:alloy_reinforced',
    C: 'mekanism:elite_control_circuit',
    Q: 'mekanism:alloy_reinforced',
    I: 'allthecompressed:gold_block_1x',
    L: 'industrialforegoing:machine_frame_advanced',
    E: 'mekanism:alloy_reinforced',
    H: 'mekanism:elite_control_circuit',
    P: 'mekanism:alloy_reinforced'
  }).id('galaxyorigenes:combinador')

  //oxidizer
    event.shaped('mekanism:chemical_oxidizer', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'mekanism:alloy_infused',
    C: 'mekanism:basic_control_circuit',
    Q: 'mekanism:alloy_infused',
    I: 'expandedstorage:old_netherite_chest',
    L: 'mekanism:dynamic_tank',
    W: 'mekanism:basic_chemical_tank',
    E: 'mekanism:alloy_infused',
    H: 'mekanism:basic_control_circuit',
    P: 'mekanism:alloy_infused'
  }).id('galaxyorigenes:oxydadorchemico')

  //jetpack
  event.shaped('mekanism:jetpack', [
    ' C ',
    'ELE',
    'PHP'
  ], {
    C: 'mekanism:ultimate_energy_cube',
    L: 'mekanism:energy_tablet',
    E: 'mekanism:alloy_atomic',
    H: 'mekanism:ultimate_chemical_tank',
    P: 'mekanism:ingot_refined_obsidian'
  }).id('galaxyorigenes:jetpack')

  //carcasa de acero
  event.shaped('mekanism:steel_casing', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: '#forge:plates/steel',
    B: '#forge:plates/osmium',
    C: '#forge:ingots/brass'
  }).id('galaxyorigenes:carcasadeacero')


  	//minero digital
	event.custom({
    "type": "extendedcrafting:shaped_table",
    "tier": 3,
    "pattern": [
      "AAABAAA",
      "ACCCCCA",
      "ACDDDCA",
      "BCDEDCB",
      "ACDDDCA",
      "ACCCCCA",
      "AAABAAA"
    ],
    "key": {
      "A": {
        "item": "fluxnetworks:flux_core"
      },
      "B": {
        "item": "solarpanels:photonic_energy_tablet"
      },
      "C": {
        "item": "minecraft:lapis_lazuli"
      },
      "D": {
        "item": "industrialforegoing:laser_lens0"
      },
      "E": {
        "item": "industrialforegoing:machine_frame_advanced"
      }
    },
    "result": {
      "item": "mekanism:digital_miner",
      "count": 1
    },
  }).id('galaxyorigenes:minerodigital')

  
  //atomic disasembler
  event.shaped('mekanism:atomic_disassembler', ['ITI', 'IAI', ' P '], {
  I: 'mekanism:alloy_infused',
  T: 'mekanism:energy_tablet',
  A: 'mekanism:alloy_atomic',
  P: 'allthemodium:allthemodium_pickaxe'
}).id('galaxtorigenes:attomicdisasembler')

//chemical infuser
event.custom({"type":"mekanism:mek_data","key":{"A":{"tag":"mekanism:alloys/infused"},"C":{"tag":"forge:circuits/basic"},"T":{"item":"mekanism:basic_chemical_tank"},"X":{"item":"industrialforegoing:machine_frame_advanced"}},"pattern":["ACA","TXT","ACA"],"result":{"item":"mekanism:chemical_infuser"}}).id('galaxtorigenes:infusorquimico')


//carcasa reactor de fusion
event.custom({"type":"minecraft:crafting_shaped","key":{"#":{"tag":"forge:pellets/polonium"},"A":{"tag":"forge:alloys/ultimate"},"X":{"item":"industrialforegoing:machine_frame_advanced"}},"pattern":["A#A","#X#","A#A"],"result":{"count":4,"item":"mekanismgenerators:fusion_reactor_frame"}}).id('galaxtorigenes:carcasareactorfision')



//trituradora receta
event.custom({"type":"minecraft:crafting_shaped","key":{"B":{"item":"minecraft:lava_bucket"},"C":{"tag":"forge:circuits/basic"},"R":{"tag":"forge:dusts/redstone"},"X":{"item":"industrialforegoing:machine_frame_advanced"}},"pattern":["RCR","BXB","RCR"],"result":{"item":"mekanism:crusher"}}).id('galaxtorigenes:trituradora')


//carcasa reactor de fission
event.custom({"type":"minecraft:crafting_shaped","key":{"I":{"tag":"forge:ingots/lead"},"X":{"item":"industrialforegoing:machine_frame_advanced"}},"pattern":[" I ","IXI"," I "],"result":{"count":4,"item":"mekanismgenerators:fission_reactor_casing"}}).id('galaxtorigenes:carcasareactofission')


//camara de disolucion quimica
event.custom({"type":"mekanism:mek_data","key":{"C":{"tag":"forge:circuits/ultimate"},"I":{"tag":"forge:ingots/refined_obsidian"},"T":{"item":"mekanism:basic_chemical_tank"},"X":{"item":"industrialforegoing:machine_frame_advanced"}},"pattern":["ITI","CXC","ITI"],"result":{"item":"mekanism:chemical_dissolution_chamber"}}).id('galaxtorigenes:camaradedisolucion')


//generador de gas
event.custom({"type":"minecraft:crafting_shaped","key":{"A":{"tag":"mekanism:alloys/infused"},"C":{"item":"mekanism:electrolytic_core"},"O":{"tag":"forge:ingots/osmium"},"X":{"item":"industrialforegoing:machine_frame_advanced"}},"pattern":["OAO","XCX","OAO"],"result":{"item":"mekanismgenerators:gas_burning_generator"}}).id('galaxtorigenes:generadordegas')


//Lavadora quimica
event.custom({"type":"mekanism:mek_data","key":{"B":{"item":"mekanism:basic_fluid_tank"},"C":{"tag":"forge:circuits/ultimate"},"I":{"tag":"forge:ingots/refined_obsidian"},"T":{"item":"mekanism:basic_chemical_tank"},"X":{"item":"industrialforegoing:machine_frame_advanced"}},"pattern":["IBI","CXC","ITI"],"result":{"item":"mekanism:chemical_washer"}}).id('galaxtorigenes:lavarropas')


//calentador resistente
event.custom({"type":"mekanism:mek_data","key":{"E":{"item":"mekanism:energy_tablet"},"I":{"tag":"forge:ingots/tin"},"R":{"tag":"forge:dusts/redstone"},"X":{"item":"industrialforegoing:machine_frame_advanced"}},"pattern":["IRI","RXR","IEI"],"result":{"item":"mekanism:resistive_heater"}}).id('galaxtorigenes:hornoalena')


//laser
event.custom({"type":"mekanism:mek_data","key":{"#":{"tag":"forge:gems/diamond"},"A":{"tag":"mekanism:alloys/reinforced"},"E":{"item":"mekanism:energy_tablet"},"X":{"item":"industrialforegoing:machine_frame_advanced"}},"pattern":["AE ","AX#","AE "],"result":{"item":"mekanism:laser"}}).id('galaxtorigenes:laserxd')



//qio drive array
event.custom({"type":"mekanism:mek_data","key":{"#":{"item":'expandedstorage:old_netherite_chest'},"C":{"tag":"forge:circuits/ultimate"},"G":{"tag":"forge:glass_panes"},"I":{"tag":"forge:pellets/polonium"},"T":{"item":"mekanism:teleportation_core"}},"pattern":["IGI","C#C","ITI"],"result":{"item":"mekanism:qio_drive_array"}}).id('galaxyorigenes:qio')

  
   //Infusor Metalurgico
event.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":20,"tag":"mekanism:redstone"},"itemInput":{"ingredient":{"tag":"forge:plates/steel"}},"output":{"count":2,"item":"mekanism:alloy_infused"}}).id('galaxyorigenes:aleacioninfusionada')
event.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":100,"tag":"mekanism:redstone"},"itemInput":{"ingredient":{"tag":"forge:plates/gold"}},"output":{"count":4,"item":"thermal:rf_coil"}}).id('galaxyorigenes:rfcoil')
event.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":1000,"tag":"mekanism:diamond"},"itemInput":{"ingredient":{"item":"create:andesite_casing"}},"output":{"count":3,"item":"thermal:machine_frame"}}).id('galaxyorigenes:machineframetherm')
event.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":40,"tag":"mekanism:redstone"},"itemInput":{"ingredient":{"tag":"forge:plates/osmium"}},"output":{"count":4,"item":"mekanism:basic_control_circuit"}}).id('galaxyorigenes:circuitobasico')

//combinador
event.custom({"type":"mekanism:combining","extraInput":{"ingredient":{"tag":"forge:plates/steel"}},"mainInput":{"ingredient":{"item":"minecraft:leather"}},"output":{"item":"sophisticatedbackpacks:upgrade_base"}}).id('galaxyorigenes:mejorabasicademochila')
event.custom({"type":"mekanism:combining","extraInput":{"ingredient":{"item":"minecraft:heart_of_the_sea"}},"mainInput":{"ingredient":{"item":"thermal_extra:soul_infused_plate"}},"output":{"item":"allthemodium:piglich_heart"}}).id('galaxyorigenes:piglitchhearth')
event.custom({"type":"mekanism:combining","extraInput":{"ingredient":{"item":"minecraft:wither_skeleton_skull"}},"mainInput":{"ingredient":{"item":"minecraft:compass"}},"output":{"item":"hostilenetworks:prediction_matrix"}}).id('galaxyorigenes:predictionmatrix')
event.custom({"type":"mekanism:combining","extraInput":{"ingredient":{"item":'ad_astra:etrionic_capacitor'}},"mainInput":{"ingredient":{"item":"ars_nouveau:starbuncle_charm"}},"output":{"item":"minecraft:dragon_breath"}}).id('galaxyorigenes:dragonaliento')
event.custom({"type":"mekanism:combining","extraInput":{"ingredient":{"amount":4,"item":'ae2:certus_quartz_dust'}},"mainInput":{"ingredient":{"amount":4,"item":'minecraft:sand'}},"output":{"count":5,"item":'ae2:certus_quartz_crystal'}}).id('galaxyorigenes:certus')
  
  


//antimateria
event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":1000,"gas":"mekanism:spent_nuclear_waste"},"output":{"amount":30,"gas":"mekanism:antimatter"},"rightInput":{"amount":1000,"gas":"mekanism:plutonium"}}).id('galaxyorigenes:antimateria')

//reemplazos maquinas carcasa to frame
event.replaceInput({id: 'mekanism:pigment_extractor'}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_advanced')
event.replaceInput({id: 'mekanism:seismic_vibrator'}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_advanced')
event.replaceInput({id: 'mekanism:laser'}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_advanced')
event.replaceInput({id: 'mekanism:chemical_crystallizer'}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_advanced')
event.replaceInput({id: 'mekanism:pigment_mixer'}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_advanced')
event.replaceInput({id: 'mekanism:nutritional_liquifier'}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_advanced')
event.replaceInput({id: 'mekanism:formulaic_assemblicator'}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_advanced')
event.replaceInput({id: 'mekanism:resistive_heater'}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_advanced')
event.replaceInput({id: 'mekanism:antiprotonic_nucleosynthesizer'}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_advanced')
event.replaceInput({id: 'mekanism:teleporter'}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_advanced')
event.replaceInput({id: 'mekanism:modification_station'}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_advanced')
event.replaceInput({id: 'mekanism:superheating_element'}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_advanced')
event.replaceInput({id: 'mekanism:energized_smelter'}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_advanced')
event.replaceInput({id: 'mekanism:chemical_washer'}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_advanced')
event.replaceInput({id: 'mekanism:solar_neutron_activator'}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_advanced')
event.replaceInput({id: 'mekanismgenerators:gas_burning_generator'}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_advanced')
event.replaceInput({id: 'mekanism:security_desk'}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_advanced')
event.replaceInput({id: 'mekanism:osmium_compressor'}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_advanced')
event.replaceInput({id: 'mekanism:chemical_dissolution_chamber'}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_advanced')
event.replaceInput({id: 'mekanism:painting_machine'}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_advanced')
event.replaceInput({id: 'mekanismgenerators:fission_reactor_casing'}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_advanced')
event.replaceInput({id: 'mekanism:fuelwood_heater'}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_advanced')
event.replaceInput({id: 'mekanism:chemical_infuser'}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_advanced')



//trituradora
event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"minecraft:end_stone"}},"output":{"count":2,"item":"occultism:crushed_end_stone"}}).id('galaxtorigenes:crushedendstone')
   



})
