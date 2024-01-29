import { readdir } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const pathToRead = _dirname + "/files";

const list = async () => {
  try {
    const filesInDir = await readdir(pathToRead);
    console.log(filesInDir);
  } catch {
    throw Error("FS operation failed");
  }
};

await list();
