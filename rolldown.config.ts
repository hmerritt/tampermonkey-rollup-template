import { defineConfig } from "rolldown";
import pkg from "./package.json" assert { type: "json" };

// https://rollupjs.org/introduction/
export default defineConfig({
    input: "src/index.ts",
    output: {
        file: pkg.tampermonkey.outputFile,
        format: "iife",
        sourcemap: false,
        minify: true,
    },
    watch: {
        include: "src/**",
    },
    plugins: [],
});
