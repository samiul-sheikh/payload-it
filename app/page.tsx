import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import { Skills } from "./components/Skills";
import { ProjectsComponent } from "./components/projects.component";
import { ContactComponent } from "./components/contact.component";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <ProjectsComponent />
      <ContactComponent />
    </div>
  );
}
