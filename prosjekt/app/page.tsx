// app/page.tsx

"use client"; // Mark this component as a Client Component

const backgrounds = [
  "https://source.unsplash.com/random/1920x1080/?technology",
  "https://source.unsplash.com/random/1920x1080/?nature",
  "https://source.unsplash.com/random/1920x1080/?city",
  "https://source.unsplash.com/random/1920x1080/?abstract",
  "https://source.unsplash.com/random/1920x1080/?space",
];

const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-white p-6" style={{ backgroundImage: `url(${randomBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className="text-6xl font-bold mb-6 animate-pulse">Welcome to My Random Start Page</h1>
      <p className="text-lg text-center mb-8">
        Discover the beauty of randomness and explore the unknown.
      </p>

      <div className="flex space-x-4 mb-8">
        <a href="/about" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
          About Me
        </a>
        <a href="/projects" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          My Projects
        </a>
      </div>

      <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-4xl font-semibold mb-4">Random Fact</h2>
        <p className="text-md mb-4">
          Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible!
        </p>
      </div>
    </main>
  );
}
