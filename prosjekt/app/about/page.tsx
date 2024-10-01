export default function AboutMe() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
        <h1 className="text-5xl font-bold mb-6">About Me</h1>
        <p className="text-lg text-center mb-8">
          I am Tor André, a passionate IT enthusiast with a strong background in programming and information systems.
        </p>
  
        <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-3xl font-semibold mb-4">Background</h2>
          <p className="text-md mb-4">
            I recently graduated with a Bachelor's degree in IT and Information Systems, where I developed foundational skills in programming, web solutions, and IT management.
          </p>
        </div>
  
        <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-3xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc pl-5">
            <li className="text-md">Proficient in JavaScript, TypeScript, and React</li>
            <li className="text-md">Experience with Node.js and Express</li>
            <li className="text-md">Knowledge of database management with MySQL and Prisma</li>
            <li className="text-md">Strong problem-solving and analytical skills</li>
          </ul>
        </div>
  
        <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-3xl font-semibold mb-4">Interests</h2>
          <p className="text-md mb-4">
            In my free time, I enjoy exploring technology trends, playing frisbeegolf, and learning about cars.
          </p>
        </div>
  
        <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
          <p className="text-md mb-4">
            Feel free to reach out via email: 
            <a href="mailto:torandre@example.com" className="text-green-400 underline"> torandre@example.com</a>
          </p>
        </div>
      </main>
    );
  }