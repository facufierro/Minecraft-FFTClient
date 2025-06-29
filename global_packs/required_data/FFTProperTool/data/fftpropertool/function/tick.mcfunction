# FFTProperTool Tick Function
# Remove any log items from players who have empty hands (preventing log breaking)

execute as @a[nbt=!{SelectedItem:{}}] run clear @s #minecraft:logs
execute as @a[nbt=!{SelectedItem:{}}] if items entity @s inventory.* #minecraft:logs run title @s actionbar {"text":"You need a tool to break logs!","color":"red"}
