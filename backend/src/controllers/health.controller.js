import ApiResponse from "../utils/apiResponse";
import asyncHandler from "../utils/asyncHandler";
import codes from "../utils/statusCodes";
let health = asyncHandler(async (req, res) => {
  res
    .status(codes.ok)
    .json(new ApiResponse("Server running, health is top notch", codes.ok));
});

export default health;
