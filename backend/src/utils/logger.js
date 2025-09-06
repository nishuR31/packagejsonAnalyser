let logger = (req, res, next) => {
  console.log({
    method: req.method,
    secure: req.secure,
    url: req.host + req.url,
    time: new Date().toLocaleString(),
    param: req.params,
    query: req.query,
    rateLimit: {
      limit: res.req.rateLimit.limit,
      used: res.req.rateLimit.used,
      remaining: res.req.rateLimit.remaining,
      reset: (res.req.rateLimit.resetTime = new Date(
        res.req.rateLimit.resetTime
      ).toLocaleString()),
    },
  });
  next();
};

export default logger;

// const logger = (req, res, next) => {
//   console.log({
//     method: req.method,
//     secure: req.secure,
//     url: `${req.hostname}${req.originalUrl}`,
//     time: new Date().toLocaleString(),
//     param: req.params,
//     rateLimit: req.rateLimit, // access directly from `req` if middleware added it
//     ms: res.getHeader("X-Response-Time") || "N/A", // use header if response time tracking is enabled
//   });
//   next();
// };

// export default logger;
