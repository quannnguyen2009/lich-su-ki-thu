export default function DeveloperPage() {
  return (
    <div className="bg-gray-50 text-gray-900 px-6 py-12 pt-24">
			<div className="flex justify-center mb-8">
				<img src="/images/developer/avatar.png" alt="Quan" className="w-28 h-28 rounded-full object-cover border border-gray-300" />
  		</div>

      <div className="max-w-4xl mx-auto flex flex-col gap-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold"> Hi, I’m <span className="text-[#BF2F1E]">Quan</span></h1>
          <p className="text-gray-600 text-lg">Student Developer • Web • ML • Competitive Programming</p>
          <div className="flex justify-center gap-4">
            <a href="#education" className="px-5 py-2 bg-[#BF2F1E] text-white rounded-lg font-medium">Education</a>
            <a href="#contact" className="px-5 py-2 border border-gray-300 rounded-lg">Contact</a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="text-gray-700">I’m a student developer interested in full-stack web development, machine learning, and problem solving. I like building clean interfaces, writing efficient code, and understanding how things work under the hood.</p>
        </div>
    
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">Skills</h2>

          <div className="flex gap-3">
            <span className="px-4 py-1 rounded-full bg-gray-100 border border-gray-200 text-sm text-gray-700">JavaScript</span>
            <span className="px-4 py-1 rounded-full bg-gray-100 border border-gray-200 text-sm text-gray-700">TypeScript</span>
            <span className="px-4 py-1 rounded-full bg-gray-100 border border-gray-200 text-sm text-gray-700">React</span>
            <span className="px-4 py-1 rounded-full bg-gray-100 border border-gray-200 text-sm text-gray-700">Next.js</span>
            <span className="px-4 py-1 rounded-full bg-gray-100 border border-gray-200 text-sm text-gray-700">Tailwind CSS</span>
            <span className="px-4 py-1 rounded-full bg-gray-100 border border-gray-200 text-sm text-gray-700">Python</span>
            <span className="px-4 py-1 rounded-full bg-gray-100 border border-gray-200 text-sm text-gray-700">C++</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 id="education" className="text-2xl font-semibold">Education</h2>

          <div className="flex flex-col gap-3">
            <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
              <h3 className="font-medium text-gray-800">High School</h3>
              <p className="text-sm text-gray-600">HUS High School for Gifted Students</p>
              <p className="text-xs text-gray-500">2024 – Present</p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
              <h3 className="font-medium text-gray-800">Secondary School</h3>
              <p className="text-sm text-gray-600">Hanoi - Amsterdam Secondary School</p>
              <p className="text-xs text-gray-500">2020 – 2024</p>
            </div>
          </div>
        </div>

        <div id="contact" className="text-center flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Get in Touch</h2>
          <p className="text-gray-600">Want to collaborate or chat about code?</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:quannnguyen2009@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-[#BF2F1E]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-4 h-4 fill-current">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
              Email
            </a>

            <a href="http://github.com/quannnguyen2009" className="flex items-center gap-2 text-gray-700 hover:text-[#BF2F1E]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-4 h-4 fill-current">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
              GitHub
            </a>

            <a href="https://discord.com/users/1239486070538895360" className="flex items-center gap-2 text-gray-700 hover:text-[#BF2F1E]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-4 h-4 fill-current">
                <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019" />
              </svg>
              Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}