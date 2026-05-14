import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default async function Home()
{
	return (
		<div className="min-h-screen flex flex-col">
			<nav className="bg-[#02061780]">
				<div className="flex justify-between py-5 mx-4 xl:mx-auto xl:w-1/2">
					<div className="flex gap-2">
						<p className="bg-linear-to-b from-[#2980B9] to-[#2980B9] p-2.5 rounded-xl font-bold text-center">42</p>
						<h1 className="font-bold text-xl my-auto">42 Craft</h1>
					</div>
				</div>
			</nav>
			<main className="xl:w-1/2 mx-4 xl:mx-auto flex flex-col items-center my-auto space-y-2">
				<h1 className="font-bold text-3xl">Welcome Back</h1>
				<p className="text-gray-400">Sign in to access your 42 School profile</p>
				<form action="/routing/loginRoute">
					<button className="flex justify-center gap-2 bg-linear-to-l from-cyan-500 to-blue-600 px-8 mx-auto p-4 w-full font-bold rounded-md cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:from-cyan-500/90 hover:to-blue-600/90 hover:scale-102"><FontAwesomeIcon className="w-5" icon={faArrowRightToBracket}/>Login with 42 Intra</button>
				</form>
			</main>
		</div>
	);
}
