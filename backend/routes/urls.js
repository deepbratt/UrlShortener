const router = require("express").Router();
const mongoose = require("mongoose");
const Urls = mongoose.model("Urls");

router.post("/get", async (req, res) => {
  const urls = await Urls.find({ ShortUrl: req.body.id });
  res.send(urls);
});

router.get("/getRecent", async (req, res) => {
  const urls = await Urls.find().sort({ _id: -1 }).limit(5);
  res.send(urls);
});

router.post("/add", async (req, res) => {
  const urls = await Urls.find({ OriginalUrl: req.body.originalUrl });

  console.log(urls);
  if (urls.length > 0) {
    res.send(urls[0]);
  } else {
    const newUrl = new Urls();
    newUrl.OriginalUrl = req.body.originalUrl;
    newUrl.ShortUrl = req.body.shortUrl;
    await newUrl.save();
    res.send(newUrl);
  }
});

module.exports = router;
