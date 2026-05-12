export interface CompletedProject
{
	name: string,
	mark: number,
	date: string
}

export interface Achievements
{
	name: string,
	tier: string
}

export interface StudentInfo
{
	info:
	{
		login: string,
		campus: string,
		image: string,
		full_name: string,
		level: number,
		grade: string
		wallet: number,
		correction_point: number,
		email: string,
		location: string,
		achievements: Achievements[]
	}
	student_projects_stats:
	{
		projects_in_progress: string[],
		completed_projects: CompletedProject[],
		max_score: number
	}
}

export interface BestTeammate
{
	login: string,
	full_name: string,
	image: string,
	count: number
}
