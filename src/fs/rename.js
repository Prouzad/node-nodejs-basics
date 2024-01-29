import { rename as renameMethod } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const originalFileName = _dirname + "/files/wrongFilename.txt";
const newFileName = _dirname + "/files/propperFilename.md";

const rename = async () => {
  try {
    await renameMethod(originalFileName, newFileName);
  } catch {
    throw Error("FS operation failed");
  }
};

await rename();
