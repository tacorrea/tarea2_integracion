import express, { json } from 'express';
import morgan from 'morgan';

//Importing routes
import projectRoutes from './routes/hamburguesa';
import taskRoutes from './routes/ingrediente';
//intialization
const app = express();


//middlewares
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/hamburguesa', projectRoutes);
app.use('/ingrediente',taskRoutes);

export default app;