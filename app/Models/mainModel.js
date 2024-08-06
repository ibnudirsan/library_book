import connetedDB from '../Config/database.js';
import members from '../Models/membersModel.js';
import books from '../Models/booksModel.js';

export async function setupDatabase(migration) {
    if(migration === "true") {
        try {
            await connetedDB.authenticate();
            console.info(`Database Conneted...`);
            await members.sync();
            await books.sync();
        } catch (error) {
            console.error(error);
        }
    }
}