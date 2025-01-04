import React from 'react'
const education = [
  {
    degree: "Political Science",
    institution: "Govt. Hazi Mohammad Mohsin College khulna",
    year: "2023 - 2024",
    description: "I am a new student pursuing Honors in Political Science, eager to explore the complexities of governance, international relations, and political theory.",
    icon: "🎓",
    school: "https://ghmmc.edu.bd/"
  },
  {
    degree: "Higher Secondary (11th-12th) ",
    institution: "Govt. Shahpur Madhugram College",
    year: "2021 - 2022",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Vel molestiae.",
    icon: "🎓",
    school: "https://smc69.edu.bd/"
  },
];

const Education = () => {
  return (
    <section id='education' className='bg-gradient-to-r bg-gray-950 py-16 px-6'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-center text-gray-300 mb-12'>Education &  My Skills</h2>
        <div className='grid md:grid-cols-2 gap-12'>
          {/* Education section */}
          <div>
            <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Education</h3>
            {education.map((edu, index) => (
              <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6'>
                <div className='text-4xl mr-6 text-blue-500'>{edu.icon}</div>
                <div>
                  <h4 className='text-xl font-bold text-gray-200'>{edu.degree}</h4>
                  <p className='text-gray-300'>{edu.institution}</p>
                  <p className='text-gray-300 text-sm italic'>{edu.year}</p>
                  <p className='text-gray-300 mt-2'>{edu.description}</p>
                  <a href={edu.school} target='_blank' rel='noopener noreferrer' className='inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors'>View College</a>
                </div>
              </div>
            ))}
          </div>
          {/* My skills */}
          <div>
            <h3 className='text-3xl font-semibold text-gray-300 mb-6'> My Skills</h3>
            <div className="space-y-4">
              {/* html & css */}
              <div className=" ">

                <label htmlFor="htmlandcss" className=" text-white ">
                  HTML & CSS : 90%
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5 mt-3">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>
              {/*  Java Script  */}
              <div className=" ">

                <label htmlFor="htmlandcss" className=" text-white ">
                  Java Script : 85%
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5 mt-3">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              {/*   Tailwind Css */}
              <div className=" ">

                <label htmlFor="htmlandcss" className=" text-white ">
                  Tailwind Css: 90%
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5 mt-3">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>
              {/* React JS */}
              <div className="">
                <label htmlFor="htmlandcss" className="w-2/12 text-white">
                  React JS : 90%
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5 mt-3">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>
              {/* MongoDB  */}
              <div className="">
                <label htmlFor="htmlandcss" className="w-2/12 text-white">
                  MongoDB : 85%
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5 mt-3">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              {/* Git  */}
              <div className="">
                <label htmlFor="htmlandcss" className="w-2/12 text-white">
                  Git : 85%
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5 mt-3">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              {/* Github */}
              <div className="">
                <label htmlFor="htmlandcss" className="w-2/12 text-white">
                  GitHub : 85%
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5 mt-3">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Education
