import express from 'express';
import config from 'config';
import connectDB from "./utils/connect";
import logger from "./utils/logger";
import routes from './routes';
import deserializeUser from './midddleware/deserializeUser';

const PORT = config.get<number>('PORT');

const app = express();

app.use(express.json());

app.use(deserializeUser);

app.listen(PORT, async () => {
    logger.info(`This app is running at http://localhost: ${PORT}`);
    
    await connectDB();

    routes(app);
});

