const { Blog, validate, upload } = require("../models/blog");
const express = require("express");
const nodemailer = require("nodemailer"); // Don't forget to require nodemailer
const router = express.Router();
const ExcelJS = require("exceljs");
const path = require("path");
const auth = require("../middleware/auth");

router.get("/", async (req, res) => {
  const blogs = await Blog.find().sort("name");
  res.send(blogs);
});

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const uploadedFile = req.file;

    if (!uploadedFile) {
      return res
        .status(400)
        .send("Please upload an image using 'image' field.");
    }

    const attachmentFileUrl = `${req.protocol}://${req.get("host")}/uploads/${
      uploadedFile.filename
    }`;

    // Extract additional fields from the request body
    const { title, type, author, description } = req.body;

    const blog = new Blog({
      title,
      type,
      author,
      description,
      image: attachmentFileUrl,
    });

    await blog.save();
    res.status(201).send(blog);
  } catch (error) {
    console.error("Error during blog creation:", error);
    res.status(500).send("An error occurred while creating the blog.");
  }
});
router.delete("/:id", auth, async (req, res) => {
  try {
    // Find the blog by ID and delete it
    const blog = await Blog.findByIdAndRemove(req.params.id);

    if (!blog) {
      return res.status(404).send("blog with the given ID was not found.");
    }

    res.send(blog);
  } catch (error) {
    return res.status(500).send("An error occurred while deleting the blog.");
  }
});

// ... (previous imports and code)

router.get("/:id", async (req, res) => {
  try {
    // Find the blog by ID
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).send("blog with the given ID was not found.");
    }

    res.send(blog);
  } catch (error) {
    return res.status(500).send("An error occurred while fetching the blog.");
  }
});

// Delete all blogs
router.delete("/", auth, async (req, res) => {
  try {
    // Delete all blogs
    const result = await blog.deleteMany();

    if (result.deletedCount === 0) {
      return res.status(404).send("No blogs found to delete.");
    }

    res.send(`Deleted ${result.deletedCount} blogs.`);
  } catch (error) {
    return res.status(500).send("An error occurred while deleting blogs.");
  }
});

module.exports = router;
