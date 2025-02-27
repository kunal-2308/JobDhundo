
const getUserProfile = async (req, res) => {
    try {
        //check for the cookie if present 
        console.log(req.cookie('token'));
    } catch (error) {
        console.log(error);
    }
}

module.exports = getUserProfile