const express = require('express');
const morgan = require('morgan');
const apiRoutes = require('./interfaces/apiRoutes');
const logger = require('./utils/logger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', apiRoutes);
app.use(morgan("dev"));

app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
    console.log(`Server is running on port ${PORT}`);
});