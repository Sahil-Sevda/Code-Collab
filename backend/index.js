import express from "express";
import { connectDB } from "./db.js";
import prisma from "./prisma.client.js";
import cors from "cors";
import editorRoute from "./routes/editor.route.js";
import { ENV } from "./configs/constant.js";
const app = express();
app.use(express.json());
app.use("/code", editorRoute);

const PORT = ENV.APP_PORT || 4000;
app.get("/", async (req, res, next) => {
  res.json("hello ");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
