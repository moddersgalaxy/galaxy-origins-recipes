ServerEvents.recipes(event => {
	
  //diamond lattice
  event.shaped("avaritia:diamond_lattice", ["X X", " D ", "X X"], {
    X: {
      tag: "forge:gems/diamond",
    },
    D: {
      item: "minecraft:netherite_scrap",
    },
  }).id('galaxyorigenes:latituddediamantes')



 //casco infinito
 event.recipes.create.mechanical_crafting('avaritia:infinity_helmet', [
  "  NNNNN  ",
  " NIIIIIN ",
  " N XIX N ",
  " NIIIIIN ",
  " NIIIIIN ",
  " NI I IN "
  ], {
    I: 'avaritia:infinity_ingot',
    N: 'avaritia:neutron_ingot',
    X: 'avaritia:infinity_catalyst'
  }).id('galaxyorigenes:cascoinfinito')


//pechera infinita
event.recipes.create.mechanical_crafting('avaritia:infinity_chestplate', [
  " NN   NN ",
  "NNN   NNN",
  "NNN   NNN",
  " NIIIIIN ",
  " NIIXIIN ",
  " NIIIIIN ",
  " NIIIIIN ",
  " NIIIIIN ",
  "  NNNNN  "
  ], {
    I: 'avaritia:infinity_ingot',
    N: 'avaritia:neutron_ingot',
    X: 'avaritia:infinity_catalyst'
  }).id('galaxyorigenes:pecherainfinita')	


  //pantalones infinitos
  event.recipes.create.mechanical_crafting('avaritia:infinity_pants', [
    "NNNNNNNNN",
    "NIIIXIIIN",
    "NINNXNNIN",
    "NIN   NIN",
    "NCN   NCN",
    "NIN   NIN",
    "NIN   NIN",
    "NIN   NIN",
    "NNN   NNN"
    ], {
      C: 'avaritia:crystal_matrix_ingot',
      I: 'avaritia:infinity_ingot',
      N: 'avaritia:neutron_ingot',
      X: 'avaritia:infinity_catalyst'
    }).id('galaxyorigenes:pantaloneinfinitos')


    //infinity boots
    event.recipes.create.mechanical_crafting('avaritia:infinity_boots', [
      " NNN NNN ",
      " NIN NIN ",
      " NIN NIN ",
      "NNIN NINN",
      "NIIN NIIN",
      "NNNN NNNN"
      ], {
        I: 'avaritia:infinity_ingot',
        N: 'avaritia:neutron_ingot'
      }).id('galaxyorigenes:botasinfinitas')


      //espada del cosmos
      event.recipes.create.mechanical_crafting('avaritia:infinity_sword', [
        "       II",
        "      III",
        "     III ",
        "    III  ",
        " C III   ",
        "  CII    ",
        "  NC     ",
        " N  C    ",
        "X        "
        ], {
          C: 'avaritia:crystal_matrix_ingot',
          I: 'avaritia:infinity_ingot',
          N: 'avaritia:neutron_ingot',
          X: 'avaritia:infinity_catalyst'
        }).id('galaxyorigenes:espada_del_cosmos')




       //skullfire
       event.recipes.create.mechanical_crafting('avaritia:skull_fire_sword', [
        "       IX",
        "      IXI",
        "     IXI ",
        "    IXI  ",
        " B IXI   ",
        "  BXI    ",
        "  WB     ",
        " W  B    ",
        "D        "
        ], {
          B: 'minecraft:bone',
          D: 'minecraft:nether_star',
          I: 'avaritia:crystal_matrix_ingot',
          W: '#minecraft:logs',
          X: 'minecraft:blaze_powder'
        }).id('galaxyorigenes:skullfire_sword')



       //arco multidisparo
       event.recipes.create.mechanical_crafting('avaritia:infinity_bow', [
        "   II",
        "  I W",
        " I  W",
        "I   W",
        "X   W",
        "I   W",
        " I  W",
        "  I W",
        "   II"
        ], {
          X: 'avaritia:infinity_catalyst',
          I: 'avaritia:infinity_ingot',
          W: 'minecraft:white_wool'
        }).id('galaxyorigenes:arco_de_los_dioses')



        //destructor de mundos
        event.recipes.create.mechanical_crafting('avaritia:infinity_pickaxe', [
          " IIIIIII ",
          "IIIIXIIII",
          "II  N  II",
          "    N    ",
          "    N    ",
          "    N    ",
          "    N    ",
          "    N    ",
          "    N    "
          ], {
            I: 'avaritia:infinity_ingot',
            N: 'avaritia:neutron_ingot',
            X: 'avaritia:infinity_catalyst'
          }).id('galaxyorigenes:wold_breaker')



          //pala planetaria
          event.recipes.create.mechanical_crafting('avaritia:infinity_shovel', [
            "      III",
            "     IIXI",
            "      III",
            "     N I ",
            "    N    ",
            "   N     ",
            "  N      ",
            " N       ",
            "N        "
            ], {
              I: 'avaritia:infinity_ingot',
              N: 'avaritia:neutron_ingot',
              X: 'avaritia:infinity_catalyst'
            }).id('galaxyorigenes:palainfinita')


            //hacha de la naturaleza
            event.recipes.create.mechanical_crafting('avaritia:infinity_axe', [
              "   I   ",
              "  IIIII",
              "  IIXI ",
              "   IN  ",
              "    N  ",
              "    N  ",
              "    N  ",
              "    N  ",
              "    N  "
              ], {
                I: 'avaritia:infinity_ingot',
                N: 'avaritia:neutron_ingot',
                X: 'avaritia:infinity_catalyst'
              }).id('galaxyorigenes:hachainfinita')


              //azada del la tierra verde
              event.recipes.create.mechanical_crafting('avaritia:infinity_hoe', [
                "     N ",
                "   IIII",
                "  IIIII",
                "  I  XI",
                "     N ",
                "     N ",
                "     N ",
                "     N ",
                "     N "
                ], {
                  I: 'avaritia:infinity_ingot',
                  N: 'avaritia:neutron_ingot',
                  X: 'avaritia:infinity_catalyst'
                }).id('galaxyorigenes:azadainfinita')




                //albondigas cosmicas
                event.recipes.createMechanicalCrafting(
                  'avaritia:cosmic_meatballs',
                  ["ABCDEFGHI", "JKLM     "],
                  {
                    A: {
                      item: "minecraft:porkchop",
                    },
                    B: {
                      item: "minecraft:beef",
                    },
                    C: {
                      item: "minecraft:mutton",
                    },
                    D: {
                      item: "minecraft:cod",
                    },
                    E: {
                      item: "minecraft:salmon",
                    },
                    F: {
                      item: "minecraft:tropical_fish",
                    },
                    G: {
                      item: "minecraft:pufferfish",
                    },
                    H: {
                      item: "minecraft:rabbit",
                    },
                    I: {
                      item: "minecraft:chicken",
                    },
                    J: {
                      item: "minecraft:rotten_flesh",
                    },
                    K: {
                      item: "minecraft:spider_eye",
                    },
                    L: {
                      item: "minecraft:egg",
                    },
                    M: {
                      item: "avaritia:neutron_nugget",
                    },
                  }
                ).id('galaxyorigenes:cosmic_meatballs')



                //estofado ultimo
                event.recipes.createMechanicalCrafting(
                  'avaritia:ultimate_stew',
                  [
                    "ABCDEFGHI",
                    "JKLMOPQRS",
                    "TUVWXYZab",
                    "cdefghijk",
                    "lmnopqrst",
                    "uvwxyz123",
                    "45       ",
                  ],
                  {
                    A: {
                      item: "minecraft:apple",
                    },
                    B: {
                      item: "minecraft:golden_apple",
                    },
                    C: {
                      item: "minecraft:bread",
                    },
                    D: {
                      item: "minecraft:kelp",
                    },
                    E: {
                      item: "minecraft:cocoa_beans",
                    },
                    F: {
                      item: "minecraft:cake",
                    },
                    G: {
                      item: "minecraft:glistering_melon_slice",
                    },
                    H: {
                      item: "minecraft:carrot",
                    },
                    I: {
                      item: "minecraft:poisonous_potato",
                    },
                    J: {
                      item: "minecraft:chorus_fruit",
                    },
                    K: {
                      item: "minecraft:beetroot",
                    },
                    L: {
                      item: "minecraft:mushroom_stew",
                    },
                    M: {
                      item: "minecraft:honey_bottle",
                    },
                    O: {
                      item: "minecraft:sweet_berries",
                    },
                    P: {
                      item: "farmersdelight:apple_pie",
                    },
                    Q: {
                      item: "farmersdelight:sweet_berry_cheesecake",
                    },
                    R: {
                      item: "farmersdelight:chocolate_pie",
                    },
                    S: {
                      item: "farmersdelight:melon_popsicle",
                    },
                    T: {
                      item: "farmersdelight:fruit_salad",
                    },
                    U: {
                      item: "farmersdelight:mixed_salad",
                    },
                    V: {
                      item: "farmersdelight:nether_salad",
                    },
                    W: {
                      item: "farmersdelight:barbecue_stick",
                    },
                    X: {
                      item: "farmersdelight:egg_sandwich",
                    },
                    Y: {
                      item: "farmersdelight:chicken_sandwich",
                    },
                    Z: {
                      item: "farmersdelight:hamburger",
                    },
                    a: {
                      item: "farmersdelight:bacon_sandwich",
                    },
                    b: {
                      item: "farmersdelight:mutton_wrap",
                    },
                    c: {
                      item: "farmersdelight:dumplings",
                    },
                    d: {
                      item: "farmersdelight:stuffed_potato",
                    },
                    e: {
                      item: "farmersdelight:cabbage_rolls",
                    },
                    f: {
                      item: "farmersdelight:cooked_rice",
                    },
                    g: {
                      item: "farmersdelight:beef_stew",
                    },
                    h: {
                      item: "farmersdelight:chicken_soup",
                    },
                    i: {
                      item: "farmersdelight:vegetable_soup",
                    },
                    j: {
                      item: "farmersdelight:fish_stew",
                    },
                    k: {
                      item: "farmersdelight:fried_rice",
                    },
                    l: {
                      item: "farmersdelight:pumpkin_soup",
                    },
                    m: {
                      item: "farmersdelight:baked_cod_stew",
                    },
                    n: {
                      item: "farmersdelight:noodle_soup",
                    },
                    o: {
                      item: "farmersdelight:bacon_and_eggs",
                    },
                    p: {
                      item: "farmersdelight:pasta_with_meatballs",
                    },
                    q: {
                      item: "farmersdelight:pasta_with_mutton_chop",
                    },
                    r: {
                      item: "farmersdelight:roasted_mutton_chops",
                    },
                    s: {
                      item: "farmersdelight:vegetable_noodles",
                    },
                    t: {
                      item: "farmersdelight:steak_and_potatoes",
                    },
                    u: {
                      item: "farmersdelight:ratatouille",
                    },
                    v: {
                      item: "farmersdelight:salmon_roll",
                    },
                    w: {
                      item: "farmersdelight:stuffed_pumpkin_block",
                    },
                    x: {
                      item: "farmersdelight:roast_chicken_block",
                    },
                    y: {
                      item: "farmersdelight:grilled_salmon",
                    },
                    z: {
                      item: "ad_astra:cheese",
                    },
                    1: {
                      item: "thermal:spice_cake",
                    },
                    2: {
                      item: "create:blaze_cake",
                    },
                    3: {
                      item: "create:chocolate_glazed_berries",
                    },
                    4: {
                      item: "create:honeyed_apple",
                    },
                    5: {
                      item: "avaritia:neutron_nugget",
                    },
                  }
                ).id('galaxyorigenes:estofado_ultimo')




                //perla destructora
                event.recipes.createMechanicalCrafting(
                  'avaritia:endest_pearl',
                  [
                    "   AAA   ",
                    " AABBBAA ",
                    " ABBBBBA ",
                    "ABBBDBBBA",
                    "ABBDCDBBA",
                    "ABBBDBBBA",
                    " ABBBBBA ",
                    " AABBBAA ",
                    "   AAA   ",
                  ],
                  {
                    A: {
                      item: "minecraft:end_stone",
                    },
                    B: {
                      item: "minecraft:ender_pearl",
                    },
                    C: {
                      item: "minecraft:nether_star",
                    },
                    D: {
                      item: "avaritia:neutron_ingot",
                    },
                  }
                ).id('galaxyorigenes:endest_pearl')


                //compresor
                event.recipes.createMechanicalCrafting(
                  'extendedcrafting:compressor',
                  [
                    "IIIHHHIII",
                    "X N   N X",
                    "I N   N I",
                    "X N   N X",
                    "RNN O NNR",
                    "X N   N X",
                    "I N   N I",
                    "X N   N X",
                    "IIIXIXIII",
                  ],
                  {
                    N: {
                      item: "avaritia:neutron_ingot",
                    },
                    H: {
                      item: "minecraft:hopper",
                    },
                    I: {
                      tag: "forge:storage_blocks/iron",
                    },
                    O: {
                      item: "avaritia:neutronium_block",
                    },
                    X: {
                      item: "avaritia:crystal_matrix_ingot",
                    },
                    R: {
                      tag: "forge:storage_blocks/redstone",
                    },
                  }
                ).id('galaxyorigenes:compresor')



                //colector de neutrones
                event.recipes.createMechanicalCrafting(
                  'avaritia:neutron_collector',
                  [
                    "IIQQQQQII",
                    "I QQQQQ I",
                    "I  RRR  I",
                    "X RRRRR X",
                    "I RRXRR I",
                    "X RRRRR X",
                    "I  RRR  I",
                    "I       I",
                    "IIIXIXIII",
                  ],
                  {
                    I: {
                      tag: "forge:storage_blocks/iron",
                    },
                    X: {
                      item: "avaritia:crystal_matrix_ingot",
                    },
                    R: {
                      tag: "forge:storage_blocks/redstone",
                    },
                    Q: {
                      tag: "forge:storage_blocks/quartz",
                    },
                  }
                ).id('galaxyorigenes:neutron_collector')



                 //colector de neutrones Dense
                 event.recipes.createMechanicalCrafting(
                  'avaritia:dense_neutron_collector',
                  [
                    "aaa",
                    "aga",
                    "aaa"
                  ],
                  {
                    a: {
                        "item": "avaritia:neutron_collector",
                      },
                    g: {
                        "item": "avaritia:neutron_gear",
                    },

                  }
                ).id('galaxyorigenes:neutroncollectordense')


                //colector de neutrones Denser
                event.recipes.createMechanicalCrafting(
                  'avaritia:denser_neutron_collector',
                  [
                    "aaa",
                    "aga",
                    "aaa"
                  ],
                  {
                    a: {
                        "item": "avaritia:dense_neutron_collector",
                      },
                    g: {
                        "item": "avaritia:neutron_gear",
                    },

                  }
                ).id('galaxyorigenes:neutroncollectordenser')


                //colector de neutrones Densest
                event.recipes.createMechanicalCrafting(
                  'avaritia:densest_neutron_collector',
                  [
                    "CC     CC",
                    "C  BBB  C",
                    "  AAAAA  ",
                    " BAXXXAB ",
                    " BAXYXAB ",
                    " BAXXXAB ",
                    "  AAAAA  ",
                    "C  BBB  C",
                    "CC     CC" 
                  ],
                  {
                    A: {
                      "item": "minecraft:redstone_block"
                    },
                    "B": {
                      "item": "avaritia:neutron_ingot"
                    },
                    C: {
                      "item": "avaritia:neutron_gear"
                    },
                    X: {
                      "item": "avaritia:denser_neutron_collector"
                    },
                    Y: {
                      "type": "forge:nbt",
                      "item": "extendedcrafting:singularity",
                      "count": 1,
                      "nbt": "{Id:\"extendedcrafting:redstone\"}"
                    },

                  }
                ).id('galaxyorigenes:neutroncollectordensest')


                //infinity catalyst
                event.recipes.createMechanicalCrafting(
                  "avaritia:infinity_catalyst",
                  ["ABCDEFGHI", "JKLMNOPQR", "STUVWXYZ1", "2345678  "],
                  {
                    A: {
                      item: "avaritia:diamond_lattice",
                    },
                    B: {
                      item: "avaritia:crystal_matrix_ingot",
                    },
                    C: {
                      item: "avaritia:neutron_pile",
                    },
                    D: {
                      item: "avaritia:neutron_nugget",
                    },
                    E: {
                      item: "avaritia:neutron_ingot",
                    },
                    F: {
                      item: "avaritia:record_fragment",
                    },
                    G: {
                      item: "avaritia:endest_pearl",
                    },
                    H: {
                      item: "avaritia:ultimate_stew",
                    },
                    I: {
                      item: "avaritia:cosmic_meatballs",
                    },
                    J: {
                      item: 'avaritia:soul_gem_singularity',
                    },
                    K: {
                      item: 'avaritia:mateico_singularity',
                    },
                    L: {
                      item: 'avaritia:hopper_botany_pot_singularity',
                    },
                    M: {
                      item: 'avaritia:blutonium_ingot_singularity',
                    },
                    N: {
                      item: 'avaritia:crystal_nitro_singularity',
                    },
                    O: {
                      item: 'avaritia:uranium_235_singularity',
                    },
                    P: {
                      item: 'avaritia:crafting_table_singularity',
                    },
                    Q: {
                      item: 'avaritia:cheese_singularity',
                    },
                    R: {
                      item: 'avaritia:track_singularity',
                    },
                    S: {
                      item: 'avaritia:source_gem_singularity',
                    },
                    T: {
                      item: 'avaritia:neutronium_singularity',
                    },
                    U: {
                      item: 'avaritia:caca_singularity',
                    },
                    V: {
                      item: 'avaritia:nether_star_singularity',
                    },
                    W: {
                      item: 'avaritia:enderium_block_singularity',
                    },
                    X: {
                      item: 'avaritia:fusion_reactor_casing_singularity',
                    },
                    Y: {
                      item: 'avaritia:esmarelda_singularity',
                    },
                    Z: {
                      item: 'avaritia:record_singularity',
                    },
                    1: {
                      item: 'avaritia:addon_singularity',
                    },
                    2: {
                      item: 'avaritia:flux_block_singularity',
                    },
                    3: {
                      item: 'avaritia:balloon_singularity',
                    },
                    4: {
                      item: 'avaritia:pellet_polonium_singularity',
                    },
                    5: {
                      item: 'avaritia:singularity_emerlad_to_emerald_singularity',
                    },
                    6: {
                      item: 'avaritia:certus_quartz_singularity',
                    },
                    7: {
                      item: 'avaritia:xp_jelly_baby_singularity',
                    },
                    8: {
                      item: 'avaritia:uraninite_singularity',
                    },
                  }).id("galaxyorigenes:infinity_catalyst")



                //lingote infinito
                event.recipes.createMechanicalCrafting(
                  'avaritia:infinity_ingot',
                  ["NNNNNNNNN", "NCIICIICN", "NICCICCIN", "NCIICIICN", "NNNNNNNNN"],
                  {
                    C: {
                      item: "avaritia:crystal_matrix_ingot",
                    },
                    N: {
                      item: "avaritia:neutron_ingot",
                    },
                    I: {
                      item: "avaritia:infinity_catalyst",
                    },
                  }
                ).id('galaxyorigenes:infinityingot')

	
	
	
	//endless cake
  event.recipes.createMechanicalCrafting(
    'avaritia:endless_cake',
    [
      "aaa",
      "bcb",
      "ded"
    ],
    {
          a: {
            "item": "minecraft:milk_bucket",
          },
          b: {
            "item": "minecraft:sugar",
          },
          "c": {
            "item": "minecraft:dragon_egg",
          },
          d: {
            "tag": "forge:crops/wheat",
          },
          e: {
            "item": "avaritia:infinity_ingot",
          },
    }
  ).id('galaxyorigenes:tartainfinita')




		//infinity totem
  event.recipes.createMechanicalCrafting(
    'avaritia:infinity_totem',
    [
      "   NNN   ",
      "  NIIIN  ",
      "  NYIYN  ",
      "CCCIIICCC",
      " CCIIICC ",
      "  NIIIN  ",
      "  NNNNN  ",
      "   CCC   ",
      "    C    "
    ],
    {
      C: {
        "item": "avaritia:crystal_matrix_ingot"
      },
      I: {
        "item": "avaritia:infinity_nugget"
      },
      N: {
        "item": "avaritia:neutron_ingot"
      },
      Y: {
        "item": "minecraft:totem_of_undying"
          },
    }
  ).id('galaxyorigenes:toteminfinito')



  		//star fuel
      event.recipes.createMechanicalCrafting(
        'avaritia:star_fuel',
        [
          "ccc",
          "cxc",
          "ccc"
        ],
        {
          c: {
            "item": "allthecompressed:coal_block_9x"
          },
          x: {
            "item": "avaritia:infinity_catalyst"
              },
        }
      ).id('galaxyorigenes:starfuel')



      //ultimate ingot
      




       //xpjelly baby singularity
       event.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": 500000,
        "inputCount": 150,
        "ingredient": {
          "item": 'mob_grinding_utils:solid_xp_baby'
        },
        "catalyst": {
          "item": 'extendedcrafting:ultimate_catalyst'
        },
        "result": {
          "item": 'avaritia:xp_jelly_baby_singularity'
        }
      }).id('galaxyorigenes:xpjellybabysingularity')



      //reactor cassing
      event.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": 500000,
        "inputCount": 10000,
        "ingredient": {
          "item": 'nuclearcraft:fusion_reactor_casing'
        },
        "catalyst": {
          "item": 'extendedcrafting:ultimate_catalyst'
        },
        "result": {
          "item": 'avaritia:fusion_reactor_casing_singularity'
        }
      }).id('galaxyorigenes:fusionreactorcasingsingularity')

      

      //cheese singularity
      event.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": 500000,
        "inputCount": 90,
        "ingredient": {
          "item": 'ad_astra:cheese'
        },
        "catalyst": {
          "item": 'extendedcrafting:ultimate_catalyst'
        },
        "result": {
          "item": 'avaritia:cheese_singularity'
        }
      }).id('galaxyorigenes:cheesesingularity')


      //uraninite singularity
      event.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": 500000,
        "inputCount": 500,
        "ingredient": {
          "item": 'powah:uraninite'
        },
        "catalyst": {
          "item": 'extendedcrafting:ultimate_catalyst'
        },
        "result": {
          "item": 'avaritia:uraninite_singularity'
        }
      }).id('galaxyorigenes:uraninitesingularity')

      //track
      event.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": 500000,
        "inputCount": 10000,
        "ingredient": {
          "item": 'create:track'
        },
        "catalyst": {
          "item": 'extendedcrafting:ultimate_catalyst'
        },
        "result": {
          "item": 'avaritia:track_singularity'
        }
      }).id('galaxyorigenes:tracksingularity')


      //source gem singularity
      event.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": 500000,
        "inputCount": 100,
        "ingredient": {
          "item": 'ars_nouveau:source_gem'
        },
        "catalyst": {
          "item": 'extendedcrafting:ultimate_catalyst'
        },
        "result": {
          "item": 'avaritia:sourcegem_singularity'
        }
      }).id('galaxyorigenes:sourcegemsingularity')



      //mateicisingularity
      event.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": 500000,
        "inputCount": 777,
        "ingredient": {
          "item": 'argentinas_delight:matedulceitem' //cambiar por maiteicodulce
        },
        "catalyst": {
          "item": 'extendedcrafting:ultimate_catalyst'
        },
        "result": {
          "item": 'avaritia:mateico_singularity'
        }
      }).id('galaxyorigenes:mateicosingularity')

      //neutronium singularity
      event.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": 500000,
        "inputCount": 9500,
        "ingredient": {
          "item": 'avaritia:neutron_ingot'
        },
        "catalyst": {
          "item": 'extendedcrafting:ultimate_catalyst'
        },
        "result": {
          "item": 'avaritia:neutronium_singularity'
        }
      }).id('galaxyorigenes:neutroniumsingularity')


       //uranium235 singularity
       event.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": 500000,
        "inputCount": 500,
        "ingredient": {
          "item": 'nuclearcraft:fuel_uranium_heu_235_ox'
        },
        "catalyst": {
          "item": 'extendedcrafting:ultimate_catalyst'
        },
        "result": {
          "item": 'avaritia:uranium_235_singularity'
        }
      }).id('galaxyorigenes:uraniumcincosingularity')


        //addon prossecing tier 2 singularity
         event.custom({
          "type": "extendedcrafting:compressor",
          "powerCost": 500000,
          "inputCount": 50,
          "ingredient": {
            "item": 'industrialforegoing:processing_addon_2'
          },
          "catalyst": {
            "item": 'extendedcrafting:ultimate_catalyst'
          },
          "result": {
            "item": 'avaritia:addon_singularity'
          }
        }).id('galaxyorigenes:addonsingularity')


       //certus singularity
       event.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": 500000,
        "inputCount": 350,
        "ingredient": {
          "tag": 'ae2:all_certus_quartz'
        },
        "catalyst": {
          "item": 'extendedcrafting:ultimate_catalyst'
        },
        "result": {
          "item": 'avaritia:certus_quartz_singularity'
        }
      }).id('galaxyorigenes:certussingularity')



 //enderium singularity
 event.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 350,
  "ingredient": {
    "item": 'thermal:enderium_block'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:enderium_block_singularity'
  }
}).id('galaxyorigenes:enderiumsingularity')



 //crafting table singularity
 event.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 20,
  "ingredient": {
    "item": 'minecraft:crafting_table'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:crafting_table_singularity'
  }
}).id('galaxyorigenes:craftingtablesingularity')


  
 //soul gem singularity
 event.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 15,
  "ingredient": {
    "item": 'occultism:soul_gem'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:soul_gem_singularity'
  }
}).id('galaxyorigenes:soulgemsingularity')


//nether star singularity
event.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 90,
  "ingredient": {
    "item": 'minecraft:nether_star'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:nether_star_singularity'
  }
}).id('galaxyorigenes:netherstarsingularity')




//flux block singularity
event.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 450,
  "ingredient": {
    "item": 'fluxnetworks:flux_block'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:flux_block_singularity'
  }
}).id('galaxyorigenes:fluxblocksingularity')



//nitro cristal singularity
event.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 800,
  "ingredient": {
    "item": 'powah:crystal_nitro'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:crystal_nitro_singularity'
  }
}).id('galaxyorigenes:nitrocristalsingularity')




//record singularity
event.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 35,
  "ingredient": {
    "item": 'avaritia:record_fragment'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:record_singularity'
  }
}).id('galaxyorigenes:recordsingularity')




//polonium singularity
event.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 10,
  "ingredient": {
    "item": 'mekanism:pellet_polonium'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:pellet_polonium_singularity'
  }
}).id('galaxyorigenes:poloniumsingularity')



// singularity
event.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 777,
  "ingredient": {
    "item": 'galaxy_core:super_caca'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:caca_singularity'
  }
}).id('galaxyorigenes:cacasingularity')


//hopper botany pot singularity
event.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 22,
  "ingredient": {
    "item": 'botanypots:terracotta_hopper_botany_pot'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:hopper_botany_pot_singularity'
  }
}).id('galaxyorigenes:hopperbotanypotsingularity')


//blutonium singularity
event.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 3500,
  "ingredient": {
    "item": 'biggerreactors:blutonium_ingot'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:blutonium_ingot_singularity'
  }
}).id('galaxyorigenes:blutoniumsingularity')


//balloon singularity
event.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 1500,
  "ingredient": {
    "item": 'immersiveengineering:balloon'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:balloon_singularity'
  }
}).id('galaxyorigenes:alloonsingularity')


//esmarelda de esmarelda singularity
event.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 1500,
  "ingredient": {
    "item": 'avaritia:esmarelda_singularity'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:singularity_emerlad_to_emerald_singularity'
  }
}).id('galaxyorigenes:esmareldatoesmareldasingularity')




//esmarelda singularity
event.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 1600,
  "ingredient": {
    "item": 'minecraft:emerald_block'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:esmarelda_singularity'
  }
}).id('galaxyorigenes:esmareldasingularity')






      

})