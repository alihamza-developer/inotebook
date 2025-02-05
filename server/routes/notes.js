import express from 'express';
import { verifyUser } from "../middleware/auth.js";
import Note from "../models/Notes.js";

const router = express.Router();

// Add Note
router.post("/add", verifyUser, async (req, res) => {

    let { title, content } = req.body;
    if (!title.length && !content.length) return res.status(400).json({ status: 'error', message: "Fill atleast one field!" });

    try {
        let response = await Note.create({
            title,
            content,
            user: req.user.id
        });

        // Get note id 
        let id = response._id.toString();

        return res.status(200).json({
            id,
            message: "Note added successfully",
            status: "success"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            status: "error"
        });
    }
});

// Update Note
router.put("/update", verifyUser, async (req, res) => {

    let { title, content, _id } = req.body;
    console.log(req.body);
    if (!_id) return res.status(400).json({ message: "ID is required" });

    try {

        let note = {};
        if (title) note.title = title;
        if (content) note.content = content;

        await Note.findOneAndUpdate({ _id }, note);
        return res.status(200).json({
            message: "Note updated successfully",
            status: "success"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            status: "error"
        });
    }


});

// Delete Note
router.delete("/delete/:id", verifyUser, async (req, res) => {

    let { id } = req.params;
    if (!id) return res.status(400).json({ message: "ID is required" });

    try {
        await Note.findOneAndDelete({ _id: id }); // Delete 
        return res.status(200).json({
            message: "Note deleted successfully",
            status: "success"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            status: "error"
        });
    }
});

// Get Single Note
router.get("/get", verifyUser, async (req, res) => {
    try {
        console.log(req.query.id);
        let note = await Note.findById(req.query.id).select("-__v -user");
        if (!note) return res.status(404).json({
            status: "error",
            message: "No note found",
        });

        return res.status(200).json({
            status: "success",
            note
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            status: "error"
        });
    }
});

// Get All Notes
router.get("/getAll", verifyUser, async (req, res) => {
    try {
        let notes = await Note.find({ user: req.user.id }).select("-__v -user");
        return res.status(200).json({
            status: "success",
            notes
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            status: "error"
        });
    }
});

export default router;