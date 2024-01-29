import { env } from "process";
const parseEnv = () => {
  const str = [];
  Object.entries(env).forEach((item) => {
    if (Array.isArray(item) && item.join("").startsWith("RSS_")) {
      const key = item[0] ? item[0] : null;
      const value = item[1] ? item[1] : null;
      str.push(`${key}=${value}`);
    }
  });
  return console.log(str.join("; "));
};

parseEnv();
