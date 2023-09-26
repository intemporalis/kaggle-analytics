import express from "express";
import cors from "cors";

// data import
import channels from './data/youtube/clean_data.json' assert { type: "json"};

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// API endpoints

// need endpoint to serve ad-hoc subscriber time series data
// use ["subscribers"] field as an endpoint and reverse interpolate
// random walk backwards using an assumed average/std. dev. within a prob. density function
// each day's gain/loss of subscribers is calculated as a delta % return from the last
// this will model subscriber growth/loss over time organically

// endpoints to serve raw channel data, can be used for server-side pagination

// GET CHANNELS
app.get("/api/channels", (req, res) => {
  res.json(channels);
});

// GET CHANNEL
app.get("/api/channel/:id", (req, res) => {
  const channel = channels.find((channel) => channel.rank === parseInt(req.params.id));
  res.json(channel);
});


// endpoint for channel images
// /api/channels/image/channel_pic1.jpeg

app.listen(8800, () => {
  console.log("Connected to backend.");
});
