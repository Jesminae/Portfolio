export default function App() {
return (
<div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] text-white px-6 py-10 overflow-hidden">

{/* HEADER */}
<div className="max-w-4xl mx-auto text-center animate-fadeDown">
<h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text animate-gradient">
Jesmina E
</h1>

<p className="mt-4 text-gray-300 text-lg animate-fadeUp delay-200">
CSE Student • MERN Stack Developer • Internship Seeker
</p>

<div className="flex justify-center gap-6 mt-6 text-sm animate-fadeUp delay-300">
<a href="https://github.com/Jesminae" target="_blank"
className="px-4 py-2 border border-pink-400 rounded-full hover:bg-pink-400 hover:text-black transition hover:scale-110">
GitHub
</a>
<a href="https://www.linkedin.com/in/jesmina-e-685536317" target="_blank"
className="px-4 py-2 border border-purple-400 rounded-full hover:bg-purple-400 hover:text-black transition hover:scale-110">
LinkedIn
</a>
<a href="mailto:jesminajesmi3@gmail.com"
className="px-4 py-2 border border-blue-400 rounded-full hover:bg-blue-400 hover:text-black transition hover:scale-110">
Email
</a>
</div>
</div>

{/* CONTENT */}
<div className="max-w-4xl mx-auto mt-14 space-y-10">

{/* ABOUT */}
<section className="glass-card animate-slideLeft">
<h2 className="section-title">About Me</h2>
<p className="text-gray-300 leading-relaxed">
I am a Computer Science Engineering student with intermediate
experience in MERN stack development. I enjoy creating responsive,
user-friendly web applications and I am actively seeking internship
opportunities.
</p>
</section>

{/* SKILLS */}
<section className="glass-card animate-slideRight">
<h2 className="section-title">Technical Skills</h2>
<div className="flex flex-wrap gap-3 mt-4">
{[
"HTML", "CSS", "JavaScript", "React", "Node.js",
"Express", "MongoDB", "Python", "Git & GitHub"
].map(skill => (
<span key={skill}
className="skill-pill animate-float">
{skill}
</span>
))}
</div>
</section>

{/* PROJECTS */}
<section className="glass-card animate-slideLeft">
<h2 className="section-title">Projects</h2>

<div className="grid md:grid-cols-2 gap-6 mt-4">

{/* Project 1 */}
<div className="project-card">
<h3 className="project-title">Stopwatch Web Application</h3>
<p className="project-desc">
A responsive stopwatch with start, pause, reset and lap
functionality built using python.
</p>
<a
href="https://github.com/Jesminae/stopwatch"
target="_blank"
className="project-link"
>
View on GitHub
</a>
</div>

{/* Project 2 */}
<div className="project-card">
<h3 className="project-title">Personal Portfolio Website</h3>
<p className="project-desc">
A modern, animated, responsive personal portfolio built using
React and Tailwind CSS to showcase skills and projects.
</p>
<a
href="https://github.com/Jesminae/Portfolio"
target="_blank"
className="project-link"
>
View on GitHub
</a>
</div>

</div>
</section>

{/* CERTIFICATIONS */}
<section className="glass-card animate-slideRight">
<h2 className="section-title">Certifications</h2>
<ul className="list-disc list-inside text-gray-300 space-y-1 mt-2">
<li>Python Foundation Certification</li>
<li>Tata – AI Powered Data Analytics Job Simulation</li>
</ul>
</section>

<p className="text-center text-gray-400 text-sm pt-4 animate-fadeUp">
Open to Internship Opportunities • Resume will be added soon
</p>
</div>

{/* EXTRA STYLES */}
<style>{`
.glass-card {
background: rgba(255,255,255,0.1);
backdrop-filter: blur(16px);
padding: 1.5rem;
border-radius: 1rem;
box-shadow: 0 20px 40px rgba(0,0,0,0.3);
transition: transform 0.4s ease;
}
.glass-card:hover { transform: scale(1.03); }
.section-title { font-size: 1.5rem; font-weight: 600; margin-bottom: 0.5rem; }
.skill-pill {
padding: 0.35rem 1rem;
border-radius: 9999px;
background: linear-gradient(90deg, rgba(236,72,153,0.4), rgba(168,85,247,0.4));
transition: all 0.3s ease;
}
.skill-pill:hover { background: linear-gradient(90deg,#ec4899,#a855f7); transform: scale(1.15); }

@keyframes fadeDown { from {opacity:0; transform:translateY(-30px);} to {opacity:1;} }
@keyframes fadeUp { from {opacity:0; transform:translateY(30px);} to {opacity:1;} }
@keyframes slideLeft { from {opacity:0; transform:translateX(-60px);} to {opacity:1;} }
@keyframes slideRight { from {opacity:0; transform:translateX(60px);} to {opacity:1;} }
@keyframes gradient { 0%{background-position:0%} 100%{background-position:200%} }

.animate-fadeDown { animation: fadeDown 1s ease forwards; }
.animate-fadeUp { animation: fadeUp 1s ease forwards; }
.animate-slideLeft { animation: slideLeft 1s ease forwards; }
.animate-slideRight { animation: slideRight 1s ease forwards; }
.animate-gradient { background-size: 200%; animation: gradient 4s linear infinite; }
.animate-float { animation: fadeUp 0.8s ease forwards; }
`}</style>
</div>
);
}
