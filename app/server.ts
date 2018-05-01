import express from 'express';

import {
    WelcomeController,
    RegisterController
} from './controllers';

const app: express.Application = express();
const port: any = process.env.PORT || 3000;

app.use('/welcome', WelcomeController);
app.use('/register', RegisterController);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});