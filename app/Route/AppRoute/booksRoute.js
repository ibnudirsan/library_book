import express from 'express';
const booksRoute = express.Router();
import { Get } from '../../Controller/booksController.js';
import apicache from 'apicache';

let cache = apicache.middleware;

booksRoute.get('/',cache('5 minutes'), Get);

export default booksRoute;