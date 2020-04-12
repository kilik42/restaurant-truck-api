import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import config from './config';
import routes from './routes';



let index = express();
index.server = http.createServer(index);

//middleware


//passport config

//api routes v1
index.use('/v1', routes);


index.server.listen(config.port);

console.log(`started on port ${index.server.address().port}`);

export default index;

