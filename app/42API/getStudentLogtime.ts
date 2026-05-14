import { getJwtToken } from "./getJwtToken";

export async function getStudentLogtime(login: string)
{
	let	access_token = await getJwtToken();
	let	response = await fetch(`https://api.intra.42.fr/v2/users/${login}/locations_stats`,
	{
		method: "GET", 
		headers: { Authorization: `Bearer ${access_token}` },
		cache: "no-store",
	});
	let	data = await response.json();
	return (data);
}
