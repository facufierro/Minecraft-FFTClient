// Continuously run inventory slot commands based on backpack equipped
ServerEvents.tick(event => {
  // Run every 10 ticks (0.5 seconds) to avoid spam
  if (event.server.tickCount % 10 === 0) {
    // Check for players without small backpack - set inventory to 9 slots (hotbar only)
    event.server.runCommandSilent('execute if entity @a[curios=!{item:{id:"usefulbackpacks:backpack_small"},slot:["back"]}] run inventory_slots set_available @p 9')
    
    // Check for players with small backpack - set inventory to 36 slots (full inventory)
    event.server.runCommandSilent('execute if entity @a[curios={item:{id:"usefulbackpacks:backpack_small"},slot:["back"]}] run inventory_slots set_available @p 36')
  }
})
