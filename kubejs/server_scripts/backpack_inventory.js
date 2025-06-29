// Continuously run inventory slot commands based on backpack equipped
ServerEvents.tick(event => {
  // Run every 10 ticks (0.5 seconds) to avoid spam
  if (event.server.tickCount % 10 === 0) {
    // Define all backpack types to check for
    let backpackTypes = [
      'usefulbackpacks:backpack_small',
      'usefulbackpacks:backpack_medium', 
      'usefulbackpacks:backpack_large'
    ]
    
    // Check each backpack type
    for (let backpack of backpackTypes) {
      let withBackpackCommand = `execute if entity @a[curios={item:{id:"${backpack}"},slot:["back"]}] run inventory_slots set_available @p 36`
      event.server.runCommandSilent(withBackpackCommand)
    }
    
    // Set to 9 slots for players without any backpack (run this last)
    let noBackpackCommand1 = `execute if entity @a[curios=!{item:{id:"usefulbackpacks:backpack_small"},slot:["back"]}] if entity @a[curios=!{item:{id:"usefulbackpacks:backpack_medium"},slot:["back"]}] if entity @a[curios=!{item:{id:"usefulbackpacks:backpack_large"},slot:["back"]}] run inventory_slots set_available @p 9`
    event.server.runCommandSilent(noBackpackCommand1)
  }
})
