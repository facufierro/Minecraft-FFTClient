const ProperTools = {
    initialize: () => {
        BlockEvents.leftClicked(event => {
            if (event.block.hasTag('minecraft:logs')) {
                if (!event.player.mainHandItem.hasTag('minecraft:axes')) {
                    event.player.tell(`§cYou need an axe to break logs!`)
                    event.cancel()
                }
            }
        })
        
        console.info('FFT Proper Tools: Events registered')
    }
}

ProperTools
