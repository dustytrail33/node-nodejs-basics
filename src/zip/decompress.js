import { pipeline } from "stream/promises";
import { createGunzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { resolve } from "path";

const __dirname = import.meta.dirname;
const filesFolderPath = resolve(__dirname, "files");
const fileToDecompress = resolve(filesFolderPath, "archive.gz");
const decompressedFile = resolve(filesFolderPath, "fileToCompress.txt");

const decompress = async () => {
  const readStream = createReadStream(fileToDecompress);
  const gunzipStream = createGunzip();
  const writeStream = createWriteStream(decompressedFile);

  try {
    await pipeline(readStream, gunzipStream, writeStream);
    console.log("File compressed successfully!");
  } catch (error) {
    console.error("Compression failed:", error);
  }
};

await decompress();
