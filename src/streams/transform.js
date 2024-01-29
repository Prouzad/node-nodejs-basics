import { Transform } from "stream";
import { stdin, stdout } from "node:process";
import { pipeline } from "stream/promises";

const transform = async () => {
  try {
    const transformReverse = new Transform({
      transform(chunk, enc, callback) {
        const str = chunk.toString().trim().split("").reverse().join("");
        callback(null, str);
      },
    });
    await pipeline(stdin, transformReverse, stdout);
  } catch (err) {
    throw Error(err);
  }
};

await transform();
