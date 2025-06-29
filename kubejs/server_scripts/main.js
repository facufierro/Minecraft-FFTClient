const properTools = require('./fft-proper-tools/index.js')
const backpackInventory = require('./fft-backpack-inventory/index.js')

console.info('FFT Client: Loading server scripts...')

console.info('FFT Client: Initializing modules...')
properTools.initialize()
backpackInventory.initialize()

console.info('FFT Client: All modules loaded successfully!')