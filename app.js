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











fetch('https://example.com/users', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		name: 'John Doe',
		email: 'johndoe@example.com',
		password: 'securepassword123'
	})
})
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error('Erreur:', error));
