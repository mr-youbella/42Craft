import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SignJWT } from "jose";
import { jwt_secret } from "../secret";

export async function GET(request: Request)
{
	let	code = new URL(request.url).searchParams.get("code");
	let	response = await fetch("https://api.intra.42.fr/oauth/token",
	{
		method: "POST", 
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify
		({
			grant_type: "authorization_code",
			client_id: process.env.CLIENT_ID,
			client_secret: process.env.CLIENT_SECRET,
			code,
			redirect_uri: "https://intraprofile.vercel.app/routing/callbackRoute"

		}),
		cache: "no-store",
	});
	let	token = await response.json();
	response = await fetch(`https://api.intra.42.fr/v2/me`,
	{
		method: "GET", 
		headers: { Authorization: `Bearer ${token.access_token}` },
		cache: "no-store",
	});
	let	data = await response.json();
	let	jwt = await new SignJWT({login: data.login}).setProtectedHeader({alg: "HS256"}).setExpirationTime("2h").sign(jwt_secret);
	(await cookies()).set("session", jwt);
	redirect("/profile");
}
