import { SkillsInfo } from "../components/Skills/Data"

const SkillsPage = () => {
  return (
    <main className="md:mt-[3.5rem] lg:ml-[11rem] lg:pb-20 mb-[4rem] flex flex-col justify-center items-center h-screen">
      <h2 className="text-[1.6rem] lg:text-[2rem] font-semibold underline-text inline-block ml-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 lg:px-0 mt-8 max-w-[700px] md:max-w-[800px] w-full">
        {SkillsInfo.map((card, idx) => (
          <div className="bg-card py-2 lg:py-4 flex flex-col items-center gap-2"
            key={idx}>
            <img src={card.image} alt="" />
            <p className="font-medium">{card.name}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default SkillsPage