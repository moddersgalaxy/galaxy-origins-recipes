//ender stirage by SrNadien
ServerEvents.recipes(event => {
	
	//eliminadas
	event.remove({output:'enderstorage:ender_chest'})
  event.remove({output:'enderstorage:ender_tank'})
	event.remove({output:'enderstorage:ender_pouch'})
	
	
	//ender chest
	event.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 1,
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:blaze_rod"
    },
    "B": {
      "item": "allthecompressed:obsidian_1x"
    },
    "C": {
      "item": "minecraft:ender_chest"
    }
  },
  "result": {
    "item": 'enderstorage:ender_chest',
    "count": 1
  },
}).id('galaxyorigenes:enderchest')
	
    //ender tank
	event.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 1,
  "pattern": [
    "ABA",
    "CDE",
    "AFA"
  ],
  "key": {
    "A": {
      "item": "allthecompressed:obsidian_1x"
    },
    "B": {
      "item": "minecraft:cauldron"
    },
    "C": {
      "item": "enderstorage:ender_pouch"
    },
    "D": {
      "type": "forge:nbt",
      "item": "mekanism:ultimate_fluid_tank",
      "count": 1,
      "nbt": "{BlockEntityTag:{FluidTanks:[{Tank:0b,stored:{Amount:256000,FluidName:\"minecraft:water\"}}],ForgeCaps:{},Items:[],activeState:0b,componentFrequency:{Security:{name:\"Security\",owner:[I;2118518208,-1698609149,-1383017808,204096419],publicFreq:1b}},componentSecurity:{owner:[I;2118518208,-1698609149,-1383017808,204096419],securityMode:0},currentRedstone:15,editMode:0,id:\"mekanism:ultimate_fluid_tank\",redstone:0b,updateDelay:0},display:{Lore:[\u0027\"(+NBT)\"\u0027]},mekData:{FluidTanks:[{Tank:0b,stored:{Amount:256000,FluidName:\"minecraft:water\"}}],bucketMode:1b,editMode:0,owner:[I;2118518208,-1698609149,-1383017808,204096419]}}"
    },
    "E": {
      "item": "enderstorage:ender_chest"
    },
    "F": {
      "item": "minecraft:bucket"
    }
  },
  "result": {
    "item": 'enderstorage:ender_tank',
    "count": 1
  },
}).id('galaxyorigenes:endertank')


     //ender pouch
	 event.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 1,
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "ae2:ender_dust"
    },
    "B": {
      "item": "minecraft:leather"
    },
    "C": {
      "item": 'sophisticatedbackpacks:netherite_backpack'
    },
    "D": {
      "item": "allthecompressed:obsidian_1x"
    }
  },
  "result": {
    "item": 'enderstorage:ender_pouch',
    "count": 1
  },
}).id('galaxyorigenes:enderpouch')
})