import { BiCodeBlock,BiCodeCurly } from 'react-icons/bi'
import { FaAndroid, FaDev, FaGithub, FaGitSquare, FaJava, FaNpm, FaPython, FaUserGraduate } from 'react-icons/fa'
import { HiUser } from 'react-icons/hi'
import {FaReact,FaNodeJs,FaHtml5,FaCss3Alt,FaBootstrap,FaPhp,FaLaravel} from 'react-icons/fa';
import {DiMongodb,DiFirebase, DiDjango} from 'react-icons/di';
import {AiFillCopyrightCircle} from 'react-icons/ai';
import {FiFigma} from 'react-icons/fi';
import {SiExpress,SiJavascript,SiMaterialui,SiMysql, SiRedux,SiNativescript,SiTailwindcss, SiDatabricks, SiVisualstudio, SiAdobephotoshop, SiFirebase} from 'react-icons/si';
import img1 from "./assets/p1.png"
import img2 from "./assets/p2.png"
import img3 from './assets/profile.png'
import img4 from './assets/profile1.jpg'
import img5 from './assets/p3.png'
import service1 from './assets/s11.png'
import service2 from './assets/s2.jpg'
import service3 from './assets/s3.jpg'
import service4 from './assets/s4.jpg'
import service5 from './assets/s5.jpg'
import service6 from './assets/s6.jpg'
export const compareData = [
    {
        icon: <BiCodeBlock/>,
        title: "Completed Project",
        start:"1",
        end: "25"
    },
    {
        icon: <FaUserGraduate/>,
        title: "Experience",
        start:"1",
        end: "2"
    },
    {
        icon: <HiUser/>,
        title: "Client Review",
        start:"1",
        end: "25"
    },
    {
        icon: <BiCodeCurly/>,
        title: "Competitive Programming",
        start:"1",
        end: "25"
    },
];

export const projectData = [

    {
        img: `${img1}`,
        title: "Hophycare",
        code: [ "react","node","express","mongoDB"],
        live: "https://hophycare.com",
        source:"/",
        details:"/"
    },

    {
        img: `${img2}`,
        
        title: "Bank System",
        code: [ "react","node","express","mongoDB"],
        live: "/",
        source:"/",
        details:"/"
    },

    {
        img: `${img5}`,
        title: "Grocery Store Website",
        code: [ "react","node","express","mongoDB"],
        live: "/",
        source:"https://grocerywebsite.netlify.app",
        details:"/"
    }
];

export const serviceData = [
    {
        img: `${service1}`,
        title: "Front-End Design",
        h2: ["Html5","Css3","React","Responsive","Bootstrap5"],
        desc:"Design Fully Responsive and User-friendly Unique Perfect Pixel Web Application Using HTML5, CSS3, BOOTSTRAP5,REACT JS"


    },
    {
        img: `${service2}`,
        title: "Back-End Design",
        h2: ["Node Js","Express Js","MongoDB","FireBase","MySQL"],
        desc:"Build Web Application Server with Effecient Way and Connect With Font-End Using NODE Js,Express Js, MongoDB , FireBase"


    },
    {
        img: `${service3}`,
        title: "MERN Web Application",
        h2: ["React Js","Node Js","Express Js","MongoDB","MySQL"],
        desc:"Build Complete MERN Web Application With Database Intrgation Using React Js,Node Js, Express Js,MongoDB or MySQL"


    },
    {
        img: `${service4}`,
        title: "Convert XD, PSD, Html",
        h2: ["XD -> React","PSD -> React","Html -> React","PSD -> Html","Figma -> React"],
        desc:"Convert XD,PSD,HTML to ReactJS.Make 100% accurate and pixel perfect design with fully responsive design."


    },
    {
        img: `${service5}`,
        title: "Database Design",
        h2: ["MySQL","MongoDB","Model","Relationship"],
        desc:"Design Your Database with MySql or MongoDB.Also design the model between tables & make relationship...."


    },
    {
        img: `${service6}`,
        title: "Web Solution & Customization",
        h2: ["React","Bootstrap","Responsive"],
        desc:"Find and Solve any type of error and bug fix.Customaize and add new components and fix components in react or html"


    },
];

export const reviewData = [
    {
        img:`${img3}`,
        title:'Sarah',
        desc:"I’m writing to ask if you wouldn’t mind giving us a short testimonial for our website. We’re updating a few pages, and I’m hoping to add something from you. It would link back to your site, so it’s actually a good thing for your Development."
    },
    {
        img:`${img4}`,
        title:'Taylor',
        desc:"I’m writing to ask if you wouldn’t mind giving us a short testimonial for our website. We’re updating a few pages, and I’m hoping to add something from you. It would link back to your site, so it’s actually a good thing for your SEO."
    },
    {
        img:`${img3}`,
        title:'Solayman',
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Corrupti autem officia tempore quis quibusdam! Quidem porro necessitatibus, neque ipsum nisi molestias. Necessitati buseius corporis, sed cupiditate quas itaque commodi facilis."
    }

];

export const skillsData = [
    {
       
        title:'Experts',
        icon:[<SiJavascript color='#F0DB4F'/>,<FaReact color="#61DBFB"/>,<FaNodeJs color="#3C873A"/>,<DiMongodb color='#4DB33D'/>,<SiExpress color='#333333'/>,<FaHtml5 color='#E34C26'/>,<FaCss3Alt color='#167DBE'/>,<SiMaterialui color='#29B6F6'/>,<FaBootstrap/>],
    },
    {
       
        title:'Intermediate',
        icon:[<FaPhp color="#474A8A"/>,<SiMysql color='#EA8C10'/>,<FaLaravel color='#F34E39'/>,<SiRedux color='#7248B6'/>,<SiNativescript/>,<DiFirebase/>,<SiTailwindcss/>],
    },
   
    {
       
        title:'Programming',
        icon:[<FaPython/>,<AiFillCopyrightCircle color='#5968BA'/>,<DiMongodb/>,<SiExpress/>,<FaHtml5/>,<FaCss3Alt/>,<SiMaterialui/>,<FaBootstrap/>],
    },
    {
       
        title:'Basic',
        icon:[<SiDatabricks />,<FaJava />,<DiDjango/>,<FaAndroid/>,<FaHtml5/>,<FaCss3Alt/>,<SiMaterialui/>,<FaBootstrap/>],
    },
   

];
export const toolsData = [
    {
        icon:[<FaGitSquare color='#EB4D28'/>,<FaGithub/>,<SiVisualstudio color="#219FEA"/>,<FaNpm color='#C53635'/>,<FaDev color='#333333'/>,<SiAdobephotoshop color='#00232F'/>,<FiFigma color='#167DBE'/>,<SiFirebase color='#F7BE00'/>],
    }
   

];
export const SliderData = [
    {
      frame: "https://picsum.photos/800/300/?random",
      title: "Relief Fund In Place At Alister Bank: How You Can Help",
    },
    {
      frame: "https://picsum.photos/800/303/?random",
      title:
        "How to create web development Gig on Fiverr | Fiverr gig | fiverr",
    },
    {
      frame: "https://picsum.photos/800/302/?random",
      title:
        "Nasa Space Apps Challenge Bangladesh | Project Idea | Team Eternity | Air Pollution Application",
    },
    {
      frame: "https://picsum.photos/800/305/?random",
      title: "Prims's algorithm bangla tutorial",
    },
    {
      frame: "https://picsum.photos/800/300/?random",
      title: "Relief Fund In Place At Alister Bank: How You Can Help",
    },
    {
      frame: "https://picsum.photos/800/303/?random",
      title:
        "How to create web development Gig on Fiverr | Fiverr gig | fiverr",
    },
    {
      frame: "https://picsum.photos/800/302/?random",
      title:
        "Nasa Space Apps Challenge Bangladesh | Project Idea | Team Eternity | Air Pollution Application",
    },
    {
      frame: "https://picsum.photos/800/305/?random",
      title: "Prims's algorithm bangla tutorial",
    },
  ];