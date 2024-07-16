ServerEvents.recipes(event => {
  event.remove({ id: 'gag:time_sand_pouch' })
  event.shaped('gag:time_sand_pouch', ['UFU', 'BCB', 'LBL'], {
    U: 'ad_astra:ostrum_block',
    L: 'allthemodium:allthemodium_block',
    C: 'reliquary:salamander_eye',
    F: 'minecraft:nautilus_shell',
    B: 'minecraft:leather'
  }).id('galaxyorigenes:temporalpouch')
})
