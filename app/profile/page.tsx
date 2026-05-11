import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faBookOpen, faCode, faFire } from "@fortawesome/free-solid-svg-icons";
import BestTeammate from "./bestTeam";
import { getStudentData } from "../42API/studentData";
import { Achievements, CompletedProject } from "./interface";
import { getStudentTeam } from "../42API/studentTeams";
import { getStudentLogime } from "../42API/getStudentLogtime";

export default async function Profile()
{
	let	student_data = await getStudentData("ajelloul");
	let	projects_in_progress = [];
	let	completed_projects: CompletedProject[] = [];
	let	max_score = 0;
	let	achievements: Achievements[] = [];
	let	teammates: string[] = [];
	for (let i = 0; student_data.projects_users[i]; i++)
	{
		let	projects_users = student_data.projects_users[i];
		if (student_data.projects_users[i].status === "in_progress" && projects_users.cursus_ids[0] === 21)
			projects_in_progress.push(projects_users.project.name);
		else if (projects_users["validated?"] && projects_users.cursus_ids[0] === 21)
		{
			completed_projects.push({name: projects_users.project.name, mark: projects_users.final_mark, date: projects_users.updated_at.split("T")[0]});
			if (projects_users.final_mark > max_score)
				max_score = projects_users.final_mark;
		}
	}

	let	student_teams = await getStudentTeam(student_data.login);
	for (let i = 0; student_teams[i]; i++)
	{
		if (student_teams[i].users.length > 1 && student_teams[i]["validated?"])
		{
			for (let j = 0; student_teams[i].users[j]; j++)
				teammates.push(student_teams[i].users[j].login);
		}
	}

	let result: {name: string, count: number}[] = [];
	for (let i = 0; i < teammates.length; i++)
	{
		let name = teammates[i];
		let found = false;
		for (let j = 0; j < result.length; j++)
		{
			if (result[j].name === name && name !== student_data.login)
			{
				result[j].count++;
				found = true;
				break;
			}
		}
		if (!found && name !== student_data.login)
			result.push({ name: name, count: 1 });
	}
	let best_teammate = result[0];
	for (let i = 1; i < result.length; i++)
	{
		if (result[i].count > best_teammate.count)
			best_teammate = result[i];
	}
	let	teammate_data = await getStudentData(best_teammate.name);

	for (let i = 0; student_data.achievements[i]; i++)
	{
		if (!achievements.some((name) => (name.name === student_data.achievements[i].name)))
			achievements.push({name: student_data.achievements[i].name, tier: student_data.achievements[i].tier});
	}

	let	student_logtime: Record<string, string> = await getStudentLogime(student_data.login);
	let	date_now = new Date().toISOString().slice(0, 7);
	let date_logime: string[] = Object.keys(student_logtime);
	let	all_logime: string[] = [];
	for (let i = 0; date_logime[i]; i++)
	{
		if (!date_logime[i].startsWith(date_now))
			break ;
		all_logime.push(Object.values(student_logtime)[i]);
	}
	function timeToMs(time: string)
	{
		let	[h, m, s] = time.split(":");
		return (Number(h) * 3600000 + Number(m) + 60000 + Number(s));
	}
	let	total_ms = 0
	for (let i = 0; all_logime[i]; i++)
		total_ms += timeToMs(all_logime[i]);
	let	h = Math.floor(total_ms / 3600000);
	let	m = Math.floor((total_ms % 3600000) / 60000);
	let month_logtime = `${String(h).padStart(2, "0")}h:${String(m).padStart(2, "0")}m`;

	return (
		<div className="text-white">
			<nav className="bg-[#02061780]">
				<div className="flex justify-between py-5 mx-auto w-1/2">
					<div className="flex gap-2">
						<p className="bg-linear-to-b from-[#2980B9] to-[#2980B9] p-2.5 rounded-xl font-bold text-center">42</p>
						<h1 className="font-bold text-xl my-auto">Intra Profile</h1>
					</div>
					<h2 className="text-[#94a3b8] my-auto">{student_data.campus[0].name} Campus</h2>
				</div>
			</nav>
			<menu className="w-1/2 mx-auto my-10">
				<div className="bg-linear-to-b from-[#141e3088] to-[#243b5583] rounded-2xl p-10 flex gap-5 transition-colors duration-400 hover:from-[#141E30] hover:to-[#243B55]">
					<div className="flex">
						<img className="w-40 aspect-square rounded-2xl border border-gray-400/50 my-auto" src={student_data.image.link} alt="image intra profile"/>
					</div>
					<div className="w-full">
						<h3 className="font-bold text-3xl">{student_data.usual_full_name}</h3>
						<a href={`https://profile.intra.42.fr/users/${student_data.login}`} target="_blank" className="text-cyan-300 text-base underline">@{student_data.login}</a>
						<div className="flex gap-2 justify-between my-5">
							<div className="bg-[#3341554D] w-full rounded-md border border-gray-400/20 p-3 space-y-1">
								<h4 className="text-[#94a3b8] text-sm">Level</h4>
								<p className="font-bold text-2xl text-[#22d3ee]">{student_data.cursus_users[1].level.toFixed(2)}</p>
							</div>
							<div className="bg-[#3341554D] w-full rounded-md border border-gray-400/20 p-3 space-y-1">
								<h4 className="text-[#94a3b8] text-sm">Grade</h4>
								<p className="font-bold text-2xl text-[#60a5fa]">{student_data.cursus_users[1].grade}</p>
							</div>
							<div className="bg-[#3341554D] w-full rounded-md border border-gray-400/20 p-3 space-y-1">
								<h4 className="text-[#94a3b8] text-sm">Wallet</h4>
								<p className="font-bold text-2xl text-[#34d399]">{student_data.wallet} ₳</p>
							</div>
							<div className="bg-[#3341554D] w-full rounded-md border border-gray-400/20 p-3 space-y-1">
								<h4 className="text-[#94a3b8] text-sm">Evaluation</h4>
								<p className="font-bold text-2xl text-[#fbbd24]">{student_data.correction_point}</p>
							</div>
						</div>
						<a className="underline" href={`mailto:${student_data.email}`}>{student_data.email}</a>
						<div className="flex gap-5 mt-2">
							<p className="text-[#94a3b8] text-sm">Location: <span className="bg-[#3b82f633] text-[#93c5fd] font-semibold px-2 py-1 rounded-2xl">{student_data.location ?? "Unavailable"}</span></p>
							<p className="text-[#94a3b8] text-sm">Logtime This month: <span className="bg-[#3bf66033] text-[#93fdaf] font-semibold px-2 py-1 rounded-2xl">{month_logtime}</span></p>
						</div>
					</div>
				</div>
				<div className="flex gap-4 justify-between my-5">
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
				<BestTeammate completed_projects={completed_projects} achievements={achievements} teammates={{login: teammate_data.login, full_name: teammate_data.usual_full_name, img: teammate_data.image.link, count: best_teammate.count}}/>
			</menu>
		</div>
	);
}
