// script.js

import init, { add_image } from './WASM_WEB.js';

// Initialize the WASM module
async function run() {
    await init();

    // Call the Rust function to add an image dynamically
    try {
        add_image('./image/1.png', 'Dynamic Image');
        add_image('./image/2.png', 'Dynamic Image');
        add_image('./image/3.png', 'Dynamic Image');
        add_image('./image/4.png', 'Dynamic Image');
        add_image('./image/5.png', 'Dynamic Image');
        add_image('./image/6.png', 'Dynamic Image');
        add_image('./image/7.png', 'Dynamic Image');
        add_image('./image/8.png', 'Dynamic Image');
        add_image('./image/9.png', 'Dynamic Image');
        add_image('./image/10.png', 'Dynamic Image');
    } catch (error) {
        console.error('Error adding image:', error);
    }
}

run();
