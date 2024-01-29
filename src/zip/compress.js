import { pipeline } from "stream/promises";

import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";

import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToCompress = __dirname + "/files/fileToCompress.txt";
const targetFile = __dirname + "/files/archive.gz";

const compress = async () => {
  try {
    await pipeline(
      createReadStream(fileToCompress),
      createGzip(),
      createWriteStream(targetFile)
    );
  } catch (err) {
    throw Error(err);
  }
};

await compress();
