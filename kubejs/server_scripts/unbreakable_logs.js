// Make logs unbreakable when hit without a tool (like bedrock)
BlockEvents.leftClicked(event => {
  // Check if the block is a log (any type of log)
  if (event.block.hasTag('minecraft:logs')) {
    // Check if player has nothing in their main hand
    if (event.player.mainHandItem.id === 'minecraft:air') {
      event.player.tell(`§cYou need a tool to break ${event.block.id}!`)
      event.cancel() // This makes the block unbreakable like bedrock
    }
  }
})
