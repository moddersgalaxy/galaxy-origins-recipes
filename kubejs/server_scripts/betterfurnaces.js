//ironfurnaces By SrNadien 
ServerEvents.recipes(event => {



    //eliminadas
	event.remove({output:'betterfurnacesreforged:iron_furnace'})
    event.remove({output:'betterfurnacesreforged:gold_furnace'})
	  event.remove({output:'betterfurnacesreforged:diamond_furnace'})
    event.remove({output:'betterfurnacesreforged:netherhot_furnace'})
    event.remove({output:'betterfurnacesreforged:extreme_furnace'})
    event.remove({output:'betterfurnacesreforged:extreme_forge'})
    event.remove({output:'betterfurnacesreforged:cobblestone_generator'})
    event.remove({output:'betterfurnacesreforged:fuel_verifier'})
	  event.remove({ output: 'betterfurnacesreforged:iron_upgrade' })
    event.remove({ output: 'betterfurnacesreforged:gold_upgrade' })
	  event.remove({ output: 'betterfurnacesreforged:diamond_upgrade' })
    event.remove({ output: 'betterfurnacesreforged:netherhot_upgrade' })
    event.remove({ output: 'betterfurnacesreforged:extreme_upgrade' })
    event.remove({ output: 'betterfurnacesreforged:copper_upgrade' })
    event.remove({ output: 'betterfurnacesreforged:copper_iron_upgrade' })
    event.remove({ output: 'betterfurnacesreforged:steel_upgrade' })
    event.remove({ output: 'betterfurnacesreforged:steel_gold_upgrade' })
    event.remove({ output: 'betterfurnacesreforged:amethyst_upgrade' })
    event.remove({ output: 'betterfurnacesreforged:amethyst_diamond_upgrade' })
    event.remove({ output: 'betterfurnacesreforged:platinum_upgrade' })
    event.remove({ output: 'betterfurnacesreforged:platinum_netherhot_upgrade' })
    event.remove({ output: 'betterfurnacesreforged:ultimate_upgrade' })
    event.remove({ output: 'betterfurnacesreforged:copper_furnace' })
    event.remove({ output: 'nethersdelight:blackstone_furnace' })
    event.remove({ output: 'nethersdelight:blackstone_blast_furnace' })


    //Horno de hierro
	event.custom({
    "type": "extendedcrafting:shaped_table",
    "tier": 2,
    "pattern": [
      "AAAAA",
      "ABCBA",
      "ABDBA",
      "ABBBA",
      "AAAAA"
    ],
    "key": {
      "A": {
        "item": "create:iron_sheet"
      },
      "B": {
        "item": "minecraft:smooth_stone"
      },
      "C": {
        "item": "betterfurnacesreforged:iron_conductor_block"
      },
      "D": {
        "item": "minecraft:furnace"
      }
    },
    "result": {
      "item": 'betterfurnacesreforged:iron_furnace',
      "count": 1
    },
  });

//horno de oro
event.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 2,
  "pattern": [
    "AAAAA",
    "ABCBA",
    "ABDBA",
    "ABCBA",
    "AAAAA"
  ],
  "key": {
    "A": {
      "item": "create:golden_sheet"
    },
    "B": {
      "item": "minecraft:smooth_stone"
    },
    "C": {
      "item": "betterfurnacesreforged:gold_conductor_block"
    },
    "D": {
      "item": "betterfurnacesreforged:iron_furnace"
    }
  },
  "result": {
    "item": 'betterfurnacesreforged:gold_furnace',
    "count": 1
  },
});



//horno de diamante
event.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 2,
  "pattern": [
    "AAAAA",
    "ABCBA",
    "ABDBA",
    "ABEBA",
    "AAAAA"
  ],
  "key": {
    "A": {
      "item": "thermal:silver_plate"
    },
    "B": {
      "item": "minecraft:smooth_stone"
    },
    "C": {
      "item": "betterfurnacesreforged:iron_conductor_block"
    },
    "D": {
      "item": "betterfurnacesreforged:gold_furnace"
    },
    "E": {
      "item": "betterfurnacesreforged:gold_conductor_block"
    }
  },
  "result": {
    "item": 'betterfurnacesreforged:diamond_furnace',
    "count": 1
  },
});




//horno del inframundo
event.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 2,
  "pattern": [
    "AAAAA",
    "ABCBA",
    "ABDBA",
    "ABCBA",
    "AAAAA"
  ],
  "key": {
    "A": {
      "item": "thermal:signalum_plate"
    },
    "B": {
      "item": "minecraft:smooth_stone"
    },
    "C": {
      "item": "betterfurnacesreforged:netherhot_conductor_block"
    },
    "D": {
      "item": "betterfurnacesreforged:diamond_furnace"
    }
  },
  "result": {
    "item": 'betterfurnacesreforged:netherhot_furnace',
    "count": 1
  },
});


//horno extremo
event.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 2,
  "pattern": [
    "AAAAA",
    "ABCBA",
    "ACDCA",
    "ABCBA",
    "AEEEA"
  ],
  "key": {
    "A": {
      "item": "minecraft:coal_block"
    },
    "B": {
      "item": "minecraft:end_stone"
    },
    "C": {
      "item": "minecraft:end_crystal"
    },
    "D": {
      "item": "betterfurnacesreforged:netherhot_furnace"
    },
    "E": {
      "item": "thermal:netherite_plate"
    }
  },
  "result": {
    "item": 'betterfurnacesreforged:extreme_furnace',
    "count": 1
  },
});



//forja extrema
event.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 2,
  "pattern": [
    "AAAAA",
    "ABCBA",
    "ACDCA",
    "ABEBA",
    "AAAAA"
  ],
  "key": {
    "A": {
      "item": "thermal:enderium_plate"
    },
    "B": {
      "item": "minecraft:netherite_ingot"
    },
    "C": {
      "item": "betterfurnacesreforged:netherhot_conductor_block"
    },
    "D": {
      "item": "betterfurnacesreforged:extreme_furnace"
    },
    "E": {
      "item": "minecraft:soul_sand"
    }
  },
  "result": {
    "item": 'betterfurnacesreforged:extreme_forge'
  },
});


//Horno de cobre
event.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 2,
  "pattern": [
    "AAAAA",
    "ABCBA",
    "ABDBA",
    "ABBBA",
    "AAAAA"
  ],
  "key": {
    "A": {
      "item": "create:copper_sheet"
    },
    "B": {
      "item": "minecraft:smooth_stone"
    },
    "C": {
      "item": "betterfurnacesreforged:iron_conductor_block"
    },
    "D": {
      "item": "minecraft:furnace"
    }
  },
  "result": {
    "item": 'betterfurnacesreforged:copper_furnace',
    "count": 1
  },
});



})
