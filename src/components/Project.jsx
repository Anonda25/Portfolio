
import Digital from '../assets/Screenshot 2025-01-04 130418.png'
import Nike from '../assets/Screenshot 2025-01-04 130236.png'
import Clothify from '../assets/HomeReper.png'
import { FaGithub } from 'react-icons/fa'

const Project = () => {
  const projects = [
    {
      title: "T20 World cup",
      description:
        "The T20 World Cup is known for its thrilling matches, where teams aim to score as many runs as possible in a short span of 20 overs.Global Audience: Millions of cricket fans from around the world tune in",
      techStack: ["React", "Tailwind CSS"],
      link: "https://t20-world-cup-2024.netlify.app/",
      github: 'https://github.com/Anonda25/Test-T20-World-cup-2024',
      image: Digital, // Replace with your project screenshot
    },
    {
      title: "Fitness",
      description:
        "Physical fitness refers to the overall well-being of the body and its ability to efficiently carry out daily activities, sports, and occupational tasks without undue fatigue. It encompasses multiple components.",
      techStack: ["HTML", "CSS",],
      link: "https://anonda25.github.io/assignment-2/",
      github: 'https://github.com/Anonda25/assignment-2',
      image: Nike, // Replace with your project screenshot
    },
    {
      title: "Home Servise",
      description:
        "we bring expert home services right to your doorstep. Whether you need assistance with maintenance, repairs, cleaning, or other essential tasks, our skilled professionals are here to provide reliable and efficient solutions..",
      techStack: ["React JS", "MongoDB", "Tailwind CSS"],
      link: "https://homerepier.netlify.app/",
      github: 'https://github.com/Anonda25/Home_Services',
      // github_Server: 'https://github.com/programming-hero-web-course2/b10a11-server-side-Anonda25',
      image: Clothify, // Replace with your project screenshot
    },
  ];
  return (
    <section id='project' className='bg-gradient-to-r bg-gray-900 py-16 px-6'>
      <div className='max-w-7xl mx-auto '>
        <h2 className='text-5xl font-bold text-center text-gray-300 mb-12'>Projects</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10  '>
          {projects.map((project, index) => (
            <div key={index} className='bg-gray-950 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105'>
              <img src={project.image} alt={project.title} className='w-full h-48 object-cover px-3 pt-3 rounded-2xl' />
              <div className='p-6'>
                <h3 className='text-2xl font-semibold text-gray-300 mb-2'>{project.title}</h3>
                <p className='text-gray-300 mb-4'>{project.description}</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.techStack.map((tech, idx) => (
                    <div key={idx} className='bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full'>{tech}</div>
                  ))}
                </div>
                <div className='flex gap-3 '>
                  <a href={project.link} target='_blank' rel='noopener noreferrer' className='inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors'>View Project</a>
                  <a href={project.github} target='_blank' rel='noopener noreferrer' className='flex gap-2 items-center bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition-colors'><FaGithub /> Github</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project

