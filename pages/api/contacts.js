import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    const contactMediums = [
      {
        medium: "github",
        username: "kiranjyot",
        link: "https://github.com/kiranjyot",
      },
      {
        medium: "email",
        username: "kiranjyot.gill@cfa.harvard.edu",
        link: "mailto:kiranjyot.gill@cfa.harvard.edu",
      },
      {
        medium: "linkedin",
        username: "kiranjyotgill",
        link: "https://www.linkedin.com/in/kiranjyot-gill-393bb7ba?original_referer=https%3A%2F%2Fwww.google.com%2F",
      },
    ];

    res.json(contactMediums);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}
