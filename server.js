import app from "./src/app.js";

const port = process.env.PORT || 8080;


app.listen(port, () => {
   console.log(`Server online: port - http://localhost:${port}`);
})