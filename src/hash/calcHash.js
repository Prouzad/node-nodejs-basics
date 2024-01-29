import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const fileToCalc = "fileToCalculateHashFor.txt";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const path = join(_dirname, "files");
const pathFile = join(path, fileToCalc);

const calculateHash = async () => {
  try {
    const fileContent = await readFile(pathFile);
    const hash = createHash("sha256").update(fileContent).digest("hex");

    return console.log(hash);
  } catch {
    throw Error("File not found");
  }
};

await calculateHash();
