const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
const path = require("path");

app.use("/images", express.static(path.join(__dirname, "images")));

const products = [
  
    {
  id: 1,
  name: "Laptop",
  price: 50000,
  image: "http://localhost:5000/images/13-laptop-platinum-right-render-fy25_VP4-1260x795.avif"
},
  {
    id: 2,
    name: "Mobile Phone",
    price: 20000,
    image: "https://source.unsplash.com/300x300/?smartphone"
  },
  {
    id: 3,
    name: "Headphones",
    price: 3000,
    image: "https://source.unsplash.com/300x300/?headphones"
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 5000,
    image: "https://source.unsplash.com/300x300/?smartwatch"
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 2500,
    image: "https://source.unsplash.com/300x300/?bluetooth-speaker"
  },
  {
    id: 6,
    name: "Camera",
    price: 35000,
    image: "https://source.unsplash.com/300x300/?camera"
  },
  {
    id: 7,
    name: "Keyboard",
    price: 1500,
    image: "https://source.unsplash.com/300x300/?keyboard"
  },
  {
    id: 8,
    name: "Mouse",
    price: 800,
    image: "https://source.unsplash.com/300x300/?computer-mouse"
  },
  {
    id: 9,
    name: "Power Bank",
    price: 1800,
    image: "https://source.unsplash.com/300x300/?power-bank"
  },
  {
    id: 10,
    name: "Tablet",
    price: 25000,
    image: "https://source.unsplash.com/300x300/?tablet"
  },
  {
    id: 11,
    name: "Printer",
    price: 8500,
    image: "https://source.unsplash.com/300x300/?printer"
  },
  {
    id: 12,
    name: "Monitor",
    price: 12000,
    image: "https://source.unsplash.com/300x300/?monitor"
  },
  {
    id: 13,
    name: "Gaming Chair",
    price: 15000,
    image: "https://source.unsplash.com/300x300/?gaming-chair"
  },
  {
    id: 14,
    name: "USB Pen Drive",
    price: 700,
    image: "https://source.unsplash.com/300x300/?usb-drive"
  },
  {
    id: 15,
    name: "External Hard Disk",
    price: 6000,
    image: "https://source.unsplash.com/300x300/?external-hard-drive"
  },
  {
    id: 16,
    name: "Wi-Fi Router",
    price: 2800,
    image: "https://source.unsplash.com/300x300/?wifi-router"
  }
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});