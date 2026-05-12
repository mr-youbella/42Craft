import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faBookOpen, faCode, faFire } from "@fortawesome/free-solid-svg-icons";
import StudentOverview from "./studentOverview";
import { Achievements, BestTeammate, CompletedProject, StudentInfo } from "./interface";
import { getBestTeammate, getStudentInfo, getStudentMonthlyLogtime } from "./studentInfo";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { jwtVerify } from "jose";
import { jwt_secret } from "../routing/secret";

export default async function Profile()
{
	
	async function getLogin(): Promise<string>
	{
		try
		{
			let	token = (await cookies()).get("session");
			if (!token)
			redirect("/");
			let	verify = await jwtVerify(token.value, jwt_secret);
			if (!verify)
				redirect("/");
			return (verify.payload.login as string);
		}
		catch
		{
			redirect("/");
		}
	}
	let	login = await getLogin();
	let	student: StudentInfo | undefined = await getStudentInfo(login);
	let	projects_in_progress: string[] = student.student_projects_stats.projects_in_progress;
	let	completed_projects: CompletedProject[] = student.student_projects_stats.completed_projects;
	let	max_score: number = student.student_projects_stats.max_score;
	let	achievements: Achievements[] = student.info.achievements;
	let	best_teammate: BestTeammate = await getBestTeammate(student.info.login);
	let	monthly_logtime: string = await getStudentMonthlyLogtime(student.info.login);

	return (
		<div className="min-h-screen">
			<nav className="bg-[#02061780]">
				<div className="flex justify-between py-5 mx-4 xl:mx-auto xl:w-1/2">
					<div className="flex gap-2">
						<p className="bg-linear-to-b from-[#2980B9] to-[#2980B9] p-2.5 rounded-xl font-bold text-center">42</p>
						<h1 className="font-bold text-xl my-auto">Intra Profile</h1>
					</div>
					<h2 className="text-[#94a3b8] my-auto">{student.info.campus} Campus</h2>
				</div>
			</nav>
			<main className="xl:w-1/2 mx-4 xl:mx-auto my-10">
				<div className="bg-linear-to-b from-[#141e3088] to-[#243b5583] rounded-2xl p-10 grid sm:flex gap-5 transition-colors duration-400 hover:from-[#141E30] hover:to-[#243B55]">
					<div className="sm:flex">
						<img className="w-40 aspect-square rounded-2xl border border-gray-400/50 my-auto" src={student.info.image} alt="image intra profile"/>
					</div>
					<div className="w-full">
						<h3 className="font-bold text-3xl">{student.info.full_name}</h3>
						<a href={`https://profile.intra.42.fr/users/${student.info.login}`} target="_blank" className="text-cyan-300 text-base underline">@{student.info.login}</a>
						<div className="grid grid-cols-2 sm:flex gap-2 justify-between my-5">
							<div className="bg-[#3341554D] w-full rounded-md border border-gray-400/20 p-3 space-y-1">
								<h4 className="text-[#94a3b8] text-sm">Level</h4>
								<p className="font-bold text-2xl text-[#22d3ee]">{student.info.level}</p>
							</div>
							<div className="bg-[#3341554D] w-full rounded-md border border-gray-400/20 p-3 space-y-1">
								<h4 className="text-[#94a3b8] text-sm">Grade</h4>
								<p className="font-bold text-2xl text-[#60a5fa]">{student.info.grade}</p>
							</div>
							<div className="bg-[#3341554D] w-full rounded-md border border-gray-400/20 p-3 space-y-1">
								<h4 className="text-[#94a3b8] text-sm">Wallet</h4>
								<p className="font-bold text-2xl text-[#34d399]">{student.info.wallet} ₳</p>
							</div>
							<div className="bg-[#3341554D] w-full rounded-md border border-gray-400/20 p-3 space-y-1">
								<h4 className="text-[#94a3b8] text-sm">Evaluation</h4>
								<p className="font-bold text-2xl text-[#fbbd24]">{student.info.correction_point}</p>
							</div>
						</div>
						<a className="underline" href={`mailto:${student.info.email}`}>{student.info.email}</a>
						<div className="grid sm:flex gap-2 mt-2">
							<p className="text-[#94a3b8] text-sm">Location: <span className="bg-[#3b82f633] text-[#93c5fd] font-semibold px-2 py-1 rounded-2xl">{student.info.location ?? "Unavailable"}</span></p>
							<p className="text-[#94a3b8] text-sm">Logtime this month: <span className="bg-[#3bf66033] text-[#93fdaf] font-semibold px-2 py-1 rounded-2xl">{monthly_logtime}</span></p>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 sm:flex gap-4 justify-between my-5">
					<div className="bg-[#3341554D] w-full rounded-2xl border border-gray-400/20 p-5 py-6 space-y-1">
						<h4 className="text-gray-300 text-md font-semibold flex gap-2"><FontAwesomeIcon className="w-4 text-cyan-400" icon={faCode} /> Total Projects</h4>
						<p className="font-bold text-3xl text-white">{completed_projects.length}</p>
						<p className="text-[#94a3b8] text-xs">Completed</p>
					</div>
					<div className="bg-[#3341554D] w-full rounded-2xl border border-gray-400/20 p-5 py-6 space-y-1">
						<h4 className="text-gray-300 text-md font-semibold flex gap-2"><FontAwesomeIcon className="w-4 text-orange-400" icon={faFire} /> Max Score</h4>
						<p className="font-bold text-3xl text-white">{max_score}</p>
						<p className="text-[#94a3b8] text-xs">Points</p>
					</div>
					<div className="bg-[#3341554D] w-full rounded-2xl border border-gray-400/20 p-5 py-6 space-y-1">
						<h4 className="text-gray-300 text-md font-semibold flex gap-2"><FontAwesomeIcon className="w-4 text-purple-400" icon={faAward} /> Achievements</h4>
						<p className="font-bold text-3xl text-white">{achievements.length}</p>
						<p className="text-[#94a3b8] text-xs">Unlocked</p>
					</div>
				</div>
				<div className="bg-linear-to-br from-[#8e0e0095] to-[#1f1c1894] p-5 rounded-2xl border border-[#f01c0487]">
					<h3 className="text-[#FEF3C7] font-bold text-xl flex gap-2"><FontAwesomeIcon className="w-5" icon={faBookOpen}/>Currently Working On</h3>
					{projects_in_progress.map((value, index) =>
					{
						return (
							<div key={index} className="flex justify-between border border-[#f01c0487] rounded-md p-4 mt-4 bg-orange-400/20">
								<p className="text-[#FEF3C7] font-semibold">{value}</p>
								<p className="text-[#fcd34d] bg-[#f59e0b33] font-semibold p-1 rounded-2xl text-sm px-2">In Progress</p>
							</div>
						);
					})}
				</div>
				<StudentOverview completed_projects={completed_projects} achievements={achievements} best_teammates={best_teammate}/>
			</main>
		</div>
	);
}
