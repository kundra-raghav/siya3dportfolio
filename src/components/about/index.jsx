
import React from 'react';
import ItemLayout from './ItemLayout';



const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout className=" col-span-full lg:col-span-8 row-span-2 flex-col item-start">
          <h2 className=" text-xl md:text-2xl text-left w-full capitalize">Architect of Enchantment</h2>
          <p className="font-light text-xs sm:text-sm md:text-base ">
            My journey in web development is powered by an array of mystical tools and languages, with JavaScript casting
            the core of my enchantments. I wield frameworks like React.js and Next.js with precision, crafting seamless
            portals (websites) that connect realms (users) across the digital universe. The ancient arts of the Jamstack
            empower me to create fast, secure, and dynamic experiences, while my design skills ensure every creation is
            not only functional but visually captivating. Join me as I continue to explore new spells and technologies to
            shape the future of the web.
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
          Software Engineer
            <sub className="font-semibold text-base">Hey there! I'm a passionate and innovative software engineer.‎ ‎ I CTRL+C, I CTRL+V, and sometimes I CTRL+Z, but never CTRL+Y.</sub>
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            5+
            <sub className="font-semibold text-base">Interships in various field like Full Stack Development, Data Analytics, App Development Intern , Python Developer, Sales&Marketing</sub>
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-full sm:col-span-6 md:col-span-4 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=siyadigra22&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon-color=FEFE5B&text-bold=false"
            alt="CodeBUCKS"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className="col-span-full md:col-span-8 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=siyadigra22&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon-color=FEFE5B&text-bold=false"
            alt="CodeBUCKS"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className="col-span-full">
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=bootstrap,css,figma,firebase,git,github,graphql,html,js,jquery,linux,flutter,dart,wordpress,python,mangodb,mysql,nextjs,nodejs,npm,react,replit,tailwind,threejs,vscode,yarn"
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full md:col-span-6 !p-0">
        <img className="w-full h-auto" src="https://github-readme-streak-stats.herokuapp.com?user=siyadigra22&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B" alt="CodeBucks"
            loading="lazy" />
        </ItemLayout>

        

        <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=codebucks27&repo=Nextjs-contentlayer-blog&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon-color=FEFE5B&text-bold=false&description_lines_count=2"
            alt="CodeBUCKS"
            loading="lazy"
          />
        </ItemLayout>


        
      </div>
    </section>
  );
};

export default AboutDetails;