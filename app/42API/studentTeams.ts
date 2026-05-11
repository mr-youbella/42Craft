import { getAccessToken } from "./getToken";

export async function getStudentTeam(login: string)
{
	let token = await getAccessToken();
	let	page = 1
	let	all_data: any = [];
	while (true)
	{
		let	response = await fetch(`https://api.intra.42.fr/v2/users/${login}/teams?page[size]=100&page[number]=${page}`,
		{
			method: "GET", 
			headers: { Authorization: `Bearer ${token}` },
			cache: "no-store",
		});
		let	data = await response.json();
		if (!data.length)
			break ;
		all_data = [...all_data, ...data];
		page++;
	}
	return (all_data);
}
