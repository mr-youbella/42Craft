import { getAccessToken } from "./getToken";

export async function getStudentData()
{
	let token = await getAccessToken();
	let	response = await fetch("https://api.intra.42.fr/v2/users/youbella",
	{
		method: "GET", 
		headers: { Authorization: `Bearer ${token}` },
	});
	let	data = response.json();
	return (data);
}
