import ApiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import codes from "../utils/statusCodes.js";
let health = asyncHandler(async (req, res) => {
  res
    .status(codes.ok)
    .json(new ApiResponse("Server running, health is top notch", codes.ok));
});

export default health;
