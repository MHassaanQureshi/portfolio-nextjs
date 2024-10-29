import { motion } from "framer-motion";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Skill from "./components/Skills/Skill";
import Projects from "./components/projects/Projects";
import Mobile from "./components/Mobile-proj/Mobile";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className="flex text-white flex-col w-full items-center mt-32"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="lg:text-6xl sm:text-5xl font-bold text-center">M. Hassaan Qureshi</h1>
        <p className="text-red-600 lg:text-3xl text-center mt-4">I build things on the internet</p>
      </motion.div>

      <motion.div
        className="w-[90%] lg:mt-32 sm:mt-24  rounded-lg shadow-lg" // Added padding, background, rounded corners, and shadow
        id="about"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <About />
      </motion.div>

      <motion.div
        className="w-[90%] flex flex-col items-center lg:mt-32 sm:mt-24 p-6 rounded-lg shadow-lg" // Same styles as above
        id="skills"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl border-b-2 border-red-500 text-white p-2 font-extrabold text-center">Skills</h1>
        <div className="flex flex-col mt-24 gap-10 w-full items-center">
          {/* Skills content remains the same */}
          <div className="flex flex-wrap justify-center gap-10">
            <Skill img="/images/html.png" name="HTML" about="I have strong HTML5 skills, demonstrated through projects like a portfolio, eCommerce site, and resume generator. My work focuses on clean, semantic code and responsive design." />
            <Skill img="/images/css-3.png" name="CSS" about="I have strong CSS skills, demonstrated through projects like my portfolio and an eCommerce site. I focus on responsive design using frameworks like Bootstrap and Tailwind." />
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            <Skill img="/images/java-script.png" name="JavaScript" about="I have solid JavaScript skills, showcased in projects like an interactive portfolio and an e-commerce. I excel in creating dynamic user experiences and efficient functionality." />
            <Skill img="/images/typescript.png" name="TypeScript" about="I have strong TypeScript skills, demonstrated through projects like a resume generator and a dynamic web application. I focus on building robust, type-safe code that enhances maintainability and scalability." />
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            <Skill img="/images/Bootstrap.png" name="Bootstrap" about="I have strong Bootstrap skills, demonstrated through various projects. I excel in creating responsive, mobile-first designs that enhance user experience. My focus is on utilizing Bootstrap's components to streamline development." />
            <Skill img="/images/python.png" name="Python" about="I have solid Python skills, with experience in Tkinter and Pygame. I created an image viewer, focusing on building user-friendly applications and enhancing my problem-solving abilities." />
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            <Skill img="/images/physics.png" name="React-JS" about="I am learning React, demonstrated through my portfolio website built with the framework. I focus on creating dynamic, interactive user interfaces and improving my component-based development skills." />
            <Skill img="/images/nextjs-icon.png" name="Next-JS" about="I have strong CSS skills, demonstrated through projects like my portfolio and an eCommerce site. I focus on responsive design using frameworks like Bootstrap and Tailwind." />
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            <Skill img="/images/Tailwind CSS.png" name="Tailwind CSS" about="I have strong Tailwind CSS skills, demonstrated through various projects. I excel in creating responsive designs quickly with utility-first classes, focusing on maintainability and customizability." />
            <Skill img="/images/github-sign.png" name="GitHub" about="I have solid GitHub skills, demonstrated through effective version control and collaboration on various projects. I focus on maintaining clean commit histories and utilizing branches for efficient workflows." />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-[90%] flex flex-col items-center lg:mt-32 sm:mt-24 p-6 rounded-lg shadow-lg" // Same styles as above
        id="project"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl border-b-2 border-red-500 text-white p-2 font-extrabold text-center">Portfolio</h1>
        <div className="flex flex-col mt-24 gap-10 w-full items-center">
          {/* Portfolio content remains the same */}
          <div className="flex flex-wrap justify-center gap-10">
            <Projects img="/images/exclusiveshop.png" about="This eCommerce website, built with HTML, CSS, and JavaScript, offers a user-friendly interface with essential pages like Home, Contact, Login, and Signup. It provides easy navigation for desktop users & is not available on mobile devices." name="Exclusive Shop" link="https://exclusive-shop-web.vercel.app/" />
            <Projects img="/images/resume-generator.png" about="I developed a resume generator using HTML, CSS, and TypeScript that enables users to input their details and create a professional resume. The tool features dynamic form elements for skills, education, and experience, allowing easy customization and PDF export." name="Resume Generator" link="https://hackathon-milestone-500.vercel.app/" />
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            <Mobile img="/images/fb.png" about="I created a Facebook clone using React, which currently includes a home and profile page designed specifically for mobile devices. The home page features a feed of posts, while the profile page displays user information and posts." name="Facebook-Clone" link="https://clone-facebook-three.vercel.app/" />
            <Projects img="/images/singer-portfolio.png" about="I created a singer portfolio website using HTML, CSS, and JavaScript to showcase my music. It features a vibrant design with sections for my bio, discography, and upcoming events, providing an engaging platform for fans." name="Singer Portfolio" link="https://singer-portfolio-kappa.vercel.app/" />
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            <Projects img="/images/dice-game.png" about="I developed a dice game using React that allows players to roll virtual dice and track scores. The game features a clean interface and responsive design, offering an engaging experience for users of all ages." name="Dice Game" link="https://dice-game-react-two.vercel.app/" />
            <Projects img="/images/weather.png" about="I built a weather application using TypeScript that delivers real-time updates based on user input. It features an intuitive interface and utilizes APIs for accurate weather data." name="Weather App" link="https://weather-app-neon-chi-32.vercel.app/" />
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            <Projects img="/images/amazon.png" about="I created an Amazon clone featuring a landing page and login functionality using HTML, CSS. The project showcases a clean design and user-friendly interface, simulating the initial steps of an eCommerce experience." name="Amazon Clone" link="https://amazon-clone-j3fv.vercel.app/" />
            <Mobile img="/images/foody.png" about="I created a basic single-page recipe website in React to practice components and props. It displays a recipe with ingredients, instructions, and a dish image, using reusable components to enhance my React skills." name="Foody Zone" link="https://foody-zone-pi.vercel.app/" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-[90%] flex flex-col items-center lg:mt-32 sm:mt-24 p-6  rounded-lg shadow-lg" // Same styles as above
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>
    </div>
  );
};

export default Home;
