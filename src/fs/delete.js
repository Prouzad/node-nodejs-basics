import { rm } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const removeFileName = _dirname + "/files/fileToRemove.txt";

const remove = async () => {
  try {
    await rm(removeFileName);
  } catch {
    throw Error("FS operation failed");
  }
};

await remove();
