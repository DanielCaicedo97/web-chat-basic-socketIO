import expres from "express"
import http from "http"
import path from "path"
import {fileURLToPath} from "url"
import routes from './routes/index.js';
import realTimeServer from "./realTimeServer.js"
import cookieParser from "cookie-parser";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = expres();
const httpServer = http.createServer(app);


// Settings 

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.use(cookieParser());
// Routes
app.use(routes);

// Public 
app.use(expres.static(path.join(__dirname, 'public')));

// Server 

httpServer.listen(app.get('port'), ()=>{
    console.log(`El servidor esta corriendo en el puerto http://localhost:${app.get('port')}`)
});


// Servidor de socket.io 
realTimeServer(httpServer);