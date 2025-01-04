
import AboutImg from '../assets/coding_Imgs.jpg'
import { FaChevronRight } from 'react-icons/fa'

const About = () => {
  return (
    <div id='about' className='py-20 bg-gray-900 z-50 text-gray-300'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-4xl md:text-5xl font-bold mb-11 text-center'>About Me</h2>
        <div className='flex flex-col md:flex-row gap-20 items-center'>
          {/* img section */}
          <div className='relative border hidden md:block border-blue-600 p-1 rounded-full bg-blue-500 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500'>
            <img src={AboutImg} alt="" className='w-[300px] md:w-[1500px] rounded-full border-blue-600 border shadow-blue-500 ' />
          </div>
          {/* paragraph section */}
          <div className='p-5 md:p-10 bg-gray-950 rounded-md shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500'>
            <p className='text-lg leading-7 mb-6'>Hi! I m Anonda Biswas,   a passionate programmer and web developer. I specialize in
              creating responsive, user-friendly web applications using modern
              technologies like React, Tailwind CSS, JavaScript, and MongoDB.
              With a keen eye for detail and a love for problem-solving, I
              continuously strive to improve my skills and deliver impactful
              solutions.</p>
            <p className='text-lg leading-7 mb-6'>When I’m not coding, I enjoy exploring new tech trends, engaging
              in creative projects, and learning something new every day. Let’s
              connect and build something amazing together!.</p>
            <div className='mt-5'>
              <h1 className='font-bold text-2xl mb-5 text-blue-400'>My Skills</h1>
              <div className='flex flex-wrap gap-4 mb-5 text-sm'>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>HTML</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>CSS</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>JavaScript</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>React</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>MongoDB</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Tailwind Css</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Git</p>
                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Github</p>
              </div>
              <button className='px-3 py-1 rounded-md bg-blue-500 text-white flex items-center gap-1'>Contact<FaChevronRight /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

//---------------------------------------------------------------------------------------
// const AboutMe = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen flex items-center justify-center">
//       <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
//         <div className="flex flex-col lg:flex-row items-center">
//           {/* Profile Image */}
//           <div className="mb-6 lg:mb-0 lg:mr-8">
//             <img
//               src="https://via.placeholder.com/150" // Replace with your profile image URL
//               alt="Ananda Biswas"
//               className="rounded-full w-36 h-36 border-4 border-gray-300 shadow-md"
//             />
//           </div>
//           {/* About Me Content */}
//           <div>
//             <h1 className="text-3xl font-bold text-gray-800 mb-2">
//               Hi, I'm Ananda Biswas
//             </h1>
//             <p className="text-gray-600 leading-relaxed mb-4">
// I’m a passionate programmer and web developer. I specialize in
// creating responsive, user-friendly web applications using modern
// technologies like React, Tailwind CSS, JavaScript, and MongoDB.
// With a keen eye for detail and a love for problem-solving, I
// continuously strive to improve my skills and deliver impactful
// solutions.
//             </p>
//             <p className="text-gray-600 leading-relaxed">
// When I’m not coding, I enjoy exploring new tech trends, engaging
// in creative projects, and learning something new every day. Let’s
// connect and build something amazing together!
//             </p>
//           </div>
//         </div>
//         {/* Skills Section */}
//         <div className="mt-6">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-3">Skills</h2>
//           <ul className="flex flex-wrap gap-4">
//             {[
//               "HTML",
//               "CSS",
//               "JavaScript",
//               "React",
//               "Tailwind CSS",
//               "MongoDB",
//               "Git",
//               "GitHub",
//             ].map((skill, index) => (
//               <li
//                 key={index}
//                 className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full shadow-sm text-sm font-medium"
//               >
//                 {skill}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;
