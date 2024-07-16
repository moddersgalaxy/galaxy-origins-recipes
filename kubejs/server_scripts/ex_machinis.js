//exmachinis By SrNadien
ServerEvents.recipes(event => {
	
	
	
	//eliminadas
    event.remove({output:'exmachinis:gold_upgrade'})
    event.remove({output:'exnihilosequentia:string_mesh'})
	  event.remove({output:'exmachinis:gold_upgrade'})
	  event.remove({output:'exmachinis:netherite_upgrade'})
	  event.remove({output:'exmachinis:diamond_upgrade'})
    event.remove({output:'exmachinis:flux_sieve'})
    event.remove({output:'exmachinis:flux_hammer'})
    event.remove({output:'exmachinis:flux_compactor'})
	
	
	//gold upgrade
	event.shaped('exmachinis:gold_upgrade', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'industrialforegoing:pink_slime_ingot',
    C: 'minecraft:nautilus_shell',
    Q: 'industrialforegoing:pink_slime_ingot',
    I: 'minecraft:tinted_glass',
    L: 'minecraft:gold_block',
    W: 'minecraft:tinted_glass',
    E: 'minecraft:tinted_glass',
    H: 'minecraft:tinted_glass',
    P: 'minecraft:tinted_glass'
  }).id('galaxtorigenes:goldupgrade')
  
  
    //Diamond Upgrade
    event.shaped('exmachinis:diamond_upgrade', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'immersiveengineering:ingot_hop_graphite',
    C: 'exmachinis:gold_upgrade',
    Q: 'immersiveengineering:ingot_hop_graphite',
    I: 'minecraft:diamond',
    L: 'exmachinis:gold_upgrade',
    W: 'minecraft:diamond',
    E: 'immersiveengineering:ingot_hop_graphite',
    H: 'exmachinis:gold_upgrade',
    P: 'immersiveengineering:ingot_hop_graphite'
  }).id('galaxtorigenes:diamondupgrade')
  
    //Netherite upgrade
    event.shaped('exmachinis:netherite_upgrade', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'minecraft:netherite_block',
    C: 'exmachinis:diamond_upgrade',
    Q: 'minecraft:netherite_block',
    I: 'minecraft:netherite_ingot',
    L: 'exmachinis:diamond_upgrade',
    W: 'minecraft:netherite_ingot',
    E: 'minecraft:netherite_block',
    H: 'exmachinis:diamond_upgrade',
    P: 'minecraft:netherite_block'
  }).id('galaxtorigenes:netheriteupgrade')
	
	
	//String Mesh
    event.shaped('exnihilosequentia:string_mesh', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'minecraft:cobweb',
    C: 'minecraft:cobweb',
    Q: 'minecraft:cobweb',
    I: 'minecraft:cobweb',
    L: 'minecraft:cobweb',
    W: 'minecraft:cobweb',
    E: 'minecraft:cobweb',
    H: 'minecraft:cobweb',
    P: 'minecraft:cobweb'
  }).id('galaxtorigenes:stringmesh')


//flux sieve
event.shaped('exmachinis:flux_sieve', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: 'minecraft:iron_bars',
  C: 'minecraft:iron_bars',
  Q: 'minecraft:iron_bars',
  I: 'minecraft:iron_bars',
  L: 'exnihilosequentia:oak_sieve',
  W: 'minecraft:iron_bars',
  E: '#forge:storage_blocks/steel',
  H: 'minecraft:hopper',
  P: '#forge:storage_blocks/steel'
}).id('galaxtorigenes:fluxsieve')


  //flux hammer
  event.shaped('exmachinis:flux_hammer', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: 'minecraft:glass_pane',
  C: 'minecraft:glass_pane',
  Q: 'minecraft:glass_pane',
  I: 'minecraft:glass_pane',
  L: 'exnihilosequentia:netherite_hammer',
  W: 'minecraft:glass_pane',
  E: '#forge:storage_blocks/steel',
  H: 'minecraft:hopper',
  P: '#forge:storage_blocks/steel'
}).id('galaxtorigenes:fluxhammer')

//flux compactor
event.shaped('exmachinis:flux_compactor', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: 'immersiveengineering:ingot_hop_graphite',
  C: '#forge:ingots/enhanced_ender_ingot',
  Q: 'immersiveengineering:ingot_hop_graphite',
  I: '#forge:ingots/enhanced_ender_ingot',
  L: 'extendedcrafting:flux_star',
  W: '#forge:ingots/enhanced_ender_ingot',
  E: 'immersiveengineering:ingot_hop_graphite',
  H: '#forge:ingots/enhanced_ender_ingot',
  P: 'immersiveengineering:ingot_hop_graphite'
}).id('galaxtorigenes:fluxcompactor')
  })