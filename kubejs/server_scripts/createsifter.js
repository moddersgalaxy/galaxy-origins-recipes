
ServerEvents.recipes(event => {


  event.remove({output:'createsifter:brass_sifter'})
  event.remove({output:'createsifter:advanced_brass_mesh'})


  //iesmium oreoccultism
  event.custom({
    "type": "createsifter:sifting",
    "ingredients": [
      {
        "item": 'occultism:otherstone'
      },
      {
        "item": "createsifter:advanced_brass_mesh"
      }
    ],
    "processingTime": 70,
    "results": [
      {
        "chance": 0.15,
        "item": 'occultism:raw_iesnium'
      }
    ]
  }).id('galaxtorigenes:iesmium')




  //brass sifter
event.custom({
  "type": "minecraft:crafting_shaped",
  "category": "sifter",
  "acceptMirrored": true,
  "key": {
    "B": {
      "item": 'nuclearcraft:plate_elite'
    },
    "P": {
      "item": 'allthemodium:allthemodium_plate'
    },
    "R": {
      "item": 'nuclearcraft:zirconium_molybdenum_ingot'
    },
    "S": {
      "item": 'pneumaticcraft:transistor'
    }
  },
  "pattern": [
    "PPP",
    "BSB",
    "BRB"
  ],
  "result": {
    "item": "createsifter:brass_sifter"
  }
}).id('galaxtorigenes:brassshifter')



//advanced brass mesh
event.custom({
  "type": "minecraft:smithing_transform",
  "addition": {
    "item": 'nuclearcraft:tough_alloy_ingot'
  },
  "base": {
    "item": 'createsifter:brass_mesh'
  },
  "result": {
    "item": 'createsifter:advanced_brass_mesh'
  },
  "template": {
    "item": "minecraft:netherite_upgrade_smithing_template"
  }
}).id('galaxtorigenes:advancedbrassmesh')


  
})

