module.exports = require(`./${process.env.REACT_APP_ENV !== undefined ? process.env.REACT_APP_ENV : process.env.NODE_ENV}_config`);
