//sphisticatedbackpacks by srnadien
ServerEvents.recipes(event => {
	
	
	
	
	//eliminadas
	event.remove({output:'sophisticatedbackpacks:iron_backpack'})
	event.remove({output:'sophisticatedbackpacks:gold_backpack'})
	event.remove({output:'sophisticatedbackpacks:diamond_backpack'})
	event.remove({output:'sophisticatedbackpacks:netherite_backpack'})
  event.remove({output:'sophisticatedbackpacks:copper_backpack'})
	
	
		//mochila de cobre
    event.smithing(
      'sophisticatedbackpacks:copper_backpack',  // arg 1: output
      '#forge:plates/copper', // arg 2: the item to be upgraded
      'sophisticatedbackpacks:backpack'  // arg 3: the upgrade item
    )


	
	//mochila de hierro
  event.smithing(
    'sophisticatedbackpacks:iron_backpack',  // arg 1: output
    'create:iron_sheet', // arg 2: the item to be upgraded
    'sophisticatedbackpacks:copper_backpack'  // arg 3: the upgrade item
  )
	
	
	
	//mochila de oro
  event.smithing(
    'sophisticatedbackpacks:gold_backpack',  // arg 1: output
    'create:golden_sheet', // arg 2: the item to be upgraded
    'sophisticatedbackpacks:iron_backpack'  // arg 3: the upgrade item
  )
  
  
    //mochila de diamante
  event.smithing(
    'sophisticatedbackpacks:diamond_backpack',  // arg 1: output
    'alltheores:diamond_plate', // arg 2: the item to be upgraded
    'sophisticatedbackpacks:gold_backpack'  // arg 3: the upgrade item
  )
  
  
  
    //mochila de netherite	
  event.smithing(
    'sophisticatedbackpacks:netherite_backpack',  // arg 1: output
    'thermal:netherite_plate', // arg 2: the item to be upgraded
    'sophisticatedbackpacks:diamond_backpack'  // arg 3: the upgrade item
  )



})