const fs = require('fs-extra');

class GlobalUtils {

    constructor() { }

    sleep(millisecondsCount) {
        if (!millisecondsCount) {
            return;
        }
        return new Promise(resolve => setTimeout(resolve, millisecondsCount)).catch(e => console.log(e));
    }

    // This method validates if a receive target path exists.
    isPathExistsError(targetPath) {
        // Check if the path parameter was received.
        if (!targetPath) {
            throw new Error(`targetPath not received: ${targetPath} (1000008)`);
        }
        // Check if the path parameter exists.
        if (!fs.existsSync(targetPath)) {
            throw new Error(`targetPath not exists: ${targetPath} (1000009)`);
        }
    }

    // This method validates if a receive target path is accessible.
    isPathAccessible(targetPath) {
        // Verify that the path exists.
        this.isPathExistsError(targetPath);
        // Check if the path is readable.
        if (fs.accessSync(targetPath, fs.constants.R_OK)) {
            throw new Error(`targetPath not readable: ${targetPath} (1000010)`);
        }
        // Check if the path is writable.
        if (fs.accessSync(targetPath, fs.constants.W_OK)) {
            throw new Error(`targetPath not writable: ${targetPath} (1000011)`);
        }
    }

    createDirectory(targetPath) {
        if (!targetPath) {
            return;
        }
        if (!fs.existsSync(targetPath)) {
            fs.mkdirSync(targetPath, { recursive: true });
        }
    }
}

module.exports = new GlobalUtils();