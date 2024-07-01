import express from 'express';
import authRoute from './routes/auth.route.js';

const PORT = process.env.PORT;
const app = express();

app.use(express.json())

app.use('/auth/', authRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})