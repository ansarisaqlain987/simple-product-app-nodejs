const app = require('./../app');
const PORT = process.env.PORT || 5000;

const normalizePort = (port) => {
    try {
        switch (typeof port) {
            case 'number': {
                return port;
            }
            case 'string': {
                return parseInt(port);
            }
            default: {
                throw new Error();
            }
        }
    } catch (err) {
        console.log("There was an error starting the server");
        process.exit(0);
    }
};

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})