// import axios from "axios";
// async function checkHealth() {
//   try {
//     const res = await axios.get("http://localhost:3000/api/v1/health");
//     console.log(
//       ` Health check at ${new Date().toLocaleTimeString()}`,
//       res.data
//     );
//   } catch (err) {
//     console.error(
//       ` Health check failed at ${new Date().toLocaleTimeString()}:`,
//       err.message,
//       err.response?.status
//     );
//   }
// }

// function run(interval = 1000 * 60 * 5) {
//   console.log("hehe");
//   checkHealth(); // immediate run
//   const inter = setInterval(checkHealth, interval);
//   return () => clearInterval(inter);
// }

// run(1000 * 60 * 1);

import cron from "node-cron";
import axios from "axios";

export default async function cronJob() {
  try {
    cron.schedule(" 5 * * * *", async () => {
      try {
        let res = await axios.get("http://localhost:3000/api/v1/health");
        if (res.data.success) {
          console.log(`Cron done ran, successfully checked health`);
          console.table(res.data);
        }
      } catch (err) {
        console.error(`Cron failed checking health:${err}`);
      }
    });
  } catch (err) {
    console.error(`Fatal error in health cron job : ${err}`);
  }
}

// 👇 Prevent Node from exiting if no server is running
