import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { jwt_secret } from "../secrets";

export async function getJwtToken(): Promise<string | null>
{
	let jwt_token = (await cookies()).get("session_token");
	if (!jwt_token)
		return (null);
	let	jwt_verify = await jwtVerify(jwt_token.value, jwt_secret);
	let	access_token = jwt_verify.payload.token as string;
	return (access_token);
}
