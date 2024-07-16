ServerEvents.recipes(event => {
	event.remove({output: ['extendedcrafting:black_iron_slate', 'extendedcrafting:black_iron_ingot']})



//black iron slate


event.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'extendedcrafting:black_iron_slate',"count": 8},"input":{"item":'extendedcrafting:black_iron_ingot'},"energy":2400}).id('galaxyorigenes:black_iron_slate')

//black iron ingot
event.custom({
	"type": "nuclearcraft:alloy_smelter",
	"input": [
	  {
		"count": 1,
		"item": 'immersiveengineering:coal_coke'
	  },
	  {
		"item": 'nuclearcraft:tough_alloy_ingot'
	  }
	],
	"output": [
	  {
		"count": 8,
		"item": "extendedcrafting:black_iron_ingot"
	  }
	],
	"powerModifier": 1.0,
	"radiation": 0.0,
	"timeModifier": 1.5
  }).id('galaxyorigenes:blackironingot')


})