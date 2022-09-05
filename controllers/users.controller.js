const getUsers = (req, res) => {
    res.status(200).send("All users");
};

const createUser = (req, res) => {
    res.status(200).send("Create user");
};

const updateUser = (req, res) => {
    res.status(200).send("Update user");
};

const deleteUser = (req, res) => {
    res.status(200).send("Delete user");
};

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
};