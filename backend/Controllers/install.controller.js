// import install service to handle communication with the database
const installService = require('../Services/install.service');

// define the install controller function
async function install(req, res) {
    try {
        // call the install service to perform the installation
        const installMessage = await installService.install(req.body);
        // send a success response to the client
        res.status(200).json({ message: 'Installation successful', data:  installMessage });
    } catch (error) {
        // handle any errors that occur during installation
        console.error('Installation error:', error);
        res.status(500).json({ message: 'Installation failed', error: error.message });
        
    }}

    // export the install controller function for use in other modules
module.exports = { install };