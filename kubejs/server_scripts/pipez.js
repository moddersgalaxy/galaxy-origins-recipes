//pipez By SrNadien
ServerEvents.recipes(event => {


  //eliminadas
  event.remove({output:'pipez:item_pipe'})
  event.remove({output:'pipez:fluid_pipe'})
  event.remove({output:'pipez:energy_pipe'})
  event.remove({output:'pipez:gas_pipe'})
  event.remove({output:'pipez:basic_upgrade'})
  event.remove({output:'pipez:improved_upgrade'})
  event.remove({output:'pipez:advanced_upgrade'})
  event.remove({output:'pipez:ultimate_upgrade'})


 //Tuberias
 event.shaped('8x pipez:item_pipe', [
 'TCQ',
 'ILW',
 'EHP'
], {
 T: '#forge:plates/steel',
 C: '#forge:plates/steel',
 Q: '#forge:plates/steel',
 I: 'minecraft:dropper',
 L: 'minecraft:redstone_block',
 W: 'minecraft:dropper',
 E: '#forge:plates/steel',
 H: '#forge:plates/steel',
 P: '#forge:plates/steel'
}).id('galaxyorigenes:itempipe')


 //fluid pipe
 event.shaped('6x pipez:fluid_pipe', [
 'TCQ',
 'ILW',
 'EHP'
], {
 T: '#forge:plates/steel',
 C: '#forge:plates/steel',
 Q: '#forge:plates/steel',
 I: 'minecraft:bucket',
 L: 'minecraft:redstone_block',
 W: 'minecraft:bucket',
 E: '#forge:plates/steel',
 H: '#forge:plates/steel',
 P: '#forge:plates/steel'
}).id('galaxyorigenes:fluidpipe')


 //energy pipe
 event.shaped('8x pipez:energy_pipe', [
 'TCQ',
 'ILW',
 'EHP'
], {
 T: '#forge:plates/steel',
 C: '#forge:plates/steel',
 Q: '#forge:plates/steel',
 I: '#forge:ingots/steel',
 L: '#forge:ingots/steel',
 W: '#forge:ingots/steel',
 E: '#forge:plates/steel',
 H: '#forge:plates/steel',
 P: '#forge:plates/steel'
}).id('galaxyorigenes:energypipe')


 // gas pipe
 event.shaped('8x pipez:gas_pipe', [
 'TCQ',
 'ILW',
 'EHP'
], {
 T: '#forge:plates/steel',
 C: '#forge:plates/steel',
 Q: '#forge:plates/steel',
 I: 'mekanism:alloy_infused',
 L: 'minecraft:redstone_block',
 W: 'mekanism:alloy_infused',
 E: '#forge:plates/steel',
 H: '#forge:plates/steel',
 P: '#forge:plates/steel'
}).id('galaxyorigenes:gaspipe')

//Iron upgrade
 event.shaped('pipez:basic_upgrade', [
 'TCQ',
 'ILW',
 'EHP'
], {
 T: '#forge:plates/steel',
 C: '#forge:nuggets/steel',
 Q: '#forge:plates/steel',
 I: '#forge:nuggets/steel',
 L: 'minecraft:redstone_block',
 W: '#forge:nuggets/steel',
 E: '#forge:plates/steel',
 H: '#forge:nuggets/steel',
 P: '#forge:plates/steel'
}).id('galaxyorigenes:basicupgrade')

 //Gold Upgrade
 event.shaped('pipez:improved_upgrade', [
 'TCQ',
 'ILW',
 'EHP'
], {
 T: '#forge:plates/gold',
 C: 'minecraft:redstone_block',
 Q: '#forge:plates/gold',
 I: 'minecraft:redstone_block',
 L: 'pipez:basic_upgrade',
 W: 'minecraft:redstone_block',
 E: '#forge:plates/gold',
 H: 'minecraft:redstone_block',
 P: '#forge:plates/gold'
}).id('galaxyorigenes:improvedupgrade')

 //Diamond Upgrade
 event.shaped('pipez:advanced_upgrade', [
 'TCQ',
 'ILW',
 'EHP'
], {
 T: '#forge:plates/diamond',
 C: 'minecraft:redstone_block',
 Q: '#forge:plates/diamond',
 I: 'minecraft:redstone_block',
 L: 'pipez:improved_upgrade',
 W: 'minecraft:redstone_block',
 E: '#forge:plates/diamond',
 H: 'minecraft:redstone_block',
 P: '#forge:plates/diamond'
}).id('galaxyorigenes:advancedupgrade')

 //Netherite upgrade
 event.shaped('pipez:ultimate_upgrade', [
 'TCQ',
 'ILW',
 'EHP'
], {
 T: '#forge:plates/netherite',
 C: 'minecraft:redstone_block',
 Q: '#forge:plates/netherite',
 I: 'minecraft:redstone_block',
 L: 'pipez:advanced_upgrade',
 W: 'minecraft:redstone_block',
 E: '#forge:plates/netherite',
 H: 'minecraft:redstone_block',
 P: '#forge:plates/netherite'
}).id('galaxyorigenes:ultimateupgrade')


//wrench
event.replaceInput({id: 'pipez:wrench'}, 'minecraft:flint', '#forge:ingots/lead')

})