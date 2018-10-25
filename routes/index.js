const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // Do the logic here and then send response.
  res.status(200).json({
    success: true,
    message: "Get Route."
  })
});


router.post("/", (req, res) => {
  // Do the logic here for the post
  res.json(200).json({
    success: true,
    message: "Post Route"
  })
});

// Do further routes...

module.exports = router;