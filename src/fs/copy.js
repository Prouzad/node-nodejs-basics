import { mkdir, cp } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { checkDirectoryExists } from "../lib/checkExist.js";
const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const originalPath = _dirname + "/files";
const copyFolderPath = _dirname + "/files_copy";

const copy = async () => {
  try {
    await checkDirectoryExists(originalPath);
    await mkdir(copyFolderPath);
    cp(originalPath, copyFolderPath, { recursive: true });
  } catch (err) {
    throw Error("FS operation failed");
  }
};

await copy();
