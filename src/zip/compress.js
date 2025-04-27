import { pipeline } from "stream/promises";
import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { resolve } from "path";

const __dirname = import.meta.dirname;
const filesFolderPath = resolve(__dirname, "files");
const fileToCompress = resolve(filesFolderPath, "fileToCompress.txt");
const compressedFile = resolve(filesFolderPath, "archive.gz");

const compress = async () => {
  const readStream = createReadStream(fileToCompress);
  const gzipStream = createGzip();
  const writeStream = createWriteStream(compressedFile);

  try {
    await pipeline(readStream, gzipStream, writeStream);
    console.log("File compressed successfully!");
  } catch (error) {
    console.error("Compression failed:", error);
  }
};

await compress();
