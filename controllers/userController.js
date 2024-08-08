const axiosInstance = require("../helpers/http")
const User = require('./../models/userModel')

const getUsers = async(req, res) => {
    try {
        const response = await axiosInstance.get('/users')

        res.json(response.data);
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'An error occurred while fetching data' });
    }
}

const postUsers = async (req, res) => {
    try {
        // Fetch data from the external API
        const response = await axiosInstance.get('/users');
        const users = response.data;

        // Iterate through the API data and create or update users
        for (const user of users) {
            // Ensure that these values are strings
            const name = String(user.name);
            const username = String(user.username);
            const email = String(user.email);
        
            await User.upsert({
                name: name,
                username: username,
                email: email,
            });
        }        

        res.json({ message: 'Users have been successfully added to the database' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while fetching and storing data' });
    }
};

module.exports = {getUsers, postUsers}