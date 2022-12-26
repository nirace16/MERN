import app from "./server.js";
import mongodb, { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const MongClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(process.env.RESTREVIEWS_DB_URI, {
	poolSize: 50,
	wtimeout: 250,
	useNEwUrlParse: true,
})
	.catch((err) => {
		console.error(err.stack);
		process.exit;
	})
	.then(async (client) => {
		app.listen(port, () => {
			console.log("listening on port ${port}");
		});
	});
