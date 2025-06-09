import pathfs from "path";
import prependFile from "prepend-file";
import pkg from "../package.json";

const pluginOutputFile = pathfs.join(process.cwd(), pkg.outputFile);

const main = async () => {
    console.log(`> Patching build`);

    console.log(`> Adding META data to  output file`);
    await prependFile(
        pluginOutputFile,
        `// ==UserScript==
// @name         ${pkg.name}
// @description  ${pkg.description}
// @version      ${pkg.version}
// @author       ${pkg.author}
// @updateURL    ${pkg.updateURL}
// @downloadURL  ${pkg.downloadURL}
// @match        */*
// @grant        none
// ==/UserScript==
`
    );

    console.log("> Patching complete :)");
};

(async () => {
    await main();
    process.exit(0);
})();
