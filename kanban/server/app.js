const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
// 使用中间件解析 JSON 请求体
app.use(bodyParser.json());

// 获取taskDone数据
app.get("/api/taskDone", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  fs.readFile("public/taskDone.json", "utf-8", (err, data) => {
    if (err) {
      res.send({
        code: "0",
        msg: "获取数据失败",
        data: [],
      });
      throw err;
    }
    const todos = JSON.parse(data.toString());
    console.log("读取出来的todos是:", todos);
    res.send({
      code: "1",
      msg: "获取数据成功",
      data: todos,
    });
  });
});

// 获取taskNotDone数据
app.get("/api/taskNotDone", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  fs.readFile("public/taskNotDone.json", "utf-8", (err, data) => {
    if (err) {
      res.send({
        code: "0",
        msg: "获取数据失败",
        data: [],
      });
      throw err;
    }
    const todos = JSON.parse(data.toString());
    console.log("读取出来的todos是:", todos);
    res.send({
      code: "1",
      msg: "获取数据成功",
      data: todos,
    });
  });
});

//写入数据
app.post("/api/taskNotDone/create", (req, res) => {
  let dataList = [];
  //先读取文件
  try {
    dataList = JSON.parse(fs.readFileSync("public/taskNotDone.json", "utf8"));
    dataList.push(req.body);
  } catch (error) {
    console.log("读取文件出错误:", error);
    throw error;
  }

  console.log("@@@dataList:", dataList);

  //在写文件
  fs.writeFile("public/taskNotDone.json", JSON.stringify(dataList), (err) => {
    if (err) {
      console.log(err);
      res.send({
        code: "0",
        msg: "保存数据失败",
      });
      throw err;
    }
    console.log("JSON文件保存成功!!!");
    res.send({
      code: "1",
      msg: "保存数据成功",
    });
  });
});

//写入taskDone数据
app.post("/api/taskDone/create", (req, res) => {
  let dataList = [];
  //先读取文件
  try {
    dataList = JSON.parse(fs.readFileSync("public/taskDone.json", "utf8"));
    dataList.push(req.body);
  } catch (error) {
    console.log("读取文件出错误:", error);
    throw error;
  }

  console.log("@@@dataList:", dataList);

  //在写文件
  fs.writeFile("public/taskDone.json", JSON.stringify(dataList), (err) => {
    if (err) {
      console.log(err);
      res.send({
        code: "0",
        msg: "保存数据失败",
      });
      throw err;
    }
    console.log("JSON文件保存成功!!!");
    res.send({
      code: "1",
      msg: "保存数据成功",
    });
  });
});

//删除todo
app.post("/api/taskNotDone/delete/:id", (req, res) => {
  console.log("------------------------------");
  console.log("删除接口接收的id是::", req.body.id);
  //读取文件
  let dataList = [];
  try {
    dataList = JSON.parse(fs.readFileSync("public/taskNotDone.json", "utf8"));
    for (let i = 0; i < dataList.length; i++) {
      if (dataList[i].id === req.body.id) {
        dataList.splice(i, 1);
      }
    }
  } catch (error) {
    console.log("读取文件出错：", error);
    throw error;
  }

  //写文件
  fs.writeFile("public/taskNotDone.json", JSON.stringify(dataList), (err) => {
    if (err) {
      console.log(err);
      res.send({
        code: "0",
        msg: "删除数据失败",
      });
      throw err;
    }
    console.log("JSON文件保存成功!!!");
    res.send({
      code: "1",
      msg: "删除数据成功",
    });
  });
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
