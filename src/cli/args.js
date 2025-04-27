const parseArgs = () => {
  const args = process.argv.slice(2);

  const argsList = args
    .reduce((list, arg, index) => {
      if (arg.startsWith("--")) {
        const prop = arg.replace("--", "");
        const value = args[index + 1];

        list.push(`${prop} is ${value}`);
      }
      return list;
    }, [])
    .join(", ");
  console.log(argsList);
};

parseArgs();
