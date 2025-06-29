# Curios 
execute if entity @a[curios=!{item:{id:"usefulbackpacks:backpack_small"},slot:["back"]}] run inventory_slots set_available @p 9
execute if entity @a[curios={item:{id:"usefulbackpacks:backpack_small"},slot:["back"]}] run inventory_slots set_available @p 36

# Accessories 
# execute as @a if data entity @s neoforge:attachments.accessories:inventory_holder.accessories_containers.back.items[{id:"usefulbackpacks:backpack_small"}] run inventory_slots set_available @p 36
# execute as @a unless data entity @s neoforge:attachments.accessories:inventory_holder.accessories_containers.back.items[{id:"usefulbackpacks:backpack_small"}] run inventory_slots set_available @p 9

