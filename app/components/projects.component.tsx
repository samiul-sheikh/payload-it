import React from "react";
import portfolio from "../../public/assets/projects/portfolio.png";
import perfectClick from "../../public/assets/projects/perfectClick.png";
import news24 from "../../public/assets/projects/news24.png";
import userManagement from "../../public/assets/projects/userManagement.png";
import fashionHouse from "../../public/assets/projects/fashion.png";
import { SingleProjectComponent } from "./single-project.component";

interface ProjectsComponentProps {}

export const ProjectsComponent: React.FC<ProjectsComponentProps> = (
  props: ProjectsComponentProps
) => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">Sample Demo</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <SingleProjectComponent
            title="Portfolio"
            backgroundImg={portfolio}
            projectUrl="/portfolio"
          />
          <SingleProjectComponent
            title="Perfect Click"
            backgroundImg={perfectClick}
            projectUrl="/perfect-click"
          />
          {/* <SingleProjectComponent
            title="News 24"
            backgroundImg={news24}
            projectUrl="/news24"
          /> */}
          <SingleProjectComponent
            title="User Management"
            backgroundImg={userManagement}
            projectUrl="/user-management"
          />
          <SingleProjectComponent
            title="Fashion House"
            backgroundImg={fashionHouse}
            projectUrl="/fashion-house"
          />
        </div>
      </div>
    </div>
  );
};
