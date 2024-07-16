ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event

    event.register(
        Commands.literal('recetas')
            .requires(src => src.hasPermission(3))
            .executes(ctx => {
                let server = ctx.source.getServer()
                if (server.runCommandSilent('kubejs reload startup_scripts') &&
                    server.runCommandSilent('kubejs reload server_scripts') &&
                    server.runCommandSilent('kubejs reload client_scripts') &&
                    server.runCommandSilent('kubejs reload lang') &&
                    server.runCommand('reload')) 
                    return 1
                else {
                    ctx.source.player.tell(Text.red('Reload Complete!'))
                    return 0
                }
            })
    )
})