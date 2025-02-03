import mongoose, { Schema } from 'mongoose';

const NotesSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    userId: {
        type: Number,
        required: true
    }
});

export default mongoose.model("notes", NotesSchema);