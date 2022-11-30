const express = require("express");
const bodyparser=require("body-parser")
const mongoose = require("mongoose");
const app = express();
app.use(bodyparser.json())
const User = require("./models/user");
app.get("/", (req, res) => {
  res.send("Hello");
});

mongoose.connect("mongodb://localhost:27017/PRT");
// ---get all task
app.get("/get/v1/task", async (req, res) => {
  try {
    const users = await User.find(req.body);
    res.status(200).json({
      status: "Succes",
      data: users,
    });
  } catch (e) {
    res.status(404).json({
      status: "Failed",
      message: e.message,
    });
  }
});
 


// post all task---------



app.post("/post/v1/task", async (req, res) => {
  try {
    const users = await User.create(req.body);
    res.status(200).json({
      status: "Succes",
      data: users,
    });
  } catch (e) {
    res.status(404).json({
      status: "Failed",
      message: e.message,
    });
  }
});

//-----------get specific id
app.get("/get/v1/task/:id", async (req, res) => {
    try {
      const users = await User.findOne({_id:req.body.id});
      res.status(200).json({
        status: "Succes",
        data: users,
      });
    } catch (e) {
      res.status(404).json({
        status: "Failed",
        message: e.message,
      });
    }
  });

  //------------------delete a tsk

  app.delete("/delete/v1/task/:id", async (req, res) => {
    try {
      const users = await User.deleteOne({_id:req.body.id});
      res.status(200).json({
        status: "Succes",
        data: users,
      });
    } catch (e) {
      res.status(400).json({
        status: "Failed",
        message: e.message,
      });
    }
  });

  ///------------update one
  app.put("/post/v1/task/:id", async (req, res) => {
    try {
      const users = await User.updateOne({_id:req.body.id});
      res.status(204).json({
        status: "Succes",
        data: users,
      });
    } catch (e) {
      res.status(400).json({
        status: "Failed",
        message: e.message,
      });
    }
  });

  // create many
  app.post("/post/v1/task", async (req, res) => {
    try {
      const users = await User.createCollection("req.body");
      res.status(200).json({
        status: "Succes",
        data: users,
      });
    } catch (e) {
      res.status(400).json({
        status: "Failed",
        message: e.message,
      });
    }
  });

app.listen(3000, () => console.log("server is up at 3000 port"));
