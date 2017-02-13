const dotenv = require('dotenv');
const chalk = require('chalk');

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.load({ path: '.env' });


module.exports = (mongoose) => {
  /**
   * Connect to MongoDB.
   */
  mongoose.Promise = global.Promise;
  mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
  //mongoose.connect(process.env.MONGOLAB_URI); //local mongo database
  mongoose.connection.on('connected', () => {
    console.log('%s MongoDB connection established!', chalk.green('✓'));
  });
  mongoose.connection.on('error', () => {
    console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
    process.exit();
  });
}
