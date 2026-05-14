import { getJwtToken } from "./getJwtToken";

export async function getSearchStudents(login: string)
{
	let	access_token = await getJwtToken();
	let	response = await fetch(`https://api.intra.42.fr/v2/users?search[login]=${login}&page[size]=10`,
	{
		method: "GET", 
		headers: { Authorization: `Bearer ${access_token}` },
		cache: "no-store",
	});
	let	data = await response.json();
	return (data);
}
