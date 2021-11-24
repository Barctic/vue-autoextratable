import buble from 'rollup-plugin-buble'; // Transpile/polyfill with reasonable browser support
export default {
    input: 'src/component.js', // Path relative to package.json
    output: {
        name: 'Autoextratable',
        exports: 'default',
    },
    plugins: [
        buble(), // Transpile to ES5
    ],
};