import { createWriteStream } from "fs";
import { stdin } from "node:process";
import { pipeline } from "stream/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const pathToFile = _dirname + "/files/fileToWrite.txt";

const write = async () => {
  try {
    const writeFileStream = createWriteStream(pathToFile, { flags: "a" });
    await pipeline(stdin, writeFileStream);
  } catch (err) {
    throw Error(err);
  }
};

await write();
