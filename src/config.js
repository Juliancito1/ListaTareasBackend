import "dotenv/config";

export const MONGODB_URI =process.env.MONGODB_URI || "mongodb://glocalhost:27017/tareas_db";