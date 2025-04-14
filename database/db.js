import { connect } from 'mongoose';
import 'dotenv/config';
import chalk from 'chalk';

const connectDB = async (app) => {
    try {
        await connect(process.env.MONGO_URI);
        console.log(chalk.bgGreen.black('Successfully connected with database'));

        app.listen(process.env.PORT, () => {
            console.log(
                chalk.bgGreen.black(`Server started on port ${process.env.PORT} `)
            );
        });
    } catch (err) {
        console.error(
            chalk.bgRed.black('Connection terminated: ') + '\n' +
            chalk.red(err)
        );
    }
};

export { connectDB };