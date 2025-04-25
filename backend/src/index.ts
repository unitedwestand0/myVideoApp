import express from "express";
const app = express();

const PORT = 8000;
app.listen(8000, () => {
    console.log(`listening and running on port ${PORT}`);
})