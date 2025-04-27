import { createWriteStream } from "fs";
import { resolve } from "path";

const { stdin, stdout } = process;
const __dirname = import.meta.dirname;
const filesFolderPath = resolve(__dirname, "files");
const fileToWrite = resolve(filesFolderPath, "fileToWrite.txt");

const write = async () => {
  const stream = createWriteStream(fileToWrite);

  stdout.write("Write some text \n");

  stdin.on("data", (chunk) => {
    stream.write(chunk);
  });

  process.on("SIGINT", () => {
    stream.end();
    console.log("Data recorded");
  });
};

await write();
