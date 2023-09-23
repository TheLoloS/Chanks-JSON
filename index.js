import { promises as fs } from "fs";
import data from "./data.json" assert { type: "json" };

const polishAlphabet = [
  "a",
  "b",
  "c",
  "ć",
  "d",
  "e",
  "ę",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "ł",
  "m",
  "n",
  "ń",
  "o",
  "ó",
  "p",
  "q",
  "r",
  "s",
  "ś",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "ż",
  "ź",
];

async function sortJson(a = 0) {
  if (data.length === 0) {
    return;
  }
  if (a === polishAlphabet.length) {
    return;
  }
  const resoult = data.filter((item) => {
    if (item.city[0].toLowerCase() === polishAlphabet[a]) {
      return item;
    }
  });
  try {
    console.log(polishAlphabet[a]);
    if (resoult.length === 0) {
      sortJson(a + 1);
      return;
    }

    await fs.writeFile(
      `./chunks/${polishAlphabet[a]}.json`,
      JSON.stringify(resoult),
    );
    console.log(
      "File saved successfully! " +
        `./chunks/${polishAlphabet[a]}.json with ${resoult.length} items`,
    );
    sortJson(a + 1);
  } catch (err) {
    console.log(err);
  }
}

sortJson();
