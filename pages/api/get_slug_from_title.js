import connectToDatabase from "@/utils/db";
import Post from "@/models/Post";
import Category from "@/models/Category";
import Topic from "@/models/Topic";

export default async function handler(req, res) {
  const { categoryName = ""} = req.query; // ✅ Get page & limit from query params
  const { authorization } = req.headers;
//   const skip = (page - 1) * limit; 


  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  if (authorization !== `Bearer ${process.env.API_SECRET_KEY}`) {
    return res.status(403).json({ error: "Forbidden: Invalid API Key" });
  }
  try {
    // Connect to MongoDB
    await connectToDatabase();
const slug = await Category.find(
      { 
        title: { $regex: categoryName, $options: "i" } 
      }
    )
    .limit(10)
    .select("slug");  

    return res.status(200).json(slug);
} catch (error) {
  console.error("Error fetching posts:", error);
  return res.status(500).json({ error: "Internal Server Error" });
}
}