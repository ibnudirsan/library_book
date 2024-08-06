import membersModel from '../Models/membersModel.js';

export const Get = async (req, res) => {
    try {
        const members = await membersModel.findAll({
            attributes: ['code','name']
        });
        res.json({
            data: members
        });
    } catch (error) {
        console.error(error);
    }
}