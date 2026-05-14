export async function getAccessToken(): Promise<string>
{
	let	response = await fetch("https://api.intra.42.fr/oauth/token",
	{
		method: "POST", 
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify
		({
			grant_type: "client_credentials",
			client_id: process.env.CLIENT_ID,
			client_secret: process.env.CLIENT_SECRET,
		}),
		cache: "no-store",
	});
	let	token = await response.json();
	console.log(token);
	return (token.access_token);
}
