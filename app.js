const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req, res) => {
	res.send("hello world");
});

app.get("/date",(req, res) => {
	res.send(`Current date and time: ${new Date()}`);
});

app.listen(port, () => {
	console.log(`server is running on port ${port} `);
});

app.get("/users", (req,res) => {
	res.send("Voici la liste : liste");
	console.log(`server is running on port ${port}`);
});

app.delete("/delete/:id", (req, res) => {
	try {
		const id =  req.params.id;
		res.send(`L'utilisateur avec pour id: ${id} a été supprimé`);
	} catch (error) {
		console.error(error)	
		res.status(500).send("Une erreur est survenue.");	
	}
});
