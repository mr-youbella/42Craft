import { getStudentData } from "../42API/getStudentData";
import { getStudentLogime } from "../42API/getStudentLogtime";
import { getStudentTeam } from "../42API/getStudentTeams";
import { Achievements, BestTeammate, CompletedProject, StudentInfo } from "./interface";

export async function getStudentInfo(login: string): Promise<StudentInfo>
{
	let	student_data = await getStudentData(login);
	let	projects_in_progress: string[] = [];
	let	completed_projects: CompletedProject[] = [];
	let	max_score: number = 0;
	let	achievements: Achievements[] = [];

	for (let i = 0; student_data.projects_users[i]; i++)
	{
		let	projects_users = student_data.projects_users[i];
		if (student_data.projects_users[i].status === "in_progress" && !projects_users["validated?"] && projects_users.cursus_ids[0] === 21)
			projects_in_progress.push(projects_users.project.name);
		else if (projects_users["validated?"] && projects_users.cursus_ids[0] === 21)
		{
			completed_projects.push({name: projects_users.project.name, mark: projects_users.final_mark, date: projects_users.updated_at.split("T")[0]});
			if (projects_users.final_mark > max_score)
				max_score = projects_users.final_mark;
		}
	}
	for (let i = student_data.achievements.length - 1; i > 0; i--)
	{
		if (!achievements.some((name) => (name.name === student_data.achievements[i].name)))
			achievements.push({name: student_data.achievements[i].name, tier: student_data.achievements[i].tier});
	}
	return ({info: {login: student_data.login, campus: student_data.campus[0].name, image: student_data.image.link, full_name: student_data.usual_full_name, level: student_data.cursus_users[1].level.toFixed(2), grade: student_data.cursus_users[1].grade, wallet: student_data.wallet, correction_point: student_data.correction_point, email: student_data.email, location: student_data.location ?? "Unavailable", achievements}, student_projects_stats: {projects_in_progress, completed_projects, max_score}});
}

export async function getBestTeammate(login: string): Promise<BestTeammate>
{
	let	student_teams = await getStudentTeam(login);
	let	teammates: string[] = [];

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
			if (result[j].name === name && name !== login)
			{
				result[j].count++;
				found = true;
				break;
			}
		}
		if (!found && name !== login)
			result.push({ name: name, count: 1 });
	}
	let best_teammate = result[0];
	for (let i = 1; i < result.length; i++)
	{
		if (result[i].count >= best_teammate.count)
			best_teammate = result[i];
	}
	let	teammate_data = await getStudentData(best_teammate.name);
	return ({login: teammate_data.login, full_name: teammate_data.usual_full_name, image: teammate_data.image.link, count: best_teammate.count});
}

export async function getStudentMonthlyLogtime(login: string): Promise<string>
{

	let	student_logtime: Record<string, string> = await getStudentLogime(login);
	let	date_now = new Date().toISOString().slice(0, 7);
	let date_logime: string[] = Object.keys(student_logtime);
	let	all_logime: string[] = [];
	let	total_ms = 0
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
	for (let i = 0; all_logime[i]; i++)
		total_ms += timeToMs(all_logime[i]);
	let	h = Math.floor(total_ms / 3600000);
	let	m = Math.floor((total_ms % 3600000) / 60000);
	let monthly_logtime = `${String(h).padStart(2, "0")}h:${String(m).padStart(2, "0")}m`;
	return (monthly_logtime);
}
