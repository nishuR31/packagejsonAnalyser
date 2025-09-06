import { createClient } from "redis";
let red;
export default async function redis() {
  try {
    red = createClient({ url: process.env.REDIS });
    red.connect();
    red.on("error", (err) => {
      console.log(`Error while connecting redis:${err}`);
    });
    console.log("Redis installed.")
  } catch (err) {
    console.log(`Error while connecting redis:${err}`);
  }
}

export { red };
