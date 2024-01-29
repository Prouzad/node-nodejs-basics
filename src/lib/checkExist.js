import { stat } from "fs/promises";

export async function checkFileExists(file) {
  try {
    const result = await stat(file);
    return result.isFile();
  } catch (err) {
    err.code === "ENOENT" ? "false" : err;
  }
}

export async function checkDirectoryExists(path) {
  try {
    const result = await stat(path);
    return result.isDirectory();
  } catch (err) {
    if (err.code === "ENOENT") {
      throw Error("FS operation failed");
    } else {
      throw Error(err);
    }
  }
}
