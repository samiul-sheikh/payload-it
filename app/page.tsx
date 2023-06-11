import { NavbarComponent } from "./components/navbar.component";
import { HeaderComponent } from "./components/header.component";
import { AboutComponent } from "./components/about.component";
import { SkillsComponent } from "./components/skills.component";
import { ProjectsComponent } from "./components/projects.component";
import { ContactComponent } from "./components/contact.component";

export default function Home() {
  return (
    <div>
      <NavbarComponent />
      <HeaderComponent />
      <AboutComponent />
      <SkillsComponent />
      <ProjectsComponent />
      <ContactComponent />
    </div>
  );
}
