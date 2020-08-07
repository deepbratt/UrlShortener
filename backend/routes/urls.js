const router = require("express").Router();
const mongoose = require("mongoose");
const Urls = mongoose.model("Urls");

router.post("/get", async (req, res) => {
  const urls = await Urls.find({ _id: req.body.id });
  res.send(urls);
});

router.get("/getRecent", async (req, res) => {
  const urls = await Urls.find();
  res.send(urls);
});

router.post("/add", async (req, res) => {
  const newUrl = new Urls();
  newUrl.OriginalUrl = req.body.originalUrl;
  newUrl.ShortUrl = req.body.shortUrl;

  await newUrl.save((err, res) => {
    if (err) {
      res.write(err);
    } else {
      console.log(res);
    }
  });
  res.send(newUrl);
});

module.exports = router;
