"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faAward, faDiagramProject, faPeopleGroup, faRibbon } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Achievements, BestTeammate, CompletedProject } from "./interface";

export default function StudentOverview({completed_projects, achievements, best_teammates}: {completed_projects: CompletedProject[], achievements: Achievements[], best_teammates: BestTeammate})
{
	let	[arrow_best_teammate, setArrowBestTeammate] = useState<boolean>(false);
	let	[arrow_completed_projects, setArrowCompletedProjects] = useState<boolean>(false);
	let	[arrow_achievements, setArrowAchievements] = useState<boolean>(false);

	return (
		<div>
			<button onClick={() => (setArrowBestTeammate(!arrow_best_teammate))} className="bg-[#1e293b] my-5 rounded-2xl p-5 flex justify-between cursor-pointer w-full">
				<h3 className="font-bold text-xl flex gap-2"><FontAwesomeIcon className="w-4 text-green-400" icon={faPeopleGroup}/>Your best teammate</h3>
				<FontAwesomeIcon className="w-4 text-gray-400 my-auto" icon={arrow_best_teammate ? faAngleUp : faAngleDown}/>
			</button>
			<div className={`bg-linear-to-b from-[#14302f88] to-[#24554d83] rounded-2xl p-5 flex gap-5 transition-colors duration-400 hover:from-[#143025] hover:to-[#245550] ${arrow_best_teammate ? "block" : "hidden"}`}>
				<div className="flex">
					<img className="w-30 aspect-square rounded-2xl border border-gray-400/50 my-auto" src={best_teammates.image} alt="image intra profile"/>
				</div>
				<div className="w-full">
					<h3 className="font-bold text-2xl">{best_teammates.full_name}</h3>
					<a href={`https://profile.intra.42.fr/users/${best_teammates.login}`} className="text-cyan-300 text-base underline">@{best_teammates.login}</a>
					<div className="flex gap-2 justify-between my-1">
						<div className="bg-[#3341554D] w-full rounded-md border border-gray-400/20 p-1 space-y-1 text-center">
							<h4 className="text-[#94a3b8] text-md">Number of Projects you worked on together</h4>
							<p className="font-bold text-3xl text-[#22eea3]">{best_teammates.count}</p>
						</div>
					</div>
				</div>
			</div>
			<button onClick={() => (setArrowCompletedProjects(!arrow_completed_projects))} className="bg-[#1e293b] my-5 rounded-2xl p-5 flex justify-between cursor-pointer w-full">
				<h3 className="font-bold text-xl flex gap-2"><FontAwesomeIcon className="w-4 text-blue-400" icon={faDiagramProject}/>Completed Projects ({completed_projects.length})</h3>
				<FontAwesomeIcon className="w-4 text-gray-400 my-auto" icon={arrow_completed_projects ? faAngleUp : faAngleDown}/>
			</button>
			<div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 justify-between my-5 ${arrow_completed_projects ? "block" : "hidden"}`}>
				{completed_projects.map((value, index) =>
				{
					return (
						<div key={index} className="bg-[#3341554D] w-full rounded-md border border-gray-400/20 p-3 space-y-1">
							<h4 className="font-bold">{value.name}</h4>
							<div className="flex justify-between mt-2">
								<p className={`font-bold text-sm rounded-2xl p-1 px-2 ${value.mark < 125 ? "bg-green-600/50 text-green-300" : "bg-blue-600/50 text-blue-300"}`}>{value.mark}</p>
								<p className="text-[#94a3b8] text-sm font-normal my-auto">{value.date}</p>
							</div>
						</div>
					);
				})}
			</div>
			<button onClick={() => (setArrowAchievements(!arrow_achievements))} className="bg-[#1e293b] my-5 rounded-2xl p-5 flex justify-between cursor-pointer w-full">
				<h3 className="font-bold text-xl flex gap-2"><FontAwesomeIcon className="w-4 text-purple-400" icon={faAward}/>Achievements ({achievements.length})</h3>
				<FontAwesomeIcon className="w-4 text-gray-400 my-auto" icon={arrow_achievements ? faAngleUp : faAngleDown}/>
			</button>
			<div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 justify-between my-5 ${arrow_achievements ? "block" : "hidden"}`}>
				{achievements.map((value, index) =>
				{
					return (
						<div key={index} className="bg-[#591c87af] w-full rounded-md border border-gray-400/20 p-3 space-y-1">
							<div className="flex gap-3">
								<div>
									<p className="bg-white/10 rounded-md h-full flex p-3"><FontAwesomeIcon className="my-auto text-2xl text-purple-300/60" icon={faRibbon}/></p>
								</div>
								<div className="space-y-2">
									<h4 className="font-bold">{value.name}</h4>
									<p className="text-sm rounded-md p-1 px-2 bg-[#6a11ae] text-[#dfc3f4] w-fit">{value.tier}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
