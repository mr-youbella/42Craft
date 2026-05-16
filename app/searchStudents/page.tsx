"use client";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { getSearchStudents } from "../42API/getSearchStudents";
import Link from "next/link";

export default function SearchStudent()
{
	let	[search, setSearch] = useState<string>("");
	let	[result, setResult] = useState<any[]>([]);
	useEffect(() =>
	{
		const timer = setTimeout(async () =>
		{
	    	if (search.length < 2)
				{ setResult([]); return; }

	    	const response = await fetch("/routing/searchStudents/",
			{
	      		method: "POST",
	      		headers: { "Content-Type": "application/json" },
	      		body: JSON.stringify({ login: search }),
	   		 });
	   		const students = await response.json();
	   		setResult(students.data);
	  	}, 300);
	 	return (() => clearTimeout(timer));
	}, [search]);

	return (
		<div className="min-h-screen">
			<nav className="bg-[#02061780]">
				<div className="flex justify-between py-5 mx-4 xl:mx-auto xl:w-1/2">
					<div className="flex gap-2">
						<p className="bg-linear-to-b from-[#2980B9] to-[#2980B9] p-2.5 rounded-xl font-bold text-center">42</p>
						<h1 className="font-bold text-xl my-auto">Search Students</h1>
					</div>
					<Link href="/profile"><button className="text-[#94a3b8] my-auto flex gap-3 hover:bg-amber-50/10 p-2 cursor-pointer rounded-2xl"><FontAwesomeIcon className="my-auto" icon={faArrowLeft}/>back</button></Link>
				</div>
			</nav>
			<main className="xl:w-1/2 mx-4 xl:mx-auto my-10">
				<div className="w-full">
					<input value={search} onChange={(event) => (setSearch(event.target.value))} className="p-3 w-full rounded-xl bg-blue-100/20" type="search" placeholder="Search by login"/>
				</div>
				<div className="mt-10">
					<h2 className="text-2xl font-bold mb-5">All Students</h2>
					<div className="grid grid-cols-2 xl:grid-cols-4 gap-2">
						{result.map((value, index) =>
						{
							return (
								<Link key={index} href={`/students/${value.login}`}>
									<div className="bg-[#1e293b] rounded-2xl p-4 cursor-pointer hover:bg-blue-400/30">
										<img className="w-15 rounded-xl" src={value.image.link}/>
										<h3 className="mt-2 font-bold">{value.usual_full_name}</h3>
										<p className="text-gray-300 text-sm">@{value.login}</p>
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			</main>
		</div>
	);
}
