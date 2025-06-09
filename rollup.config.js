// @ts-nocheck
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { minify } from 'rollup-plugin-swc-minify';
import pkg from "./package.json" assert { type: "json" };

// https://rollupjs.org/introduction/
export default {
	input: 'src/index.ts',
	output: {
		file: pkg.outputFile,
		format: 'iife',
		sourcemap: false
	},
	plugins: [
		typescript(),
		resolve(),
		commonjs(),
		minify(),
	],
	define: {
		"process.env": {},
	},
};
