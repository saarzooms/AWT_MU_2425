const express = require("express");
const staff = require("./src/routes/staff.routes");
const app = express();
const port = 3000;
app.use("/staff", staff);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//17,13,18 present
