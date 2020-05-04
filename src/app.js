import express, { json } from 'express';
import morgan from 'morgan';

//Importing routes
import projectRoutes from './routes/hamburguesa';
import taskRoutes from './routes/ingrediente';
//intialization
const app = express();
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});


//middlewares
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/hamburguesa', projectRoutes);
app.use('/ingrediente',taskRoutes);

export default app;