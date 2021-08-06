import { readFile } from "fs/promises";

process.on("uncaughtException", (e) => {
    console.log("Uncaught Error:", e);
});

const result = await readFile(new URL("app.mjs", import.meta.url), "utf-8");

// ------- Promises without await
// readFile(new URL("app.mjs", import.meta.url), "utf-8").catch((e) =>
//     console.log("Error!")
// );

// ------- Promises with await
// try {
//     await readFile(new URL("app.mjs", import.meta.url), "utf-8");
// } catch (e) {
//     throw e;
// }

// ------- No promises, useing 'fs'
// import { readFile } from "fs";

// readFile(new URL("error.mjs", import.meta.url), "utf-8", (err, data) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log(data);
//     }
// });
