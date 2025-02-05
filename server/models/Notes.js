import mongoose, { Schema } from 'mongoose';

const NotesSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: false
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
});

export default mongoose.model("notes", NotesSchema);