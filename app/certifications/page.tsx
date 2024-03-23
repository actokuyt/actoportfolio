import {CertificationsCard} from "../../ui/cards";

export default function Certifications() {
  return (
    <main className="w-screen overflow-hidden border-box text-gray-700">
      <h1 className="m-4 text-center text-2xl font-bold ">Certifications</h1>

      <div className="mx-4 mb-[10vh] flex flex-col items-center" >
        <CertificationsCard />
      </div>
    </main>
  );
}
