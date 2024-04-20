import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        login: {
            type: String,
            required: true,
            unique: true,
        },
        avatar_url: String,
        followers_url: String,
        following_url: String,
        repos_url: String,
        email: String,
        type: String,
        name: String,
        company: String,
        blog: String,
        location: String,
        bio: String,
        public_repos: Number,
        friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

export default User;
