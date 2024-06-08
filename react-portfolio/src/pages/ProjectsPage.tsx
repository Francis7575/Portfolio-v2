import challengeOne from '/images/challenge-one.png'
import challengeTwo from '/images/challenge-two.png'
import challengeThree from '/images/challenge-three.png'
import challengeFour from '/images/challenge-four.png'

const ProjectsPage = () => {
  const projectsInfo = [
    { image: challengeOne, name: 'Officelite coming soon site', tools: 'React-router, Typescript & Tailwind CSS', viewProject: 'View Project', viewCode: 'View Code', websiteLink: 'https://francis7575.github.io/officelite-site/', codeLink: 'https://github.com/Francis7575/officelite-site' },
    { image: challengeTwo, name: 'Bookmark landing page', tools: 'React, Typescript & Tailwind CSS', viewProject: 'View Project', viewCode: 'View Code', websiteLink: 'https://francis7575.github.io/bookmark-landing/', codeLink: 'https://github.com/Francis7575/bookmark-landing' },
    { image: challengeThree, name: 'Single-page design portfolio', tools: 'React, Typescript & Tailwind CSS', viewProject: 'View Project', viewCode: 'View Code', websiteLink: 'https://francis7575.github.io/single-page-portfolio/', codeLink: 'https://github.com/Francis7575/single-page-portfolio' },
    { image: challengeFour, name: 'Contact form', tools: 'React, Typescript & Tailwind CSS', viewProject: 'View Project', viewCode: 'View Code', websiteLink: 'https://francis7575.github.io/contact-form/', codeLink: 'https://github.com/Francis7575/contact-form' },
  ]
  return (
    <main className='pb-[7rem] mt-8 md:mt-28 lg:mt-8 lg:ml-40'>
      <div className='flex justify-center'>
        <h2 className='text-[1.65rem] font-semibold ml-6 mb-6 underline-text inline-block'>
          Projects
        </h2>
      </div>
      <div className='grid place-items-center md:grid-cols-2 gap-7 lg:gap-y-16 px-6 lg:px-0'>
        {projectsInfo.map((challenge, idx) => (
          <div key={idx}>
            <div className='max-w-[320px] lg:max-w-[365px]'>
              <a href={challenge.websiteLink} target='_blank' className='opacity-100 hover:opacity-80'>
                <img src={challenge.image} alt="Project Preview" />
              </a>
              <p className='font-bold text-[1.25rem] mt-2'>{challenge.name}</p>
              <p className='font-semibold'>{challenge.tools}</p>
            </div>
            <div className='mt-2'>
              <a href={challenge.websiteLink} target="_blank" className='text-black hover:text-sunset-orange mr-4 underline-text font-medium'>{challenge.viewProject}</a>
              <a href={challenge.codeLink} target="_blank" className='text-black hover:text-sunset-orange underline-text font-medium'>{challenge.viewCode}</a>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center mt-6 md:mt-10'>
        <div className='gradient-background lg:px-20 px-10 py-2 rounded-[.625rem] cursor-pointer'>
          <a href="https://www.frontendmentor.io/profile/Francis7575" target='_blank'
            className='uppercase text-white'>
            View More Projects
          </a>
        </div>
      </div>
    </main>
  )
}

export default ProjectsPage