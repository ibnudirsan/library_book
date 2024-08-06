import express from 'express';
const route             = express.Router();
import routeMember from './AppRoute/memberRoute.js';
import routeBook from './AppRoute/booksRoute.js';

route.use('/members', routeMember);
route.use('/books', routeBook);

export default route;