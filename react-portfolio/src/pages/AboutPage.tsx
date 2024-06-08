import Image from '/images/profile-image.jpeg'

const AboutPage = () => {
  return (
    <main className='pb-[6rem] md:mt-[7rem] lg:mt-2 lg:ml-[13rem] lg:flex lg:flex-col lg:justify-center lg:h-screen'>
      <div className="mt-6 px-10 lg:px-0 lg:flex lg:justify-center">
        <a href="#" className='font-semibold inline-block text-[1.35rem] lg:text-[1.6rem] gradient-text'
        >Francis Sanchez
        </a>
      </div>
      <div className='md:flex md:justify-evenly md:items-center md:ml-10 lg:ml-0 lg:mt-8'>
        <img src={Image} alt="" className='mt-6 max-w-[300px] mx-auto lg:mx-0 lg:max-w-[400px]' />
        <div className='text-center px-5 md:px-0 mt-4'>
          <p className='font-medium text-[1.2rem] gradient-text lg:text-[1.4rem]'>Nice to meet you! I'm Francis Sanchez.</p>
          <p className='mb-2 max-w-[30rem] mx-auto lg:text-[1.2rem]'>
            Based in Canada, I'm a front-end developer passionate about building
            accessible web apps that users love.
          </p>
          <a href="https://wa.me/6723385312" target="_blank" className='font-semibold text-[1.2rem] lg:text-[1.3rem] gradient-text'>Contact me</a>
        </div>
      </div>
    </main>
  )
}

export default AboutPage