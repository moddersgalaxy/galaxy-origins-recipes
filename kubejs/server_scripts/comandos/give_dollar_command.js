ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event

    event.register(
        Commands.literal('dolar')
            .requires(src => src.hasPermission(3))
            .executes(ctx => {
                let server = ctx.source.getServer()
                if (
                    server.runCommand('me quiero plata toy pobre')) 
                    return 1
                else {
                    ctx.source.player.tell(Text.red('Toa Plata Pobreton xD!'))
                    return 0
                }
            })
    )
})