const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.post("/newsletter", async (req, res) => {
  const { email_address } = req.body;

  const data = {
    members: [{ email_address, status: "subscribed" }],
  };

  const jsonData = JSON.stringify(data);
  const apiKey = process.env.REACT_APP_MAILCHIMP_API;
  const encodedApiKey = Buffer.from(`apikey:${apiKey}`).toString("base64");


  try {
    const response = await axios.post(
      "https://us21.api.mailchimp.com/3.0/lists/f3efb70b2a",
      jsonData,
      {
        headers: {
          Authorization: `Basic ${encodedApiKey}`,
          "Content-Type": "application/json",
        },
      }
    );
    res.send({ success: true });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
});

app.listen(5000, () => console.log("Server Running on port 5000"));
