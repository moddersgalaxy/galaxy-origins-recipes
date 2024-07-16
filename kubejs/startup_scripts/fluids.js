StartupEvents.registry('fluid', event => {
    event.create('molten_copper')
    .displayName('Molten copper')
    .thickTexture(0xff9000)
    .bucketColor(0xff9000)

    event.create('molten_brass')
    .displayName('Molten brass')
    .thickTexture(0xf3ff00)
    .bucketColor(0xf3ff00)

    event.create('molten_steel')
    .displayName('Molten steel')
    .thickTexture(0x515151)
    .bucketColor(0x515151)
    
    event.create('wrought_iron')
    .displayName('Wrought iron')
    .thickTexture(0x472334)
    .bucketColor(0x472334)

    event.create('molten_gold')
    .displayName('Molten gold')
    .thickTexture(0xD4AF37)
    .bucketColor(0xD4AF37)
})