import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (request, response) => {
  return response.json({
    status: true,
    response: "Welcome to the Ecoleta API server",
  });
});

app.get("/users", (request, response) => {
  return response.json({
    status: true,
    response: ["Diego", "Cleiton", "Robson", "Daniel"],
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
