import { promises } from "fs";
import { resolve } from "path";

const __dirname = import.meta.dirname;
const filesFolderPath = resolve(__dirname, "files");
const fileToRemove = resolve(filesFolderPath, "fileToRemove.txt");

const remove = async () => {
  try {
    await promises.access(fileToRemove);

    await promises.unlink(fileToRemove);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      throw new Error();
    }
  }
};

await remove();
