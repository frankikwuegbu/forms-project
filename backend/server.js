import express from 'express';
import cookieParser from "cookie-parser";
import authRoute from './routes/auth.route.js';
import cors from 'cors';

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/auth/', authRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
