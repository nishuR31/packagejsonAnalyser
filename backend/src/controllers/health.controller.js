import ApiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import codes from "../utils/statusCodes.js";
let health = asyncHandler(async (req, res) => {
  res.status(codes.ok).json(
    new ApiResponse(` Server running, health is top notch!`, codes.ok, {
      Time: new Date().toLocaleString(),
      secure: req.secure,
      urls: {
        path:
          req.secure ? "https" : (
            "http" + "://" + req.host + req.baseUrl + req.url
          ),
        hostname: req.hostname,
        port: req.host.split(":")[req.host.split(":").length - 1],
        base: req.baseUrl,
        url: req.url,
      },
    })
  );
});

export default health;
