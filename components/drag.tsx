"use client";

import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import {
	DraggableCardBody,
	DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function DraggableCardDemo() {
	const positions = [
		"absolute top-10 left-[20%] rotate-[-5deg]",
		"absolute top-40 left-[25%] rotate-[-7deg]",
		"absolute top-5 left-[40%] rotate-[8deg]",
		"absolute top-32 left-[55%] rotate-[10deg]",
		"absolute top-20 right-[35%] rotate-[2deg]",
		"absolute top-24 left-[45%] rotate-[-7deg]",
		"absolute top-8 left-[30%] rotate-[4deg]",
	];

	return (
		<div className="py-20">
			<h1 className="heading mb-6">
				A small selection of{" "}
				<span className="text-purple">recent projects</span>
			</h1>
			<DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip dark:text-neutral-800 bg-black rounded-3xl">
				{projects.map((project, index) => (
					<DraggableCardBody 
						key={project.id} 
						className={positions[index % positions.length]}
					>
						{/* Project Image Section */}
						<div className="relative flex items-center justify-center w-full overflow-hidden h-[20vh] mb-4">
							<div
								className="relative w-full h-full overflow-hidden rounded-2xl"
								style={{ backgroundColor: "#13162D" }}
							>
								<img src="/bg.png" alt="bgimg" className="w-full h-full object-cover" />
							</div>
							<img
								src={project.img}
								alt="cover"
								className="z-10 absolute bottom-0"
							/>
						</div>

						{/* Project Title */}
						<h3 className="font-bold text-lg line-clamp-1 mb-2 text-neutral-700 dark:text-neutral-300">
							{project.title}
						</h3>

						{/* Project Description */}
						<p
							className="text-sm font-normal line-clamp-2 mb-4 text-neutral-600 dark:text-neutral-400"
							style={{
								color: "#BEC1DD",
							}}
						>
							{project.des}
						</p>

						{/* Tech Stack Icons and Link */}
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								{project.iconLists.map((icon, iconIndex) => (
									<div
										key={iconIndex}
										className="border border-white/[.2] rounded-full bg-black w-6 h-6 flex justify-center items-center"
										style={{
											transform: `translateX(-${3 * iconIndex + 1}px)`,
										}}
									>
										<img src={icon} alt={`tech-${iconIndex}`} className="p-1" />
									</div>
								))}
							</div>

							<div className="flex justify-center items-center">
								<p className="flex text-xs text-purple">
									Check Live Site
								</p>
								<FaLocationArrow className="ms-1" color="#CBACF9" size={12} />
							</div>
						</div>
					</DraggableCardBody>
				))}
			</DraggableCardContainer>
		</div>
	);
}
