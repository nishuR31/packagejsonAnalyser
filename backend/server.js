import { configDotenv } from "dotenv";
configDotenv();

import app from "./src/config/app.js";
import connect from "./src/config/mongoDB.js";
import redis from "./src/config/redis.js";

const port = process.env.PORT || 4000;

async function fireUp() {
  await connect();
  await redis();
  app.listen(port, () => {
    console.log(`Server is warming up at: http://localhost:${port}`);
  });
}

fireUp();
