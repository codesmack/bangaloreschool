const express = require("express");
const cors = require("cors");

const app = express();
const port = 3300;

const corsInstance = cors();
corsInstance.origin = "http://localhost:4200";
corsInstance.credentials = true; //access-control-allow-credentials:true
corsInstance.optionSuccessStatus = 200;

app.use(corsInstance);

//request body data will be typeof json 
app.use(express.json());

const mysql = require("mysql2")
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '123456',
    database: 'employees'
});

app.listen(port, () => {
    console.log("Custom api is running on the port " + port);
    console.log("Custom api url: http://localhost:" + port);

})

app.get("/", (req, res) =>{
    res.status(200).json({ success : true });
})
app.get("/users", (req, res) =>{
    res.status(200).json({ userId : 1, userName: 'Mike Pollock' });
})

app.get("/dept", (req, res) =>{
    let dataToReturn = null;
    connection.query(
        'SELECT * FROM departments',
        function(err, results) {
          console.log(results); // results contains rows returned by server
          res.status(200).json(results);
        }
      );
})

app.post("/dept", (req, res) =>{
    console.log("post is received");
    console.log(req.body);
    console.log(req.body.data);
    console.log(req.body.data.deptNo);
    console.log(req.body.data.deptName);

    let query = `update employees.departments set dept_name = '${req.body.data.deptName}' where dept_no = '${req.body.data.deptNo}'`
    console.log(query);
    connection.query(
        query,
        function(err, results) {
            console.log(err);
          console.log(results); // results contains rows returned by server
          res.status(200).json(results);
        }
      );
})
