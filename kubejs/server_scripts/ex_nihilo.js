
ServerEvents.recipes(event => {


  event.remove({output:'exnihilosequentia:end_cake'})


  //sieve


  event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": 'minecraft:basalt'
    },
    "result": {
      "item": 'ae2:sky_dust'
    },
    "rolls": [
      {
        "chance": 0.2,
        "mesh": "netherite"
      }
    ]
  }).id('galaxtorigenes:skydust')

  event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": `exnihilosequentia:crushed_netherrack`
    },
    "result": {
      "item": `ae2:certus_quartz_crystal`
    },
    "rolls": [
      {
        "chance": 0.15,
        "mesh": "netherite"
      }
    ]
  }).id('galaxtorigenes:certuscrystal')

  event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": `exnihilosequentia:crushed_netherrack`
    },
    "result": {
      "item": `create:rose_quartz`
    },
    "rolls": [
      {
        "chance": 0.15,
        "mesh": "diamond"
      }
    ]
  }).id('galaxtorigenescuarzorosa')

  event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": `exnihilosequentia:crushed_end_stone`
    },
    "result": {
      "item": `minecraft:chorus_flower`
    },
    "rolls": [
      {
        "chance": 0.1,
        "mesh": "diamond"
      }
    ]
  }).id('galaxtorigenes:florcoral')

  event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": 'minecraft:basalt'
    },
    "result": {
      "item": 'fluxnetworks:flux_dust'
    },
    "rolls": [
      {
        "chance": 0.35,
        "mesh": "netherite"
      }
    ]
  }).id('galaxtorigenes:fluxdust')
  
  event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": 'minecraft:basalt'
    },
    "result": {
      "item": 'minecraft:amethyst_shard'
    },
    "rolls": [
      {
        "chance": 0.2,
        "mesh": "netherite"
      }
    ]
  }).id('galaxtorigenes:amatista')

  event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": 'minecraft:gravel'
    },
    "result": {
      "item": 'thermal:apatite'
    },
    "rolls": [
      {
        "chance": 0.2,
        "mesh": "iron"
      }
    ]
  }).id('galaxtorigenes:aptita')



  event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "tag": 'minecraft:dirt_path'
    },
    "result": {
      "item": 'integrateddynamics:menril_sapling'
    },
    "rolls": [
      {
        "chance": 0.50,
        "mesh": "flint"
      }
    ]
  }).id('galaxtorigenes:menrisappling')



  event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": `minecraft:dirt`
    },
    "result": {
      "item": 'integrateddynamics:menril_berries'
    },
    "rolls": [
      {
        "chance": 0.50,
        "mesh": "emerald"
      }
    ]
  }).id('galaxtorigenes:merilberries')



  //uraninite
  event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": 'excompressum:compressed_sand'
    },
    "result": {
      "item": 'powah:uraninite_raw'
    },
    "rolls": [
      {
        "chance": 0.50,
        "mesh": "emerald"
      }
    ]
  }).id('galaxtorigenes:uraniniteraw')



  //water logged sieves
  event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": 'minecraft:oak_planks'
    },
    "result": {
      "item": `minecraft:ink_sac`
    },
    "rolls": [
      {
        "chance": 0.25,
        "mesh": "iron"
      }
    ],
    "waterlogged": true
  }).id('galaxtorigenes:sacodetinta')



  event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": 'minecraft:sand'
    },
    "result": {
      "item": 'minecraft:kelp'
    },
    "rolls": [
      {
        "chance": 0.45,
        "mesh": "netherite"
      }
    ],
    "waterlogged": true
  }).id('galaxtorigenes:algas')



  event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": 'minecraft:oak_planks'
    },
    "result": {
      "item": "minecraft:seagrass"
    },
    "rolls": [
      {
        "chance": 0.5,
        "mesh": "iron"
      }
    ],
    "waterlogged": true
  })


  event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": 'minecraft:oak_planks'
    },
    "result": {
      "item": 'minecraft:sniffer_egg'
    },
    "rolls": [
      {
        "chance": 0.5,
        "mesh": "iron"
      }
    ],
    "waterlogged": true
  })



     event.custom({
      "type": "exnihilosequentia:sifting",
      "input": {
        "item": 'minecraft:oak_planks'
      },
      "result": {
        "item": 'exnihilosequentia:bubble_coral_larva'
      },
      "rolls": [
        {
          "chance": 0.5,
          "mesh": "iron"
        }
      ],
      "waterlogged": true
    }).id('galaxtorigenes:larvabubble')


    event.custom({
      "type": "exnihilosequentia:sifting",
      "input": {
        "item": 'minecraft:oak_planks'
      },
      "result": {
        "item": 'exnihilosequentia:horn_coral_larva'
      },
      "rolls": [
        {
          "chance": 0.5,
          "mesh": "iron"
        }
      ],
      "waterlogged": true
    }).id('galaxtorigenes:horncorallarva')


    event.custom({
      "type": "exnihilosequentia:sifting",
      "input": {
        "item": 'minecraft:oak_planks'
      },
      "result": {
        "item": 'exnihilosequentia:fire_coral_larva'
      },
      "rolls": [
        {
          "chance": 0.5,
          "mesh": "iron"
        }
      ],
      "waterlogged": true
    }).id('galaxtorigenes:firelarva')


    event.custom({
      "type": "exnihilosequentia:sifting",
      "input": {
        "item": 'minecraft:oak_planks'
      },
      "result": {
        "item": 'minecraft:sea_pickle'
      },
      "rolls": [
        {
          "chance": 0.5,
          "mesh": "iron"
        }
      ],
      "waterlogged": true
    }).id('galaxtorigenes:pepinodemar')


    event.custom({
      "type": "exnihilosequentia:sifting",
      "input": {
        "item": 'minecraft:oak_planks'
      },
      "result": {
        "item": 'exnihilosequentia:tube_coral_larva'
      },
      "rolls": [
        {
          "chance": 0.5,
          "mesh": "iron"
        }
      ],
      "waterlogged": true
    }).id('galaxtorigenes:tubelarva')


   event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": 'minecraft:oak_planks'
    },
    "result": {
      "item": 'exnihilosequentia:brain_coral_larva'
    },
    "rolls": [
      {
        "chance": 0.5,
        "mesh": "iron"
      }
    ],
    "waterlogged": true
  }).id('galaxtorigenes:brainlarva')



  //heat
  event.custom({
    "type": "exnihilosequentia:heat",
    "amount": 20,
    "block": `alltheores:uranium_block`
    }).id('galaxtorigenes:')



  event.custom({
    "type": "exnihilosequentia:heat",
    "amount": 60,
    "block": `mekanism:superheating_element`
    }).id('galaxtorigenes:heateelementheat')


  event.custom({
    "type": "exnihilosequentia:heat",
    "amount": 15000,
    "block": 'create:blaze_burner'
    }).id('galaxtorigenes:blazeburnerheat')


  event.custom({
    "type": "exnihilosequentia:heat",
    "amount":  100000,
    "block": 'nuclearcraft:thorium_block'
    }).id('galaxtorigenes:dragoncruxheat')



})

