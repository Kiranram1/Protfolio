"use client";

import { projects } from "@/data";
import { DraggableProjectCard, DraggableCardContainer } from "./ui/draggable-card";

const DraggableProjects = () => {
  return (
    <div className="py-20">
      <div className="flex flex-col items-center space-y-2 mt-1">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
        
      </div>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-16 mt-10">
        {projects.map((project) => (
          <DraggableCardContainer key={project.id}>
            <DraggableProjectCard project={project} />
          </DraggableCardContainer>
        ))}
      </div>

      <p className="uppercase tracking-widest text-xs text-center text-white/70">
          Drag and play
        </p>
    </div>
  );
};

export default DraggableProjects; 