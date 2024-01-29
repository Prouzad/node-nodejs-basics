import { pipeline } from "stream/promises";

import { createUnzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToCompress = __dirname + "/files/archive.gz";
const targetFile = __dirname + "/files/fileToCompress.txt";

const decompress = async () => {
  try {
    await pipeline(
      createReadStream(fileToCompress),
      createUnzip(),
      createWriteStream(targetFile)
    );
  } catch (err) {
    throw Error(err);
  }
};

await decompress();
