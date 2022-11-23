export default function verifier(req, res) {
  if (req.method !== "POST") {
    res.status(400);
  }
  res.status(200).json({ message: "OK" });
}
