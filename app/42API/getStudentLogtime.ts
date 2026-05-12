import { getAccessToken } from "./getAccessToken";

export async function getStudentLogime(login: string)
{
	let token = await getAccessToken();
	let	response = await fetch(`https://api.intra.42.fr/v2/users/${login}/locations_stats`,
	{
		method: "GET", 
		headers: { Authorization: `Bearer ${token}` },
		cache: "no-store",
	});
	let	data = await response.json();
	return (data);
}
