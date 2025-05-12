import express from "express";
import path from 'path';
import { fileURLToPath } from "url";
// Route modules
import userRoutes from './routes/userRoutes.js';
import dietingRoutes from './routes/dietingRoutes.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); // static files

// Mount routes
app.use('/dieting', dietingRoutes);
app.use('/user', userRoutes);

// root route (minimal)
app.get('/', (req,res) => {
    res.render('layout', {title:'Nutrisync', body:'home'});
});

// Error handling middleware
app.use((req,res,next) =>{
    res.status(404).render('404');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke.');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});