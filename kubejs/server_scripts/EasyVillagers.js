ServerEvents.recipes(event => {
	event.remove({output: ['easy_piglins:barterer', 'easy_villagers:auto_trader', 'easy_villagers:incubator', 'easy_villagers:farmer', 'easy_villagers:trader', 'easy_villagers:converter', 'easy_villagers:breeder', 'easy_villagers:iron_farm']})
   event.custom({
  "type": "extendedcrafting:shaped_table",
   tier: 1,
  "pattern": [
    "AAA",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "thermal:signalum_glass"
    },
    "B": {
      "item": "minecraft:gold_block"
    },
    "C": {
      "item": "avaritia:crystal_matrix_ingot"
    },
    "D": {
      "item": 'nuclearcraft:basic_electric_circuit'
    }
  },
  "result": {
    "item": 'easy_piglins:barterer',
    "count": 1
  },
});

   event.custom({
  "type": "extendedcrafting:shaped_table",
   tier: 1,
  "pattern": [
    "AAA",
    "A A",
    "BBB"
  ],
  "key": {
    "A": {
      "item": "thermal:signalum_glass"
    },
    "B": {
      "item": "avaritia:crystal_matrix_ingot"
    }
  },
  "result": {
    "item": 'easy_villagers:trader',
    "count": 1
  },
});

   event.custom({
  "type": "extendedcrafting:shaped_table",
   tier: 1,
  "pattern": [
    "AAA",
    "A A",
    "BCB"
  ],
  "key": {
    "A": {
      "item": "thermal:signalum_glass"
    },
    "B": {
      "item": "avaritia:crystal_matrix_ingot"
    },
    "C": {
      "item": "minecraft:netherite_ingot"
    }
  },
  "result": {
    "item": 'easy_villagers:auto_trader',
    "count": 1
  },
});

   event.custom({
  "type": "extendedcrafting:shaped_table",
   tier: 1,
  "pattern": [
    "AAA",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "thermal:signalum_glass"
    },
    "B": {
      "item": "minecraft:water_bucket"
    },
    "C": {
      "item": "avaritia:crystal_matrix_ingot"
    },
    "D": {
      "item": "allthecompressed:dirt_4x"
    }
  },
  "result": {
    "item": 'easy_villagers:farmer',
    "count": 1
  },
});

   event.custom({
  "type": "extendedcrafting:shaped_table",
   tier: 1,
  "pattern": [
    "AAA",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "thermal:signalum_glass"
    },
    "B": {
      "item": "minecraft:white_bed"
    },
    "C": {
      "item": "avaritia:crystal_matrix_ingot"
    },
    "D": {
      "item": "ars_nouveau:red_archwood_log"
    }
  },
  "result": {
    "item": 'easy_villagers:breeder',
    "count": 1
  },
});

   event.custom({
  "type": "extendedcrafting:shaped_table",
   tier: 1,
  "pattern": [
    "AAA",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "thermal:signalum_glass"
    },
    "B": {
      "item": "forbidden_arcanus:rotten_leather"
    },
    "C": {
      "item": "avaritia:crystal_matrix_ingot"
    },
    "D": {
      "item": "minecraft:mossy_cobblestone"
    }
  },
  "result": {
    "item": 'easy_villagers:converter',
    "count": 1
  },
});

   event.custom({
  "type": "extendedcrafting:shaped_table",
   tier: 1,
  "pattern": [
    "AAA",
    "A A",
    "BCB"
  ],
  "key": {
    "A": {
      "item": "thermal:signalum_glass"
    },
    "B": {
      "item": "avaritia:crystal_matrix_ingot"
    },
    "C": {
      "item": "pneumaticcraft:compressed_iron_block"
    }
  },
  "result": {
    "item": 'easy_villagers:incubator',
    "count": 1
  },
});

   event.custom({
  "type": "extendedcrafting:shaped_table",
   tier: 1,
  "pattern": [
    "AAA",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "thermal:signalum_glass"
    },
    "B": {
      "item": "minecraft:lava_bucket"
    },
    "C": {
      "item": "avaritia:crystal_matrix_ingot"
    },
    "D": {
      "item": "allthecompressed:stone_4x"
    }
  },
  "result": {
    "item": 'easy_villagers:iron_farm',
    "count": 1
  },
});
})