import resolve from 'rollup-plugin-node-resolve';
import analyze from 'rollup-analyzer-plugin';

const opts = {limit: 5};

function glsl() {

    return {

        transform(code, id) {

            if (/\.glsl$/.test(id) === false) return;

            var transformedCode = 'export default ' + JSON.stringify(
                            code
                                    .replace(/[ \t]*\/\/.*\n/g, '') // remove //
                                    .replace(/[ \t]*\/\*[\s\S]*?\*\//g, '') // remove /* */
                                    .replace(/\n{2,}/g, '\n') // # \n+ to \n
                    ) + ';';
            return {
                code: transformedCode,
                map: {mappings: ''}
            };

        }

    };

};

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'iife'
    },
    name: 'TreeShakedThreeJs',
    plugins: [
        glsl(),
        resolve({
            jsnext: true,
            main: false,
            browser: true,
            module: true
        }),
        analyze(opts)
    ]
};
