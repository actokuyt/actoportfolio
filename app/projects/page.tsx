import ProjectTabs from "../../ui/tabs"

export default function Certifications() {
  return (
    <main className="w-screen overflow-hidden border-box text-gray-700">
      <h1 className="m-4 text-center text-2xl font-bold ">Projects</h1>

      <div className="mx-4 mb-[10vh] flex flex-col " >
        <ProjectTabs />
      </div>
    </main>
  );
}