import { readFile } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const fileToRead = _dirname + "/files/fileToRead.txt";

const read = async () => {
  try {
    const readInfo = await readFile(fileToRead, { encoding: "utf-8" });
    console.log(readInfo);
  } catch {
    throw Error("FS operation failed");
  }
};

await read();
