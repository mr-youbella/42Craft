"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faAward, faDiagramProject, faPeopleGroup, faRibbon } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function BestTeammate()
{
	let	[arrow_best_teammate, setArrowBestTeammate] = useState<boolean>(false);
	let	[arrow_completed_projects, setArrowCompletedProjects] = useState<boolean>(false);
	let	[arrow_achievements, setArrowAchievements] = useState<boolean>(false);

	return (
		<div>
			<div onClick={() => (setArrowBestTeammate(!arrow_best_teammate))} className="bg-[#1e293b] my-5 rounded-2xl p-5 flex justify-between cursor-pointer">
				<h3 className="font-bold text-xl flex gap-2"><FontAwesomeIcon className="w-4 text-green-400" icon={faPeopleGroup}/>Your best teammate</h3>
				<FontAwesomeIcon className="w-4 text-gray-400 my-auto" icon={arrow_best_teammate ? faAngleUp : faAngleDown}/>
			</div>
			<div className={`bg-linear-to-b from-[#14302f88] to-[#24554d83] rounded-2xl p-5 flex gap-5 transition-colors duration-400 hover:from-[#143025] hover:to-[#245550] ${arrow_best_teammate ? "block" : "hidden"}`}>
				<div className="flex">
					<img className="w-30 aspect-square rounded-2xl border border-gray-400/50 my-auto" src="https://cdn.intra.42.fr/users/52ef7688125d2bc88779e50403bac494/wkannouf.jpg" alt="image intra profile"/>
				</div>
				<div className="w-full">
					<h3 className="font-bold text-2xl">Wissal Kannoufi</h3>
					<p className="text-cyan-300 text-base">@wkannouf</p>
					<div className="flex gap-2 justify-between my-1">
						<div className="bg-[#3341554D] w-full rounded-md border border-gray-400/20 p-1 space-y-1 text-center">
							<h4 className="text-[#94a3b8] text-xl">Number of Projects you worked on together</h4>
							<p className="font-bold text-3xl text-[#22eea3]">3</p>
						</div>
					</div>
				</div>
			</div>
			<div onClick={() => (setArrowCompletedProjects(!arrow_completed_projects))} className="bg-[#1e293b] my-5 rounded-2xl p-5 flex justify-between cursor-pointer">
				<h3 className="font-bold text-xl flex gap-2"><FontAwesomeIcon className="w-4 text-blue-400" icon={faDiagramProject}/>Completed Projects (15)</h3>
				<FontAwesomeIcon className="w-4 text-gray-400 my-auto" icon={arrow_completed_projects ? faAngleUp : faAngleDown}/>
			</div>
			<div className={`grid grid-cols-4 gap-4 justify-between my-5 ${arrow_completed_projects ? "block" : "hidden"}`}>
				<div className="bg-[#3341554D] w-full rounded-md border border-gray-400/20 p-3 space-y-1">
					<h4 className="font-bold">CPP Module 09</h4>
					<div className="flex justify-between mt-2">
						<p className="font-bold text-sm rounded-2xl p-1 px-2 bg-green-600/50 text-green-300">100</p>
						<p className="text-[#94a3b8] text-sm font-normal my-auto">Nov 25, 2025</p>
					</div>
				</div>
				<div className="bg-[#3341554D] w-full rounded-md border border-gray-400/20 p-3 space-y-1">
					<h4 className="font-bold">CPP Module 08</h4>
					<div className="flex justify-between mt-2">
						<p className="font-bold text-sm rounded-2xl p-1 px-2 bg-green-600/50 text-green-300">100</p>
						<p className="text-[#94a3b8] text-sm font-normal my-auto">Nov 25, 2025</p>
					</div>
				</div>
				<div className="bg-[#3341554D] w-full rounded-md border border-gray-400/20 p-3 space-y-1">
					<h4 className="font-bold">CPP Module 07</h4>
					<div className="flex justify-between mt-2">
						<p className="font-bold text-sm rounded-2xl p-1 px-2 bg-green-600/50 text-green-300">100</p>
						<p className="text-[#94a3b8] text-sm font-normal my-auto">Nov 25, 2025</p>
					</div>
				</div>
				<div className="bg-[#3341554D] w-full rounded-md border border-gray-400/20 p-3 space-y-1">
					<h4 className="font-bold">cub3d</h4>
					<div className="flex justify-between mt-2">
						<p className="font-bold text-sm rounded-2xl p-1 px-2 bg-blue-600/50 text-blue-300">125</p>
						<p className="text-[#94a3b8] text-sm font-normal my-auto">Nov 25, 2025</p>
					</div>
				</div>
				<div className="bg-[#3341554D] w-full rounded-md border border-gray-400/20 p-3 space-y-1">
					<h4 className="font-bold">push_swap</h4>
					<div className="flex justify-between mt-2">
						<p className="font-bold text-sm rounded-2xl p-1 px-2 bg-blue-600/50 text-blue-300">125</p>
						<p className="text-[#94a3b8] text-sm font-normal my-auto">Nov 25, 2025</p>
					</div>
				</div>
			</div>
			<div onClick={() => (setArrowAchievements(!arrow_achievements))} className="bg-[#1e293b] my-5 rounded-2xl p-5 flex justify-between cursor-pointer">
				<h3 className="font-bold text-xl flex gap-2"><FontAwesomeIcon className="w-4 text-purple-400" icon={faAward}/>Achievements</h3>
				<FontAwesomeIcon className="w-4 text-gray-400 my-auto" icon={arrow_achievements ? faAngleUp : faAngleDown}/>
			</div>
			<div className={`grid grid-cols-4 gap-4 justify-between my-5 ${arrow_achievements ? "block" : "hidden"}`}>
				<div className="bg-[#591c87af] w-full rounded-md border border-gray-400/20 p-3 space-y-1">
					<div className="flex gap-3">
						<div>
							<p className="bg-white/10 rounded-md h-full flex p-3"><FontAwesomeIcon className="my-auto text-2xl text-purple-300/60" icon={faRibbon}/></p>
						</div>
						<div className="space-y-2">
							<h4 className="font-bold">Bonus Hunter</h4>
							<p className="text-sm rounded-md p-1 px-2 bg-[#6a11ae] text-[#dfc3f4] w-fit">hard</p>
						</div>
					</div>
				</div>
				<div className="bg-[#591c87af] w-full rounded-md border border-gray-400/20 p-3 space-y-1">
					<div className="flex gap-3">
						<div>
							<p className="bg-white/10 rounded-md h-full flex p-3"><FontAwesomeIcon className="my-auto text-2xl text-purple-300/60" icon={faRibbon}/></p>
						</div>
						<div className="space-y-2">
							<h4 className="font-bold">Code Explorer</h4>
							<p className="text-sm rounded-md p-1 px-2 bg-[#6a11ae] text-[#dfc3f4] w-fit">easy</p>
						</div>
					</div>
				</div>
				<div className="bg-[#591c87af] w-full rounded-md border border-gray-400/20 p-3 space-y-1">
					<div className="flex gap-3">
						<div>
							<p className="bg-white/10 rounded-md h-full flex p-3"><FontAwesomeIcon className="my-auto text-2xl text-purple-300/60" icon={faRibbon}/></p>
						</div>
						<div className="space-y-2">
							<h4 className="font-bold">Code Explorer</h4>
							<p className="text-sm rounded-md p-1 px-2 bg-[#6a11ae] text-[#dfc3f4] w-fit">none</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
