const parseArgs = () => {
  const argsArray = process.argv;
  const argsEntries = argsArray.reduce((prev, curr, idx, arr) => {
    if (curr.startsWith("--")) {
      return [...prev, `${curr.replace("--", "")} is ${arr[idx + 1]}`];
    }

    return prev;
  }, []);

  console.log(argsEntries.join(", "));
};

parseArgs();
