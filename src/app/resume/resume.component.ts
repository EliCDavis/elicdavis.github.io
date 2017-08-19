import { Job } from '../models/job';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  skills: Array<{ title: string, content: string }>
  jobs: Array<Job>;
  competitions: Array<{ title: string, content: string }>;

  constructor() { }

  ngOnInit() {

    this.skills = [
      { title: 'Languages', content: 'C#, Java, Typescript, JavaScript, Python, Go, PHP, C/C++, Bash, and SQL' },
      { title: 'Web technologies', content: 'Angularjs/2+, React, Rxjs, Redux, Gulp, Socket.io, Google Maps, and Express' },
      { title: 'Source control', content: 'Svn and Git' },
      { title: 'Experience with', content: 'Unity3D, React Native, Buildroot, Django, Spring Framework, and ROS' },
      { title: 'Package Managers', content: 'Published and maintain code on NPM, Bower, and Pip' }
    ];

    this.jobs = [
      new Job('Software Engineer Intern', 'Kopis Mobile', 'Flowood MS', 'May 2017', 'August 2017', [
        'Built a React Native Android application which used protobuf to control other electronics over bluetooth.',
        'Wrote an Angular 4 application to configure and stream content across multiple embedded systems across a mesh.',
        'Created custom buildroot packages for building Kopis Mobile code into an embedded linux filesystem.'
      ]),
      new Job('Junior Software Engineer', 'Bomgar', 'Ridgland MS', 'May 2016', 'December 2016', [
        'Wrote fragment and vertex shaders in WebGL for pixel decoding of streamed screen sharing data.',
        'Used HTML5 technologies (Canvas, Sockets, Angular, Material, and Rx) to replace an existing ﬂash product.',
        'Created a chrome extension that interfaces with existing Bomgar web products for sharing user’s screen.',
        'Wrote Bash scripts to build, tar and deploy my project on the Bomgar build servers.'
      ]),
      new Job('Undergraduate Research Assistant', 'Center For Advanced Vehicular Systems', 'Starkville MS', 'February 2016', 'Present', [
        'Working with Dr. Daniel Carruth to build simulations to study people’s reactions to robots in their environment.',
        'Develop virtual reality technologies for Oculus Rift, Vive, and motion tracking cameras.',
        'Create Unity3D plugin for recording the scene with human test subjects for later playback and analysis of an experiment.',
        'Help create 3D models and scenes that the test subjects will participate.'
      ]),
      new Job('Computer Scientist Intern', 'Applied Research Associates', 'Vicksburg MS', 'May 2015', 'August 2015', [
        'Developed interactive graphs and maps with Chart JS and Google Maps.',
        'Wrote a multithreaded Java program used for running simulations on a Tomcat server.',
        'Wrote a translation program in PL/SQL that read geometry data from an Oracle database into a GeoJSON format.'
      ])
    ];

    this.competitions = [
      { title: 'MUTEH’s Mutehack 2017', content: 'Team won $1000 grand prize and presented solution in a conference talk.' },
      { title: 'MLH CrimsonHacks 2017', content: 'Team placed 3rd in overall hackathon and also won “most disruptive hack”.' },
      { title: 'ACM International Collegiate Programming Competition Division II (2016)', content: 'Team placed 4th out of 71' }
    ];

  }

}
