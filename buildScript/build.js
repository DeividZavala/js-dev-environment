/*eslint-disable no-console */
import webpack from 'webpack';
import webpackconfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = "production";

console.log(chalk.blue("Generando bundle y minificando código, esto puede tardar..."));

webpack(webpackconfig).run((err,stats) => {
	if(err){
		console.log(chalk.red(err));
		return 1;
	}

	const jsonStats = stats.toJson();
	if(jsonStats.hasErrors){
		return jsonStats.erros.map(error=>console.log(chalk.red(error)));
	}

	if(jsonStats.hasWarnings){
		console.log(chalk.yellow("webpack generero la siguiente advertencia "));
		jsonStats.warnings.map(warning=>console.log(chalk.yellow(warning)));
	}

	console.log(`webpack status: ${stats}`);

	console.log(chalk.green("App construida para producción!"));

	return 0;
});
