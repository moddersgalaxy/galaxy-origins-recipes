ServerEvents.entityLootTables(event => {
    event.modifyEntity('minecraft:guardian', table => {
        table.addPool(pool => {
            pool.addItem('minecraft:heart_of_the_sea').randomChanceWithLooting(0.05, 0.05).killedByPlayer()
        })
    })
    event.modifyEntity('ad_astra:lunarian', table => {
        table.addPool(pool => {
            pool.addItem('minecraft:heart_of_the_sea').killedByPlayer()
        })
    })

    event.modifyEntity('minecraft:ender_dragon', table => {
        table.addPool(pool => {
            pool.addItem('minecraft:dragon_egg').randomChanceWithLooting(0.05, 0.05).killedByPlayer()
        })
    })

    event.modifyEntity('ad_astra:lunarian', table => {
        table.addPool(pool => {
            pool.addItem('minecraft:dragon_breath').randomChanceWithLooting(0.05, 0.05).killedByPlayer()
        })
    })


    event.modifyEntity('minecraft:sniffer', table => {
        table.addPool(pool => {
            pool.addItem('minecraft:torchflower_seeds').randomChanceWithLooting(0.05, 0.05).killedByPlayer()
        })
    })


    event.modifyEntity('minecraft:sniffer', table => {
        table.addPool(pool => {
            pool.addItem('minecraft:pitcher_plant').randomChanceWithLooting(0.05, 0.05).killedByPlayer()
        })
    })


    event.modifyEntity('minecraft:wither', table => {
        table.addPool(pool => {
            pool.addItem('minecraft:nether_star')
        })
    })


    
    event.modifyEntity('minecraft:wither', table => {
        table.addPool(pool => {
            pool.addItem('mysticalagriculture:supremium_essence').randomChanceWithLooting(0.05, 0.05).killedByPlayer()
        })
    })


    event.modifyEntity('minecraft:shulker', table => {
        table.addPool(pool => {
            pool.addItem('nether_remastered:seal_piece_2').randomChanceWithLooting(0.05, 0.05).killedByPlayer()
        })
    })


    event.modifyEntity('minecraft:slime', table => {
        table.addPool(pool => {
            pool.addItem('nether_remastered:seal_piece_1').randomChanceWithLooting(0.05, 0.05).killedByPlayer()
        })
    })



    event.modifyEntity('minecraft:blaze', table => {
        table.addPool(pool => {
            pool.addItem('nether_remastered:seal_piece_4').randomChanceWithLooting(0.05, 0.05).killedByPlayer()
        })
    })

    event.modifyEntity('minecraft:enderman', table => {
        table.addPool(pool => {
            pool.addItem('nether_remastered:seal_piece_3').randomChanceWithLooting(0.05, 0.05).killedByPlayer()
        })
    })


    event.modifyEntity('minecraft:iron_golem', table => {
        table.addPool(pool => {
            pool.addItem('nether_remastered:bottled_nether_essence').randomChanceWithLooting(0.05, 0.05).killedByPlayer()
        })
    })


    event.modifyEntity('minecraft:witch', table => {
        table.addPool(pool => {
            pool.addItem('nether_remastered:seal_crystal').randomChanceWithLooting(0.05, 0.05).killedByPlayer()
        })
    })


    event.modifyEntity('minecraft:enderman', table => {
        table.addPool(pool => {
            pool.addItem('endrem:black_eye').randomChanceWithLooting(0.10, 0.03).killedByPlayer()
        })
    })

    event.modifyEntity('minecraft:enderman', table => {
        table.addPool(pool => {
            pool.addItem('endrem:cold_eye').randomChanceWithLooting(0.10, 0.03).killedByPlayer()
        })
    })

    event.modifyEntity('minecraft:enderman', table => {
        table.addPool(pool => {
            pool.addItem('endrem:corrupted_eye').randomChanceWithLooting(0.10, 0.03).killedByPlayer()
        })
    })

    event.modifyEntity('minecraft:enderman', table => {
        table.addPool(pool => {
            pool.addItem('endrem:lost_eye').randomChanceWithLooting(0.10, 0.03).killedByPlayer()
        })
    })

    event.modifyEntity('minecraft:enderman', table => {
        table.addPool(pool => {
            pool.addItem('endrem:nether_eye').randomChanceWithLooting(0.10, 0.03).killedByPlayer()
        })
    })

    event.modifyEntity('minecraft:enderman', table => {
        table.addPool(pool => {
            pool.addItem('endrem:old_eye').randomChanceWithLooting(0.10, 0.03).killedByPlayer()
        })
    })

    event.modifyEntity('minecraft:enderman', table => {
        table.addPool(pool => {
            pool.addItem('endrem:rogue_eye').randomChanceWithLooting(0.10, 0.03).killedByPlayer()
        })
    })

    event.modifyEntity('minecraft:enderman', table => {
        table.addPool(pool => {
            pool.addItem('endrem:cursed_eye').randomChanceWithLooting(0.10, 0.03).killedByPlayer()
        })
    })

    event.modifyEntity('minecraft:enderman', table => {
        table.addPool(pool => {
            pool.addItem('endrem:evil_eye').randomChanceWithLooting(0.10, 0.03).killedByPlayer()
        })
    })

    event.modifyEntity('minecraft:enderman', table => {
        table.addPool(pool => {
            pool.addItem('endrem:magical_eye').randomChanceWithLooting(0.10, 0.03).killedByPlayer()
        })
    })

    event.modifyEntity('minecraft:enderman', table => {
        table.addPool(pool => {
            pool.addItem('endrem:wither_eye').randomChanceWithLooting(0.10, 0.03).killedByPlayer()
        })
    })

    event.modifyEntity('minecraft:enderman', table => {
        table.addPool(pool => {
            pool.addItem('endrem:guardian_eye').randomChanceWithLooting(0.10, 0.03).killedByPlayer()
        })
    })

    event.modifyEntity('minecraft:enderman', table => {
        table.addPool(pool => {
            pool.addItem('endrem:cryptic_eye').randomChanceWithLooting(0.10, 0.03).killedByPlayer()
        })
    })



})
