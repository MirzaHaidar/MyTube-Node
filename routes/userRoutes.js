const { Router } = require("express");
const userController = require("../controllers/userController");
const videoController = require("../controllers/videoController");

const router = Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);

router.get("/videos", videoController.getAllVideos);
router.get("/videos/:id", videoController.getVideoById);
router.post("/videos", videoController.createVideo);
router.put("/videos/:id", videoController.updateVideo);
router.delete("/videos/:title", videoController.deleteVideo);
module.exports = router;
