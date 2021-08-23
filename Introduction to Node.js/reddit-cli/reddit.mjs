#! /usr/bin/env node

console.log("Welcome to the Reddit CLI!");

import fetch from "node-fetch";
import open from "open";
import yargs from "yargs";

const { argv } = yargs(process.argv);
// console.log(argv);

const res = await fetch(`https://reddit.com/.json`);
const data = await res.json();

// console.log(data);

const randomPost = data.data.children[Math.floor(Math.random() * 25)];

// console.log(randomPost);

if (argv.print) {
    console.log(
        `title: ${randomPost.data.title}\ndescription: ${randomPost.data.selftext}`
    );
}

if (argv.open) {
    open(randomPost.data.url);
}
