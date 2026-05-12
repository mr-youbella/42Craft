import { redirect } from "next/navigation";

export async function GET()
{
	redirect(process.env.REDIRECT_URI as string);
}
