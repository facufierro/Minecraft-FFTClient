BlockEvents.leftClicked(event => {
    if (event.block.hasTag('minecraft:logs')) {
        if (!event.player.mainHandItem.hasTag('minecraft:axes')) {
            event.player.tell(`§cYou need an axe to break logs!`)
            event.cancel()
        }
    }
})
