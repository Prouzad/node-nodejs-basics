import { parentPort } from "worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  parentPort.once("message", (value) => {
    const result = nthFibonacci(value.num);
    parentPort.postMessage({ data: result });
  });
};

sendResult();
