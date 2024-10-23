import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Mobile from "./components/Mobile-proj/Mobile";
import Projects from "./components/projects/Projects";
import Skill from "./components/Skills/Skill";


export default function Home() {
  return (
    <div className="flex flex-col align-middle justify-center">
    <div className="flex text-white flex-col w-100 mt-32">
    
    <h1 className="flex align-middle justify-center lg:text-6xl font-bold sm:text-7xl">M.Hassaan Qureshi</h1>
    <p className="flex align-middle justify-center text-red-600 lg:text-3xl">I built things on the internet</p>
  
  </div>
  <div className="lg:mt-96 sm: mt-[44rem]" id="about">
    <About />
  </div>
  <div className="flex  flex-col w-vw justify-center align-middle lg:mt-52 sm: mt-[56rem]" id="skills">
  <div className="w-vw flex justify-center align-middle">
  <h1 className="text-4xl relative border-b-2 border-red-500   text-white p-2 w-24 flex align-middle justify-center font-extrabold">Skills</h1>
  </div>
  <div className="flex flex-col mt-24">
  <div className="w-vw  justify-center align-middle gap-5 lg:flex sm:flex-colp-4">
    <Skill img="/images/html.png" name="HTML" about="I have strong HTML5 skills, demonstrated through projects like a portfolio, eCommerce site, and resume generator. My work focuses on clean, semantic code and responsive design."/>
    <Skill img="/images/css-3.png" name="CSS" about="I have strong CSS skills, demonstrated through projects like my portfolio and an eCommerce site. I focus on responsive design using frameworks like Bootstrap and Tailwind."/>
    </div>
  <div className="w-vw  justify-center align-middle gap-5 lg:flex sm:flex-colp-4">
    <Skill img="/images/java-script.png" name="JavaScript" about="I have solid JavaScript skills, showcased in projects like an interactive portfolio and an e-commerce. I excel in creating dynamic user experiences and efficient functionality."/>
    <Skill img="/images/typescript.png" name="TypeScript" about="I have strong TypeScript skills, demonstrated through projects like a resume generator and a dynamic web application. I focus on building robust, type-safe code that enhances maintainability and scalability."/>
    </div>
  <div className="w-vw justify-center align-middle gap-5 lg:flex sm:flex-colp-4 ">
    <Skill img="/images/bootstrap.png" name="BootStrap" about="I have strong Bootstrap skills, demonstrated through various projects. I excel in creating responsive, mobile-first designs that enhance user experience. My focus is on utilizing Bootstrap's components to streamline development."/>
    <Skill img="/images/python.png" name="Python" about="I have solid Python skills, with experience in Tkinter and Pygame. I created an image viewer, focusing on building user-friendly applications and enhancing my problem-solving abilities."/>
    </div>
  <div className="w-vw  justify-center align-middle gap-5 lg:flex sm:flex-colp-4">
    <Skill img="/images/physics.png" name="React-JS" about="I am learning React, demonstrated through my portfolio website built with the framework. I focus on creating dynamic, interactive user interfaces and improving my component-based development skills."/>
    <Skill img="/images/nextjs-icon.png" name="Next-JS" about="I have strong CSS skills, demonstrated through projects like my portfolio and an eCommerce site. I focus on responsive design using frameworks like Bootstrap and Tailwind."/>
    </div>
  <div className="w-vw  justify-center align-middle gap-5 lg:flex sm:flex-colp-4">
    <Skill img="/images/Tailwind CSS.png" name="Tailwind CSS" about="I have strong Tailwind CSS skills, demonstrated through various projects. I excel in creating responsive designs quickly with utility-first classes, focusing on maintainability and customizability."/>
    <Skill img="/images/github-sign.png" name="GitHub" about="I have solid GitHub skills, demonstrated through effective version control and collaboration on various projects. I focus on maintaining clean commit histories and utilizing branches for efficient workflows."/>
    </div>
  </div>
  </div>

  <div>
  <div className="w-vw flex justify-center align-middle lg:mt-32 sm: mt-[4rem]" id="project">
  <h1 className="text-4xl relative border-b-2 border-red-500   text-white p-2 w-48 flex align-middle justify-center font-extrabold">Portfolio</h1>
  </div>
  <div className="flex flex-col lg:mt-24 ">
    <div className="w-vw  justify-center align-middle gap-5 lg:flex sm:flex-colp-4 " >
    <Projects img="/images/exclusiveshop.png" about=" This eCommerce website, built with HTML, CSS, and JavaScript, offers a user-friendly interface with essential pages like Home, Contact, Login, and Signup. It provides easy navigation for desktop users & is not available on mobile devices." name="Exclusive Shop" link="https://exclusive-shop-web.vercel.app/"/>
    <Projects img="/images/resume-generator.png" about="I developed a resume generator using HTML, CSS, and TypeScript that enables users to input their details and create a professional resume. The tool features dynamic form elements for skills, education, and experience, allowing easy customization and PDF export." name="Resume Generator" link="https://hackathon-milestone-500.vercel.app/"/>
    </div>
    <div className="w-vw  justify-center align-middle gap-5 lg:flex sm:flex-colp-4 " >
    <Mobile img="/images/fb.png" about=" I created a Facebook clone using React, which currently includes a home and profile page designed specifically for mobile devices. The home page features a feed of posts, while the profile page displays user information and posts. This project is a step towards replicating key features of the Facebook interface, optimized for mobile responsiveness" name="Facebook-Clone" link="https://clone-facebook-three.vercel.app/"/>
    <Projects img="/images/singer-portfolio.png" about="I created a singer portfolio website using HTML, CSS, and JavaScript to showcase my music. It features a vibrant design with sections for my bio, discography, and upcoming events, providing an engaging platform for fans." name="Singer portfolio" link="https://singer-portfolio-kappa.vercel.app/"/>
    </div>
    <div className="w-vw  justify-center align-middle gap-5 lg:flex sm:flex-colp-4" >
    <Projects img="/images/dice-game.png" about=" I developed a dice game using React that allows players to roll virtual dice and track scores. The game features a clean interface and responsive design, offering an engaging experience for users of all ages." name="Dice game" link="https://dice-game-react-two.vercel.app/"/>
    <Projects img="/images/weather.png" about="I built a weather application using TypeScript that delivers real-time updates based on user input. It features an intuitive interface and utilizes APIs for accurate weather data." name="Weather app" link="https://weather-app-neon-chi-32.vercel.app/"/>
    </div>
    <div className="w-vw  justify-center align-middle gap-5 lg:flex sm:flex-colp-4" >
    <Projects img="/images/amazon.png" about=" I created an Amazon clone featuring a landing page and login functionality using HTML, CSS. The project showcases a clean design and user-friendly interface, simulating the initial steps of an eCommerce experience." name="Amazon Clone" link="https://amazon-clone-j3fv.vercel.app/"/>
    <Mobile img="/images/foody.png" about="I created a basic single-page recipe website in React to practice components and props. It displays a recipe with ingredients, instructions, and a dish image, using reusable components to enhance my React skills." name="Foody zone" link="https://foody-zone-pi.vercel.app/"/>
    </div>
  </div>
    
  </div>

  <div className="flex pb-10" id="contact">
    <Contact />
  </div>
    </div>
    
  );
}
