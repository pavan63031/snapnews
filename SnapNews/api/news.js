export default async function handler(req, res) {
  const category = req.query.category || "general";
  const apiKey = process.env.VITE_NEWS_API_KEY;

  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
