import { Worker, isMainThread } from "node:worker_threads";
import * as os from "os";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const path = __dirname + "/worker.js";
const cpoCount = os.cpus().length;

const performCalculations = async () => {
  if (isMainThread) {
    const resultArray = [];
    let count = 0;
    let worker;
    while (count !== cpoCount - 1) {
      worker = new Worker(path);
      worker.postMessage({ num: 10 + count });
      worker.on("error", (err) => {
        resultArray.push({
          status: "Error",
          data: null,
        });
      });
      worker.on("message", (data) => {
        if (data instanceof Error) {
          resultArray.push({
            status: "Error",
            data: null,
          });
        } else {
          resultArray.push({
            status: "Resolved",
            data,
          });
        }
      });
      count++;
      if (count === cpoCount - 1) {
        worker.on("exit", () => {
          const arr = resultArray.map((item) => {
            return { status: item.status, data: item.data };
          });
          console.log(arr);
        });
      }
    }
  }
};

await performCalculations();
