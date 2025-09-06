import codes from "../utils/statusCodes.js";

import asyncHandler from "../utils/asyncHandler.js";
import path from "path";
import { fileURLToPath } from "url";
let help = asyncHandler(async (req, res) => {
  return res
    .status(codes.ok)
    .sendFile(
      path.join(
        path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          "../../public"
        ),
        "help.html"
      )
    );
});

export default help;
