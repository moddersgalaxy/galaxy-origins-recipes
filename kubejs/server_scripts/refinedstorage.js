ServerEvents.recipes(event => {
  event.remove({ id: "refinedstorage:raw_basic_processor" });
  event.remove({ id: "refinedstorage:raw_improved_processor" });
  event.remove({ id: "refinedstorage:raw_advanced_processor" });
  event.remove({ id: "thermal:compat/refinedstorage/smelter_refinedstorage_alloy_quartz_enriched_iron" });
  event.remove({ output: ["refinedstorage:processor_binding", "refinedstorage:1k_storage_block", "refinedstorage:4k_storage_block", "refinedstorage:16k_storage_block", "refinedstorage:64k_storage_block", "refinedstorage:crafter", "refinedstorage:quartz_enriched_iron", "refinedstorage:pattern", "refinedstorage:quartz_enriched_iron", "refinedstorage:cable", "refinedstorage:exporter", "refinedstorage:importer", "refinedstorage:external_storage", "refinedstorage:destructor", "refinedstorage:constructor"] });
  event.remove({output:"refinedstorage:controller"})
  event.remove({output:"rsinfinitybooster:infinity_card"})
  event.remove({output:"rsinfinitybooster:dimension_card"})
	
  
  //procesador basico
  event.custom({
    "type": "ae2:inscriber",
    "mode": "press",
    "result": {
      "item": "refinedstorage:raw_basic_processor"
    },
    "ingredients": {
      "middle": {
        "item": "extendedcrafting:redstone_ingot"
      },
      "top": {
        "item": "ae2:printed_calculation_processor"
      },
      "bottom": {
        "item": "ae2:printed_silicon"
      }
    }
  }).id("galaxyorigenes:basicproccesor")

  //procesador improved
  event.custom({
    "type": "ae2:inscriber",
    "mode": "press",
    "result": {
      "item": "refinedstorage:raw_improved_processor"
    },
    "ingredients": {
      "middle": {
        "item": "extendedcrafting:redstone_ingot"
      },
      "top": {
        "item": "ae2:printed_logic_processor"
      },
      "bottom": {
        "item": "ae2:printed_silicon"
      }
    }
  }).id("galaxyorigenes:improvedproccesor")


    //procesador advanced
    event.custom({
      "type": "ae2:inscriber",
      "mode": "press",
      "result": {
        "item": "refinedstorage:raw_advanced_processor"
      },
      "ingredients": {
        "middle": {
          "item": "extendedcrafting:redstone_ingot"
        },
        "top": {
          "item": "ae2:printed_engineering_processor"
        },
        "bottom": {
          "item": "ae2:printed_silicon"
        }
      }
    }).id("galaxyorigenes:advancedproccesor")


       //infinite card
   event.custom({
    "type": "extendedcrafting:shaped_table",
    "tier": 2,
    "pattern": [
      "AABAA",
      "CBDBC",
      "BDEDB",
      "CBDBC",
      "FFBFF"
    ],
    "key": {
      "A": {
        "item": "minecraft:ender_eye"
      },
      "B": {
        "item": "refinedstorage:range_upgrade"
      },
      "C": {
        "item": "minecraft:nether_star"
      },
      "D": {
        "item": "extendedcrafting:ender_ingot"
      },
      "E": {
        "item": 'galaxy_core:patricio_estrella'
      },
      "F": {
        "item": "minecraft:netherite_ingot"
      }
    },
    "result": {
      "item": "rsinfinitybooster:infinity_card"
    },
  }).id("galaxyorigenes:infinityupgrade")


     
  //dimensional card
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "tier": 2,
    "pattern": [
      "AABAA",
      "CBDBC",
      "BDEDB",
      "CBDBC",
      "FFBFF"
    ],
    "key": {
      "A": {
        "item": "minecraft:ender_eye"
      },
      "B": {
        "item": "rsinfinitybooster:infinity_card"
      },
      "C": {
        "item": "extendedcrafting:ender_star"
      },
      "D": {
        "item": "extendedcrafting:ender_ingot"
      },
      "E": {
        "item": 'galaxy_core:patricio_estrella'
      },
      "F": {
        "item": "minecraft:netherite_ingot"
      }
    },
    "result": {
      "item": "rsinfinitybooster:dimension_card"
    },
  }).id("galaxyorigenes:dimensionalupgrade")


  event.shaped("50x refinedstorage:processor_binding", [
    "   ",
    "PLP",
    "   "
  ], {
	  L: 'exnihilosequentia:porcelain_clay',
    P: "minecraft:string"
  }).id("galaxyorigenes:processor_binding")


  //controlador
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "aba",
      "bcb",
      "aba"
    ],
    "key": {
      "a": {
        "item": "ae2:smooth_sky_stone_block"
      },
      "b": {
        "item": "ae2:fluix_crystal"
      },
      "c": {
        "item": "refinedstorage:advanced_processor"
      }
    },
    "result": {
      "item": "refinedstorage:controller"
    }
  }).id("galaxyorigenes:refinedstorage_controller")


  //memoria 1k
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {
        "item": "ae2:crafting_unit"
      },
      {
        "item": "refinedstorage:1k_storage_part"
      }
    ],
    "result": {
      "item": "refinedstorage:1k_storage_block"
    }
  }).id("galaxyorigenes:refinedstorage_1k_storage_block")



   //memoria 4k
   event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {
        "item": "ae2:crafting_unit"
      },
      {
        "item": "refinedstorage:4k_storage_part"
      }
    ],
    "result": {
      "item": "refinedstorage:4k_storage_block"
    }
  }).id("galaxyorigenes:refinedstorage_4k_storage_block")


     //memoria 16k
     event.custom({
      "type": "minecraft:crafting_shapeless",
      "ingredients": [
        {
          "item": "ae2:crafting_unit"
        },
        {
          "item": "refinedstorage:16k_storage_part"
        }
      ],
      "result": {
        "item": "refinedstorage:16k_storage_block"
      }
    }).id("galaxyorigenes:refinedstorage_16k_storage_block")


         //memoria 64k
         event.custom({
          "type": "minecraft:crafting_shapeless",
          "ingredients": [
            {
              "item": "ae2:crafting_unit"
            },
            {
              "item": "refinedstorage:64k_storage_part"
            }
          ],
          "result": {
            "item": "refinedstorage:64k_storage_block"
          }
        }).id("galaxyorigenes:refinedstorage_64k_storage_block")


        //fabricador
        event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
        "EAE",
        "CMD",
        "EAE"
        ],
        "key": {
       "E": {
       "item": "refinedstorage:quartz_enriched_iron"
       },
       "C": {
       "item": "ae2:annihilation_core"
       },
       "A": {
       "item": "refinedstorage:advanced_processor"
      },
      "M": {
      "item": "refinedstorage:machine_casing"
      },
      "D": {
      "item": "ae2:formation_core"
      }
      },
      "result": {
      "item": "refinedstorage:crafter"
  }
}).id("galaxyorigenes:refinedstorage_crafter")



//patron en blanco
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "aba",
    "bcb",
    "ddd"
  ],
  "key": {
    "a": {
      "item": "ae2:quartz_glass"
    },
    "b": {
      "tag": "forge:dusts/glowstone"
    },
    "c": {
      "tag": "ae2:all_certus_quartz"
    },
    "d": {
      "item": "refinedstorage:quartz_enriched_iron"
    }
  },
  "result": {
    "item": "refinedstorage:pattern",
    "count": 2
  }
}).id("galaxyorigenes:refinedstorage_pattern")

//fused cuarts
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "II",
    "IQ"
  ],
  "key": {
    "I": {
      "item": "ae2:certus_quartz_crystal"
    },
    "Q": {
      "item": "minecraft:quartz"
    }
  },
  "result": {
    "item": "refinedstorage:quartz_enriched_iron",
    "count": 4
  }
}).id("galaxyorigenes:refinedstorage_quartz_enriched_iron")



//cables
event.custom({
  "type": "minecraft:crafting_shapeless",
  "ingredients": [
    {
      "item": "refinedstorage:silicon"
    },
    {
      "tag": "ae2:all_fluix"
    },
    {
      "tag": "ae2:all_fluix"
    }
  ],
  "result": {
    "item": "refinedstorage:cable",
    "count": 4
  }
}).id("galaxyorigenes:refinedstorage_cable")


//exporter
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "aba",
    " c "
  ],
  "key": {
    "a": {
      "item": "refinedstorage:quartz_enriched_iron"
    },
    "b": {
      "item": "ae2:formation_core"
    },
    "c": {
      "item": "minecraft:piston"
    }
  },
  "result": {
    "item": "refinedstorage:exporter"
  }
}).id("galaxyorigenes:refinedstorage_exporter")


//import
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " a ",
    "bcb"
  ],
  "key": {
    "a": {
      "item": "ae2:annihilation_core"
    },
    "b": {
      "item": "refinedstorage:quartz_enriched_iron"
    },
    "c": {
      "item": "minecraft:sticky_piston"
    }
  },
  "result": {
    "item": "refinedstorage:importer"
  }
}).id("galaxyorigenes:refinedstorage_importer")


//storage
event.custom({
  "type": "minecraft:crafting_shapeless",
  "ingredients": [
    {
      "item": "minecraft:sticky_piston"
    },
    {
      "item": "refinedstorage:interface"
    },
    {
      "item": "minecraft:piston"
    }
  ],
  "result": {
    "item": "refinedstorage:external_storage"
  }
}).id("galaxyorigenes:refinedstorage_external_storage")
    

 //destructor
 event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ab",
    "cb",
    "ab"
  ],
  "key": {
    "a": {
      "item": "refinedstorage:quartz_enriched_iron"
    },
    "b": {
      "tag": "ae2:all_fluix"
    },
    "c": {
      "item": "ae2:annihilation_core"
    }
  },
  "result": {
    "item": "refinedstorage:destructor"
  }
}).id("galaxyorigenes:refinedstorage_destructor")

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "aaa",
    "bcb"
  ],
  "key": {
    "a": {
      "tag": "ae2:all_fluix"
    },
    "b": {
      "item": "refinedstorage:quartz_enriched_iron"
    },
    "c": {
      "item": "ae2:annihilation_core"
    }
  },
  "result": {
    "item": "refinedstorage:destructor"
  }
}).id("galaxyorigenes:refinedstorage_destructor_dos")


//constructor
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "aaa",
    "bcb"
  ],
  "key": {
    "a": {
      "tag": "ae2:all_fluix"
    },
    "b": {
      "item": "refinedstorage:quartz_enriched_iron"
    },
    "c": {
      "item": "ae2:formation_core"
    }
  },
  "result": {
    "item": "refinedstorage:constructor"
  }
}).id("galaxyorigenes:refinedstorage_constructor")


event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ab",
    "cb",
    "ab"
  ],
  "key": {
    "a": {
      "item": "refinedstorage:quartz_enriched_iron"
    },
    "b": {
      "tag": "ae2:all_fluix"
    },
    "c": {
      "item": "ae2:formation_core"
    }
  },
  "result": {
    "item": "refinedstorage:constructor"
  }
}).id("galaxyorigenes:refinedstorage_constructor_dos")

  
  })