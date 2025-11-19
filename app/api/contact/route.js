import mongoose from "mongoose";

const MONGO = process.env.MONGO_URI;

// Keep connection cached
let conn = null;

async function connectDB() {
    if (conn) return;
    conn = await mongoose.connect(MONGO);
}

// Define schema
const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
})

// Prevent overwrite error
const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export async function POST(req) {
    try {
        await connectDB();

        const body = await req.json();
        const saved = await Contact.create(body);

        return Response.json({ success: true, data: saved })
    } catch (error) {
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}