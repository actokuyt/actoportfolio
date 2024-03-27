import ProjectTabs from "../../ui/tabs"
import DestopProjectTabs from "../../ui/desktop-tabs"
import DesktopProjectTabs from "../../ui/desktop-tabs";

export default function Certifications() {
  return (
    <main className="w-screen overflow-hidden border-box text-gray-700 md:mt-16">
      <h1 className="m-4 text-center text-2xl font-bold ">Projects</h1>

      <div className="mx-4 mb-[10vh] flex flex-col md:hidden" >
        <ProjectTabs />
      </div>
      <div className="hidden md:block md:mx-auto md:w-[90%]" >
        <DesktopProjectTabs />
      </div>
    </main>
  );
}