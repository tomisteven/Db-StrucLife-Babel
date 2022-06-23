import express from 'express';
import TaskRoutes from './routes/Task.routes.js';
import TurnRoutes from './routes/Turns.routes';
import StudyRoutes from './routes/Study.routes';
import IdeaRoutes from './routes/Idea.routes';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();

const app = express();


//midlewares
app.use(express.json());
app.use(cors())
app.use(morgan('dev'));

//rutas de la aplicacion
app.use("/api/tasks", TaskRoutes);
app.use("/api/turns", TurnRoutes);
app.use("/api/studies", StudyRoutes);
app.use("/api/ideas", IdeaRoutes);
//base de datos
import './database.js'

app.listen(process.env.PORT || 8080, () => {
    console.log('Server started on port', process.env.PORT || 8080);
})



export default app;