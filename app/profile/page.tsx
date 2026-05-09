import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faBookOpen, faCode, faFire } from "@fortawesome/free-solid-svg-icons";
import BestTeammate from "./bestTeam";

export default function Profile()
{
	return (
		<div className="min-h-screen bg-linear-to-b from-[#0f1726] to-[#14202f] text-white">
			<nav className="bg-[#02061780]">
				<div className="flex justify-between py-5 mx-auto w-1/2">
					<div className="flex gap-2">
						<p className="bg-linear-to-b from-[#2980B9] to-[#2980B9] p-2.5 rounded-xl font-bold text-center">42</p>
						<h1 className="font-bold text-xl my-auto">Intra Profile</h1>
					</div>
					<h2 className="text-[#94a3b8] my-auto">Khouribga Campus</h2>
				</div>
			</nav>
			<menu className="w-1/2 mx-auto my-10">
				<div className="bg-linear-to-b from-[#141e3088] to-[#243b5583] rounded-2xl p-10 flex gap-5 transition-colors duration-400 hover:from-[#141E30] hover:to-[#243B55]">
					<div className="flex">
						<img className="w-40 aspect-square rounded-2xl border border-gray-400/50 my-auto" src="https://cdn.intra.42.fr/users/09696ff2d298c6264e2d21c5c83aecc9/large_youbella.jpg" alt="image intra profile"/>
					</div>
					<div className="w-full">
						<h3 className="font-bold text-3xl">Younes Oubellal</h3>
						<p className="text-cyan-300 text-base">@youbella</p>
						<div className="flex gap-2 justify-between my-5">
							<div className="bg-[#3341554D] w-full rounded-md border border-gray-400/20 p-3 space-y-1">
								<h4 className="text-[#94a3b8] text-sm">Level</h4>
								<p className="font-bold text-2xl text-[#22d3ee]">5.98</p>
							</div>
							<div className="bg-[#3341554D] w-full rounded-md border border-gray-400/20 p-3 space-y-1">
								<h4 className="text-[#94a3b8] text-sm">Grade</h4>
								<p className="font-bold text-2xl text-[#60a5fa]">Cadet</p>
							</div>
							<div className="bg-[#3341554D] w-full rounded-md border border-gray-400/20 p-3 space-y-1">
								<h4 className="text-[#94a3b8] text-sm">Wallet</h4>
								<p className="font-bold text-2xl text-[#34d399]">650 ₳</p>
							</div>
							<div className="bg-[#3341554D] w-full rounded-md border border-gray-400/20 p-3 space-y-1">
								<h4 className="text-[#94a3b8] text-sm">Evaluation</h4>
								<p className="font-bold text-2xl text-[#fbbd24]">43</p>
							</div>
						</div>
						<a href="mailto:younesoubllal@gmail.com">younesoubllal@gmail.com</a>
						<div className="flex gap-5 mt-2">
							<p className="text-[#94a3b8] text-sm">Location: <span className="bg-[#3b82f633] text-[#93c5fd] font-semibold px-2 py-1 rounded-2xl">E3R9P3</span></p>
							<p className="text-[#94a3b8] text-sm">Logtime Today: <span className="bg-[#3bf66033] text-[#93fdaf] font-semibold px-2 py-1 rounded-2xl">1:65h</span></p>
						</div>
					</div>
				</div>
				<div className="flex gap-4 justify-between my-5">
					<div className="bg-[#3341554D] w-full rounded-2xl border border-gray-400/20 p-5 py-6 space-y-1">
						<h4 className="text-gray-300 text-md font-semibold flex gap-2"><FontAwesomeIcon className="w-4 text-cyan-400" icon={faCode} /> Total Projects</h4>
						<p className="font-bold text-3xl text-white">15</p>
						<p className="text-[#94a3b8] text-xs">Completed</p>
					</div>
					<div className="bg-[#3341554D] w-full rounded-2xl border border-gray-400/20 p-5 py-6 space-y-1">
						<h4 className="text-gray-300 text-md font-semibold flex gap-2"><FontAwesomeIcon className="w-4 text-orange-400" icon={faFire} /> Max Score</h4>
						<p className="font-bold text-3xl text-white">125</p>
						<p className="text-[#94a3b8] text-xs">Bonus points</p>
					</div>
					<div className="bg-[#3341554D] w-full rounded-2xl border border-gray-400/20 p-5 py-6 space-y-1">
						<h4 className="text-gray-300 text-md font-semibold flex gap-2"><FontAwesomeIcon className="w-4 text-purple-400" icon={faAward} /> Achievements</h4>
						<p className="font-bold text-3xl text-white">3</p>
						<p className="text-[#94a3b8] text-xs">Unlocked</p>
					</div>
				</div>
				<div className="bg-linear-to-br from-[#8e0e0095] to-[#1f1c1894] p-5 rounded-2xl border border-[#f01c0487]">
					<h3 className="text-[#FEF3C7] font-bold text-xl flex gap-2"><FontAwesomeIcon className="w-5" icon={faBookOpen}/>Currently Working On</h3>
					<div className="flex justify-between border border-[#f01c0487] rounded-md p-4 mt-4 bg-orange-400/20">
						<p className="text-[#FEF3C7] font-semibold">Inception</p>
						<p className="text-[#fcd34d] bg-[#f59e0b33] font-semibold p-1 rounded-2xl text-sm px-2">In Progress</p>
					</div>
				</div>
				<BestTeammate />
			</menu>
		</div>
	);
}
