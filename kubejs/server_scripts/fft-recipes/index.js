ServerEvents.recipes(event => {
    event.remove({ input: '#c:wood_sticks' })
    console.info('FFT Recipes: Removed all recipes containing c:wood_sticks')
})
