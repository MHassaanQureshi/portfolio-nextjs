import Image from "next/image";

export default function About(){
        return (
            <div className="w-full h-[60vh] flex mt-16 items-center justify-center">
              <div className="w-[80%] h-[50vh] text-white p-5 flex flex-col justify-center items-center">
                <h1 className="text-4xl relative border-b-2 border-red-500  p-2 font-extrabold sm: mt-48">
                  About Me
                </h1>
                <div className="flex flex-row p-5 flex-wrap lg:flex-nowrap lg:mt-12 ">
                <div className="w-full lg:w-1/2  sm:h-[20%]">
                    <Image
                      src="/images/profile.jpg"
                      alt="Profile"
                      className="rotate-[-90deg] "
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="text-lg gap-5 flex flex-col w-1/2">
                  <div className="relative">
                      <p >
                        I’m a dedicated learner, passionate about acquiring new skills
                        and exploring modern technologies. I recently started my journey
                        into front-end development and am eager to create user-friendly
                        websites. My goal is to become a Full Stack Developer, and I’m
                        currently seeking opportunities to grow and improve my front-end
                        development skills.
                      </p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-10 ">
                      <ul className="flex flex-col gap-5 marker:text-red-600 list-disc">
                        <li>Email: hassaanharoon03@gmail.com</li>
                        <li>Location: Karachi, Pakistan</li>
                        <li>Age: 21</li>
                      </ul>
                      <ul className="flex flex-col gap-5 marker:text-red-600 list-disc">
                        <li>Nationality: Pakistan</li>
                        <li>Education: Federal Urdu University, Karachi</li>
                        <li>Degree: Bachelors in Computer Science</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        };
