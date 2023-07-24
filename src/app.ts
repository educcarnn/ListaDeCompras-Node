const express = require("express");
const helmet = require("helmet");

import purchaseListRoutes from "./routes/purchaseListRoutes";

const app = express();
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      fontSrc: ["'self'", "https://fonts.googleapis.com"],
    },
  })
);

app.use(express.json());

app.use("/api", purchaseListRoutes);

export default app;
