import booksModel from '../Models/booksModel.js';

export const Get = async (req, res) => {
    try {
        const books = await booksModel.findAll({
            attributes: ['code', 'title', 'author', 'stock']
        });
        res.json({
            data: books
        });
    } catch (error) {
        console.error(error);
    }
}