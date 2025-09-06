async function upkeep() {
  let res = await fetch("/api/v1/health");
  console.log(`Checked health, upkeep ran : ${new Date().toString()}`);
  let data = await res.json();
  console.log(data);
}

let keepup = asyncHandler(async (req, res, next) => {
  setInterval(
    async () => {
      await upkeep();
      //   next();
    },
    1000 * 60
    // 1000 * 60 * 5
  );
  next();
}); //5min

export default keepup;
