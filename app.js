const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("hello world");
});

app.get("/date", (req, res) => {
	res.send(`Current date and time: ${new Date()}`);
});

app.listen(port, () => {
	console.log(`server is running on port ${port} `);
});

app.post("/users", (req, res) => {
	const { name, email, password } = req.body;

	if (!name || !email || !password) {
		return res.status(400).json({ error: "Missing required fields" });
	}

	console.log("New user:", { name, email, password });

	res.status(201).json({ message: "User created", user: { name, email } });
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
