import { getJwtToken } from "@/app/42API/getJwtToken";

export async function POST(request: Request)
{
	let	body = await request.json();
	let	login = body.login;
	let	access_token = await getJwtToken();
	let	response = await fetch(`https://api.intra.42.fr/v2/users?search[login]=${login}&page[size]=12`,
	{
		method: "GET", 
		headers: { Authorization: `Bearer ${access_token}` },
		cache: "no-store",
	});
	let	data = await response.json();
	return (Response.json({data}));
}
