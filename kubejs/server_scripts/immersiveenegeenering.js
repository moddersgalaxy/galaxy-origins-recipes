//items desabilitados By SrNadien
ServerEvents.recipes(event => {

    event.remove({output: ['immersiveengineering:heavy_engineering', 'immersiveengineering:light_engineering']})



//bloque pesado de ingieneria
event.custom({"type":"minecraft:crafting_shaped","pattern":["igi","geg","igi"],"key":{"i":{"tag":"forge:sheetmetals/steel"},"e":{"item":'mekanism_extras:absolute_control_circuit'},"g":{"item":"immersiveengineering:component_steel"}},"result":{"item":"immersiveengineering:heavy_engineering","count":2}}).id('galaxyorigins:heavyengineering')


//bloque de ingieneria pesada
event.custom({"type":"minecraft:crafting_shaped","pattern":["igi","gcg","igi"],"key":{"i":{"tag":"forge:sheetmetals/iron"},"c":{"item":'mekanism_extras:absolute_control_circuit'},"g":{"item":"immersiveengineering:component_iron"}},"result":{"item":"immersiveengineering:light_engineering","count":2}}).id('galaxyorigins:lightengineering')




//dragon steel plate
event.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'thermal_extra:dragonsteel_plate'},"conditions":[{"value":{"tag":'forge:ingots/dragonsteel',"type":"forge:tag_empty"},"type":"forge:not"},{"value":{"tag":'forge:plates/dragonsteel',"type":"forge:tag_empty"},"type":"forge:not"}],"input":{"tag":'forge:ingots/dragonsteel'},"energy":2400}).id('galaxyorigenes:dragonsteelcompatplate')

//twine plate
event.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'thermal_extra:twinite_plate'},"conditions":[{"value":{"tag":'forge:ingots/twinite',"type":"forge:tag_empty"},"type":"forge:not"},{"value":{"tag":'forge:plates/twinite',"type":"forge:tag_empty"},"type":"forge:not"}],"input":{"tag":'forge:ingots/twinite'},"energy":2400}).id('galaxyorigenes:twinecompatplate')

//shellite plate
event.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'thermal_extra:shellite_plate'},"conditions":[{"value":{"tag":'forge:ingots/shellite',"type":"forge:tag_empty"},"type":"forge:not"},{"value":{"tag":'forge:plates/shellite',"type":"forge:tag_empty"},"type":"forge:not"}],"input":{"tag":'forge:ingots/shellite'},"energy":2400}).id('galaxyorigenes:sellitecompatplate')

//soul infused plate
event.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'thermal_extra:soul_infused_plate'},"conditions":[{"value":{"tag":'forge:ingots/soul_infused',"type":"forge:tag_empty"},"type":"forge:not"},{"value":{"tag":'forge:plates/soul_infused',"type":"forge:tag_empty"},"type":"forge:not"}],"input":{"tag":'forge:ingots/soul_infused'},"energy":2400}).id('galaxyorigenes:')

//enderium plate
event.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'thermal:enderium_plate'},"conditions":[{"value":{"tag":'forge:ingots/enderium',"type":"forge:tag_empty"},"type":"forge:not"},{"value":{"tag":'forge:plates/enderium',"type":"forge:tag_empty"},"type":"forge:not"}],"input":{"tag":'forge:ingots/enderium'},"energy":2400}).id('galaxyorigenes:enderiumcompatplate')

//lumium plate
event.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'thermal:lumium_plate'},"conditions":[{"value":{"tag":'forge:ingots/lumium',"type":"forge:tag_empty"},"type":"forge:not"},{"value":{"tag":'forge:plates/lumium',"type":"forge:tag_empty"},"type":"forge:not"}],"input":{"tag":'forge:ingots/lumium'},"energy":2400}).id('galaxyorigenes:lumiumcompatplates')

//signalum plate
event.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'thermal:signalum_plate'},"conditions":[{"value":{"tag":'forge:ingots/signalum',"type":"forge:tag_empty"},"type":"forge:not"},{"value":{"tag":'forge:plates/signalum',"type":"forge:tag_empty"},"type":"forge:not"}],"input":{"tag":'forge:ingots/signalum'},"energy":2400}).id('galaxyorigenes:signalumcompatplate')

//netherite plate
event.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'thermal:netherite_plate'},"conditions":[{"value":{"tag":'forge:ingots/netherite',"type":"forge:tag_empty"},"type":"forge:not"},{"value":{"tag":'forge:plates/netherite',"type":"forge:tag_empty"},"type":"forge:not"}],"input":{"tag":'forge:ingots/netherite'},"energy":2400}).id('galaxyorigenes:netheritecompatplate')

//iridium plate
event.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'alltheores:iridium_plate'},"conditions":[{"value":{"tag":'forge:ingots/iridium',"type":"forge:tag_empty"},"type":"forge:not"},{"value":{"tag":'forge:plates/iridium',"type":"forge:tag_empty"},"type":"forge:not"}],"input":{"tag":'forge:ingots/iridium'},"energy":2400}).id('galaxyorigenes:iridiumcompatplate')

//diamond plate
event.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'alltheores:diamond_plate'},"conditions":[{"value":{"tag":'forge:gems/diamond',"type":"forge:tag_empty"},"type":"forge:not"},{"value":{"tag":'forge:plates/diamond',"type":"forge:tag_empty"},"type":"forge:not"}],"input":{"tag":'forge:gems/diamond'},"energy":2400}).id('galaxyorigenes:diamondcompatplate')


//custom alloy additions
event.custom({"type":"immersiveengineering:refinery","catalyst":{"tag":"forge:ingots/steel"},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_steel"}})
event.custom({"type":"immersiveengineering:refinery","catalyst":{"tag":"forge:ingots/copper"},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_copper"}})
event.custom({"type":"immersiveengineering:refinery","catalyst":{"tag":"forge:ingots/brass"},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_brass"}})
event.custom({"type":"immersiveengineering:mixer","energy":3200,"fluid":{"amount":1000,"tag":"minecraft:lava"},"inputs":[{"base_ingredient":{"item":"minecraft:coal"},"count":4},{"item":"minecraft:iron_ingot","count":2},{"item":"minecraft:amethyst_shard"}],"result":{"amount":250,"fluid":"kubejs:wrought_iron"}})
event.custom({"type":"immersiveengineering:refinery","catalyst":{"tag":"forge:ingots/steel"},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_steel"}})
event.custom({"type":"immersiveengineering:refinery","catalyst":{"tag":"forge:ingots/copper"},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_copper"}})
event.custom({"type":"immersiveengineering:refinery","catalyst":{"tag":"forge:ingots/brass"},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_brass"}})
event.custom({"type":"immersiveengineering:mixer","energy":3200,"fluid":{"amount":1000,"tag":"minecraft:lava"},"inputs":[{"base_ingredient":{"item":"minecraft:coal"},"count":4},{"item":"minecraft:iron_ingot","count":2},{"item":"minecraft:amethyst_shard"}],"result":{"amount":250,"fluid":"kubejs:wrought_iron"}})





})
