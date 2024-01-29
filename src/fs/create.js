import { writeFile } from "fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const path = _dirname + "/files/fresh.txt";
const txt = "I am fresh and young";

const create = async () => {
  try {
    await writeFile(path, txt, { flag: "wx" });
  } catch (err) {
    throw Error("FS operation failed");
  }
};

await create();
