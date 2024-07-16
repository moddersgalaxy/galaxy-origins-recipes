//cofres By SrNadien
ServerEvents.recipes(event => {
	
	
	
	  //eliminar
	  event.remove({output:'expandedstorage:iron_chest'})
    event.remove({output:'expandedstorage:gold_chest'})
    event.remove({output:'expandedstorage:diamond_chest'})
    event.remove({output:'expandedstorage:obsidian_chest'})
    event.remove({output:'expandedstorage:pumpkin_chest'})
    event.remove({output:'expandedstorage:present'})
    event.remove({output:'expandedstorage:bamboo_chest'})
    event.remove({output:'expandedstorage:moss_chest'})
	  event.remove({output:'expandedstorage:netherite_chest'})
    event.remove({output:'expandedstorage:old_iron_chest'})
    event.remove({output:'expandedstorage:old_gold_chest'})
    event.remove({output:'expandedstorage:old_diamond_chest'})
    event.remove({output:'expandedstorage:old_obsidian_chest'})
    event.remove({output:'expandedstorage:old_netherite_chest'})
	  event.remove({ output: 'expandedstorage:wood_to_iron_conversion_kit' })
    event.remove({ output: 'expandedstorage:wood_to_gold_conversion_kit' })
    event.remove({ output: 'expandedstorage:wood_to_diamond_conversion_kit' })
    event.remove({ output: 'expandedstorage:wood_to_obsidian_conversion_kit' })
    event.remove({ output: 'expandedstorage:wood_to_netherite_conversion_kit' })
    event.remove({ output: 'expandedstorage:copper_to_iron_conversion_kit' })
    event.remove({ output: 'expandedstorage:copper_to_gold_conversion_kit' })
	  event.remove({ output: 'expandedstorage:copper_to_gold_conversion_kit' })
    event.remove({ output: 'expandedstorage:copper_to_obsidian_conversion_kit' })
    event.remove({ output: 'expandedstorage:copper_to_netherite_conversion_kit' })
    event.remove({ output: 'expandedstorage:iron_to_gold_conversion_kit' })
    event.remove({ output: 'expandedstorage:iron_to_diamond_conversion_kit' })
    event.remove({ output: 'expandedstorage:iron_to_obsidian_conversion_kit' })
    event.remove({ output: 'expandedstorage:iron_to_netherite_conversion_kit' })
	  event.remove({ output: 'expandedstorage:gold_to_diamond_conversion_kit' })
    event.remove({ output: 'expandedstorage:gold_to_obsidian_conversion_kit' })
    event.remove({ output: 'expandedstorage:gold_to_netherite_conversion_kit' })
    event.remove({ output: 'expandedstorage:diamond_to_obsidian_conversion_kit' })
    event.remove({ output: 'expandedstorage:obsidian_to_netherite_conversion_kit' })
    event.remove({ output: 'expandedstorage:iron_barrel' })
    event.remove({ output: 'expandedstorage:gold_barrel' })
    event.remove({ output: 'expandedstorage:diamond_barrel' })
    event.remove({ output: 'expandedstorage:obsidian_barrel' })
    event.remove({ output: 'expandedstorage:netherite_barrel' })
    event.remove({ output: 'expandedstorage:copper_barrel' })
	
	
     //cofre De Hierro
	 event.shaped('expandedstorage:old_iron_chest', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: '#forge:plates/iron',
    C: '#forge:plates/iron',
    Q: '#forge:plates/iron',
    I: '#forge:plates/iron',
    L: 'expandedstorage:old_wood_chest',
    W: '#forge:plates/iron',
    E: '#forge:plates/iron',
    H: '#forge:plates/iron',
    P: '#forge:plates/iron'
  });
  
  
    //cofre de oro
    event.shaped('expandedstorage:old_gold_chest', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: '#forge:plates/gold',
    C: '#forge:plates/gold',
    Q: '#forge:plates/gold',
    I: '#forge:plates/gold',
    L: 'expandedstorage:old_iron_chest',
    W: '#forge:plates/gold',
    E: '#forge:plates/gold',
    H: '#forge:plates/gold',
    P: '#forge:plates/gold'
  });
  
    //cofre de diamante
    event.shaped('expandedstorage:old_diamond_chest', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: '#forge:plates/diamond',
    C: '#forge:plates/diamond',
    Q: '#forge:plates/diamond',
    I: '#forge:plates/diamond',
    L: 'expandedstorage:old_gold_chest',
    W: '#forge:plates/diamond',
    E: '#forge:plates/diamond',
    H: '#forge:plates/diamond',
    P: '#forge:plates/diamond'
  });
  
    //cofre de obsiana 
	event.shaped('expandedstorage:old_obsidian_chest', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'mekanism:ingot_refined_obsidian',
    C: 'mekanism:ingot_refined_obsidian',
    Q: 'mekanism:ingot_refined_obsidian',
    I: 'mekanism:ingot_refined_obsidian',
    L: 'expandedstorage:old_diamond_chest',
    W: 'mekanism:ingot_refined_obsidian',
    E: 'mekanism:ingot_refined_obsidian',
    H: 'mekanism:ingot_refined_obsidian',
    P: 'mekanism:ingot_refined_obsidian'
  });
  
    //cofre de netherita
    event.shaped('expandedstorage:old_netherite_chest', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: '#forge:plates/netherite',
    C: '#forge:plates/netherite',
    Q: '#forge:plates/netherite',
    I: '#forge:plates/netherite',
    L: 'expandedstorage:old_obsidian_chest',
    W: '#forge:plates/netherite',
    E: '#forge:plates/netherite',
    H: '#forge:plates/netherite',
    P: '#forge:plates/netherite'
  });




//barriles



 //barril De Hierro
 event.shaped('expandedstorage:iron_barrel', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: '#forge:plates/iron',
  C: '#forge:plates/iron',
  Q: '#forge:plates/iron',
  I: '#forge:plates/iron',
  L: 'minecraft:barrel',
  W: '#forge:plates/iron',
  E: '#forge:plates/iron',
  H: '#forge:plates/iron',
  P: '#forge:plates/iron'
}).id('galaxyorigenes:barrildehierro')


  //barril de oro
  event.shaped('expandedstorage:gold_barrel', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: '#forge:plates/gold',
  C: '#forge:plates/gold',
  Q: '#forge:plates/gold',
  I: '#forge:plates/gold',
  L: 'expandedstorage:iron_barrel',
  W: '#forge:plates/gold',
  E: '#forge:plates/gold',
  H: '#forge:plates/gold',
  P: '#forge:plates/gold'
}).id('galaxyorigenes:barrildeoro')

  //barril de diamante
  event.shaped('expandedstorage:diamond_barrel', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: '#forge:plates/diamond',
  C: '#forge:plates/diamond',
  Q: '#forge:plates/diamond',
  I: '#forge:plates/diamond',
  L: 'expandedstorage:gold_barrel',
  W: '#forge:plates/diamond',
  E: '#forge:plates/diamond',
  H: '#forge:plates/diamond',
  P: '#forge:plates/diamond'
}).id('galaxyorigenes:barrildediamante')

  //barril de obsidiana 
event.shaped('expandedstorage:obsidian_barrel', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: 'mekanism:ingot_refined_obsidian',
  C: 'mekanism:ingot_refined_obsidian',
  Q: 'mekanism:ingot_refined_obsidian',
  I: 'mekanism:ingot_refined_obsidian',
  L: 'expandedstorage:diamond_barrel',
  W: 'mekanism:ingot_refined_obsidian',
  E: 'mekanism:ingot_refined_obsidian',
  H: 'mekanism:ingot_refined_obsidian',
  P: 'mekanism:ingot_refined_obsidian'
}).id('galaxyorigenes:barrildeobsidiana')

  //barril de netherita
  event.shaped('expandedstorage:netherite_barrel', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: '#forge:plates/netherite',
  C: '#forge:plates/netherite',
  Q: '#forge:plates/netherite',
  I: '#forge:plates/netherite',
  L: 'expandedstorage:obsidian_barrel',
  W: '#forge:plates/netherite',
  E: '#forge:plates/netherite',
  H: '#forge:plates/netherite',
  P: '#forge:plates/netherite'
}).id('galaxyorigenes:barrildenetherite')







})