export default function Home() {
  return (
    <main className="text-text-primary pt-20">
      <div className="pt-20 h-screen" id="home">
        <h1 className="text-3xl font-bold font-kalam ">Home</h1>
      </div>
      <div className="pt-20 h-screen" id="about">
        <h1 className="text-3xl font-bold font-kalam ">About</h1>
      </div>
      <div className="pt-20 h-fit py-12 px-6" id="projects">
        <p className="text-base text-secondary text-center font-kalam ">
          Projects
        </p>
        <h2 className="text-2xl text-center font-bold mb-10">
          Take a look at my highlighted projects
        </h2>
        <div className="projects-container flex gap-6 flex-col"></div>
      </div>
      <div className="pt-20 h-screen" id="contact">
        <h1 className="text-3xl font-bold font-kalam ">Contacts</h1>
      </div>
    </main>
  );
}
