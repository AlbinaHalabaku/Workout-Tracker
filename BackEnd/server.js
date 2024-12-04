const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json()); // Për të mundësuar dërgimin e të dhënave në JSON

app.get('/', (req, res) => {
    res.send('Hello, Workout Tracker API!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
