import { createReadStream } from "fs";
import { stdout } from "node:process";
import { pipeline } from "stream/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const pathToFile = _dirname + "/files/fileToRead.txt";

const read = async () => {
  try {
    const streamToRead = createReadStream(pathToFile);
    await pipeline(streamToRead, stdout);
  } catch (err) {
    throw Error(err);
  }
};

await read();
