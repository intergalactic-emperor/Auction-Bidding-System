const dotenv = require("dotenv");
const app = require("../server.js");
const PORT = process.env.PORT || 5000;

module.exports = app;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
