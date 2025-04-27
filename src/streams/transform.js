import { Transform, pipeline } from "stream";

const { stdin, stdout } = process;

const reverseTransform = new Transform({
  transform(chunk, _, callback) {
    const reversed = chunk.toString().split("").reverse().join("");
    callback(null, reversed);
  },
});

const transform = async () => {
  stdout.write("Write some text \n");

  pipeline(stdin, reverseTransform, stdout, (err) => {
    if (err) {
      throw err;
    }
  });
};

await transform();
