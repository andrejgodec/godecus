export const profile = {
  name: 'Andrej Godec',
  title: 'Application Consultant',
  location: 'Izola, Slovenia',
  email: 'andrej.godec0@gmail.com',
  linkedin: 'https://www.linkedin.com/in/andrejgodec/',
  github: 'https://github.com/andrejgodec',
}

export const summary = `Experienced Application Consultant with over 7 years in software development and cloud consulting. Specialising in IBM Cloud Pak for Integration, RedHat OpenShift, and enterprise middleware. Passionate about bridging development and operations through modern DevOps practices.`

export const work = [
  {
    title: 'Application Consultant',
    company: 'IBM',
    period: '2019 – Present',
    description: 'Consulting on RedHat OpenShift and IBM Cloud Pak For Integration. Designing and implementing enterprise integration solutions for clients across financial services and telecommunications.',
    tags: ['OpenShift', 'IBM CP4I', 'MQ', 'ACE', 'Kubernetes', 'DevOps'],
  },
  {
    title: 'Frontend Developer',
    company: 'Umwerk GmbH',
    period: '2018 – 2019',
    description: 'Developed frontend applications using Angular and VueJS. Worked on customer-facing web products and internal tooling with Node.js backends.',
    tags: ['Angular', 'VueJS', 'Node.js', 'TypeScript'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Actual I.T. d.d',
    period: '2017 – 2018',
    description: 'Built full-stack enterprise applications. Responsible for C# backend development and AngularJS frontend implementations.',
    tags: ['C#', 'AngularJS', '.NET', 'SQL'],
  },
]

export const education = [
  {
    degree: "Master's Degree",
    field: 'Informatics and Technologies of Communication',
    institution: 'University of Maribor (FERI)',
    period: '2013 – 2017',
    location: 'Maribor, Slovenia',
  },
  {
    degree: "Bachelor's Degree",
    field: 'Computer Science',
    institution: 'University of Primorska (FAMNIT)',
    period: '2010 – 2013',
    location: 'Koper, Slovenia',
  },
  {
    degree: 'Erasmus+ Exchange',
    field: 'Computer Science',
    institution: 'Università degli studi Salerno',
    period: '2016',
    location: 'Salerno, Italy',
  },
]

export const skills: Record<string, string[]> = {
  'Cloud & DevOps': ['IBM Cloud Pak for Integration', 'RedHat OpenShift', 'Kubernetes', 'Docker', 'CI/CD', 'Helm'],
  Frontend: ['React', 'Angular', 'VueJS', 'TypeScript', 'Tailwind CSS'],
  Backend: ['Node.js', 'C#', '.NET', 'REST APIs'],
  Tools: ['Git', 'VS Code', 'Jira', 'Confluence'],
  Interests: ['Cloud Architecture', 'DevOps', 'Open Source'],
}

export const achievements = [
  { title: 'PRIMATIJADA 2013', description: '1st place in programming competition' },
  { title: 'Internet Olympiad 2013', description: 'Competitor in national internet olympiad' },
]

export const publications = [
  {
    title: 'Software Quality Aspects When Migrating to Microservice Architecture',
    venue: 'SQAMIA 2019',
    year: 2019,
  },
]

export const certifications = {
  label: 'IBM & Cloud Certifications',
  url: 'https://www.credly.com/users/andrej-godec',
}
