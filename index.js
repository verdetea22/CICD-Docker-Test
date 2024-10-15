import express from 'express';  // Use ESM syntax for express import

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from Docker and CI/CD!');
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export { app, server };  // Export both app and server for testing
