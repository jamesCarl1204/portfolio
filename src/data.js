// Edit your info here
export const profile = {
  name: 'Carlo James T. Magsipoc',
  role: 'Fullstack Developer',
  location: 'MANILA, PH',
  status: 'Available for Freelance',
  bio: `Hello! I'm Carlo, an aspiring fullstack developer passionate about
    creating clean, functional, and user-friendly web applications.
    I enjoy turning ideas into practical digital experiences through
    thoughtful design and problem-solving.`,
  email: 'jamesmagsipc887@gmail.com',
  github: 'https://github.com',
  facebook: 'https://facebook.com',
  tiktok: 'https://tiktok.com',
}

export const stack = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'Mysql']

// Replace the PNGs in public/projects/ with your own screenshots (same file names),
// or change the paths below.
export const projects = [
  {
    category: 'School Project',
    title: 'Qr Code-based attendance monitoring system',
    description:'A QR Code Attendance Monitoring System that automates student attendance tracking, sends real-time email notifications to parents, and provides an AI chatbot to assist teachers with attendance-related tasks.',

    url: 'https://analytics.alexmorgan.dev',
    laptopImage: '/projects/image1laptop.png',
    phoneImage: '/projects/image1phone.png',
    tech: ['react', 'node.js', 'express', 'mysql'],
  },
  {
    category: 'ONLINE TOOLS',
    title: 'ASSESS WATCH',
    description: 'AssessWatch is a web platform for monitoring browser activity during online assessments and work sessions. Participants join through a Chrome extension with a session code, and proctors see tab switches, focus loss, copy/paste activity, and AI-site visits live on a dashboard.',
    laptopImage: '/projects/project-2-laptop.png',
    phoneImage: '/projects/project-2-phone.png',
    tech: ['WebAssembly', 'Monaco Editor', 'Rust', 'Docker', 'Node.js'],
  },
  
]
