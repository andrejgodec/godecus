import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  // Personal Information
  name = 'Andrej';
  surname = 'Godec';
  email = 'andrej.godec0@gmail.com';
  location = 'Izola, Slovenia';
  position = 'Application Consultant';
  linkedin = 'https://www.linkedin.com/in/andrej-godec/';
  github = 'https://github.com/andrejgodec';

  // Professional Summary
  summary = 'Technology enthusiast with a focus on cloud technologies, Kubernetes, and containers. Experienced in consulting, development, and implementation of enterprise-level solutions. Passionate about autonomous driving cars and continuous learning.';

  // Work Experience
  workExperience = [
    {
      company: 'IBM',
      position: 'Application Consultant',
      location: 'IBM Cloud',
      period: '2019 - Present',
      description: 'Consulting about RedHat OpenShift & IBM Cloud Pak For Integration.',
      technologies: ['RedHat OpenShift', 'IBM Cloud Pak For Integration', 'Kubernetes', 'Containers'],
      link: 'https://www.ibm.com',
      current: true
    },
    {
      company: 'Umwerk GmbH',
      position: 'Frontend Developer',
      location: '',
      period: '2018 - 2019',
      description: 'Frontend development using modern web technologies.',
      technologies: ['Angular', 'VueJS', 'Node.js', 'JavaScript', 'TypeScript', 'GIT'],
      link: 'https://www.umwerk.com/en/',
      current: false
    },
    {
      company: 'Actual I.T. d.d',
      position: 'Software Engineer - Full Stack Developer',
      location: '',
      period: '2017 - 2018',
      description: 'Full stack development with focus on enterprise applications.',
      technologies: ['C#', 'JavaScript', 'TypeScript', 'AngularJS', 'GIT'],
      link: 'http://www.actual.si/',
      current: false
    }
  ];

  // Education
  education = [
    {
      degree: "Master's degree",
      university: 'University of Maribor',
      faculty: 'FERI - Faculty of Electrical Engineering and Computer Science',
      field: 'Informatics and Technologies of Communication',
      location: 'Maribor, Slovenia',
      period: '2013 - 2017',
      thesis: 'https://dk.um.si/IzpisGradiva.php?id=66052&lang=slv'
    },
    {
      degree: "Bachelor's degree",
      university: 'University of Primorska',
      faculty: 'FAMNIT - Faculty of Mathematics, Natural Sciences and Information Technologies',
      field: 'Computer Science',
      location: 'Koper, Slovenia',
      period: '2010 - 2013',
      thesis: 'https://repozitorij.upr.si/IzpisGradiva.php?id=6407&lang=slv'
    },
    {
      degree: 'Erasmus+ Exchange',
      university: 'Università degli studi Salerno',
      faculty: 'Dipartimento di informatica',
      field: '',
      location: 'Salerno, Italia',
      period: '2016',
      thesis: ''
    }
  ];

  // Skills (derived from work experience and interests)
  skills = {
    cloud: ['RedHat OpenShift', 'Kubernetes', 'IBM Cloud Pak For Integration', 'Containers', 'Docker'],
    frontend: ['Angular', 'VueJS', 'AngularJS', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Bootstrap'],
    backend: ['Node.js', 'C#'],
    tools: ['GIT', 'CI/CD'],
    interests: ['Cloud Technologies', 'Autonomous Driving', 'Kubernetes', 'Containers']
  };

  // Achievements & Publications
  achievements = [
    {
      title: 'PRIMATIJADA 2013',
      award: '1st place - Best computer science project',
      description: 'RFID-based access control system using Raspberry Pi with web interface secured by 2FA (SMS).',
      year: '2013',
      link: 'https://www.famnit.upr.si/sl/novice/uspeh-famnitovih-stu-2'
    },
    {
      title: 'Open International Student Olympiad',
      award: '3rd place - Internet Olympiad in Informatics',
      description: '',
      year: '2013',
      link: 'https://www.famnit.upr.si/sl/novice/odlicni-rezultati-na-1'
    }
  ];

  // Publications
  publications = [
    {
      title: 'Process Evaluation and Improvement: A Case Study of The Loan Approval Process',
      authors: 'Maja Pušnik, Katja Kous, Andrej Godec and Boštjan Šumak',
      conference: 'SQAMIA 2019',
      year: '2019',
      link: 'https://perun.pmf.uns.ac.rs/sqamia/2019/program.php'
    }
  ];

  // Certifications
  certifications = {
    link: 'https://www.youracclaim.com/users/andrej-godec/badges',
    description: 'Kubernetes and container certifications'
  };

  constructor() { }

  ngOnInit() {
  }

  // Method to print CV (for future PDF functionality)
  printCV() {
    window.print();
  }
}
