import scss from 'rollup-plugin-scss';

export default {
    input: 'src/less/main.js',
    output: {
        file: 'scripts/main.min.js',
        format: 'esm'
    },
    plugins: [
        scss({
            output: "css/style.css",
            outputStyle: "compressed",
            failOnError: true,
            runtime: require("sass"),
        }),
    ],
};