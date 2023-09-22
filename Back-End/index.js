import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "192.168.219.107",
  user: "root",
  port : 3306,
  password: "cbxd2525",
  database: "example_2week",
  connectTimeout: 100,
  dialect:"mysql"
});

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/student", (req, res) => {
  const q = "SELECT * FROM student";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/student", (req, res) => {
  const q = "INSERT INTO student(`id`, `name`, `age`, `sex`, 'habit', 'favorite') VALUES (?)";

  const values = [
    req.body.id,
    req.body.name,
    req.body.age,
    req.body.sex,
    req.body.habit,
    req.body.favorite,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.get("/message", (req, res) => {
  const q = "SELECT * FROM messageTable";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/message", (req, res) => {
  const q = "INSERT INTO messageTable(`name`, `email`, `message`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.email,
    req.body.message,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/student/:id", (req, res) => {
  const studentId = req.params.id;
  const q = " DELETE FROM student WHERE id = ? ";

  db.query(q, [studentId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/student/:id", (req, res) => {
  const studentId = req.params.id;
  const q = "UPDATE student SET `name`= ?, `age`= ?, `habit`= ?, `favorite`= ? WHERE id = ?";

  const values = [
    req.body.name,
    req.body.age,
    req.body.habit,
    req.body.favorite,
  ];

  db.query(q, [...values,studentId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(4000, () => {
  console.log("Connected to backend.");
});
