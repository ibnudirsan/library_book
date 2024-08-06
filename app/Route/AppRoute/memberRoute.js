import express from 'express';
const membersRoute = express.Router();
import { Get } from '../../Controller/membersController.js';
import apicache from 'apicache';

let cache = apicache.middleware;

membersRoute.get('/',cache('5 minutes'), Get);

export default membersRoute;