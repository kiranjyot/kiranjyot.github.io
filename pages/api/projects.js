import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    const projects = [
      {
        name: "PyTorch GW CNN",
        description:
          "Convolutional Neural Network trained on both BBH, BNS, NSBH and CCSN waveforms in order to distinguish GW signals buried in real LIGO noise.",
        stack: ["Typescript", "NextJS", "Rust", "WASM"],
        link: "https://space-apps-eosin.vercel.app",
        image: "ndss.png",
        largeImage: "liberty-lg.png",
      },
      {
        name: "CCSNe Waveform Analysis",
        description:
          "Toolbox designed to ",
        stack: ["Typescript", "NextJS"],
        link: "https://new-delhi-space-society.github.io/",
        image: "ndss.png",
        largeImage: "ndss-lg.png",
      },
      {
        name: "Constraining the Time of GW Emission from CCSNe",
        description:
          "Constrain the time of GW emission for a CCSN candidate using optical multi-band light curve data.",
        stack: ["PHP", "Laravel", "Typescript", "ReactJS"],
        link: "https://dpsgoethequiz.com",
        image: "cognizer.png",
      },
    ];

    return res.json(projects);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}
