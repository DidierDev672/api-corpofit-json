const express = require('express');
const apiRoutes = require('./interfaces/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', apiRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});