import express, { json } from 'express';

const app = express();
const PORT = process.env.PORT ?? 46000;


app.use(json());

app.get('/ping',(req, res)=>{
    res.json({
        pong: 'Server running',
        environment: process.env.ENVIRONMENT,
    });
});

app.use('*', (req, res)=>{
    res.status(404).json({
       error: 'Resource not found'
    });
        
});

app.listen(PORT, ()=>{
    console.log('Server listening on', PORT);
    
});