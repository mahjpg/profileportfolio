import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

/* PROJECT IMAGES */
import ecommerceImage from "../../assets/images/eco.png";
import travelImage from "../../assets/images/travel.png";
import jobImage from "../../assets/images/job.png";

function Project() {
  const projects = [
    {
      number: "01",

      title: "E-Commerce Platform",

      category: "Full-Stack Web Application",

      description:
        "A complete e-commerce platform where users can explore products, manage their cart, create accounts and place orders through a responsive React interface connected to a Django backend.",

      features: [
        "User Authentication",
        "Product Management",
        "Shopping Cart",
        "Order Management",
      ],

      technologies: [
        "React",
        "Django",
        "Python",
        "SQLite3",
        "Tailwind CSS",
      ],

      image: ecommerceImage,

      github: "#",
      live: "#",
    },

    {
      number: "02",

      title: "Travel & Tour Website",

      category: "Full-Stack Booking Platform",

      description:
        "A responsive travel and tour platform where users can explore destinations, browse tour packages and manage bookings through a modern React interface connected to a Django backend.",

      features: [
        "Tour Packages",
        "Destination Search",
        "User Bookings",
        "Booking Management",
      ],

      technologies: [
        "React",
        "Django",
        "Python",
        "SQLite3",
        "Tailwind CSS",
      ],

      image: travelImage,

      github: "#",
      live: "#",
    },

    {
      number: "03",

      title: "Job Portal Platform",

      category: "Full-Stack Web Application",

      description:
        "A role-based job portal connecting employers and applicants, allowing employers to manage job listings while users can search, apply and track their applications.",

      features: [
        "Role-Based Accounts",
        "Job Listings",
        "Job Applications",
        "User Dashboards",
      ],

      technologies: [
        "React",
        "Django",
        "Python",
        "SQLite3",
        "Tailwind CSS",
      ],

      image: jobImage,

      github: "#",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="
        relative
        bg-[#070707]
        text-white
        py-24
        md:py-32
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* =========================================
            SECTION HEADER
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            flex
            items-center
            justify-between

            pb-5

            border-b
            border-white/10
          "
        >
          <div className="flex items-center gap-3">

            <motion.span
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                transformOrigin: "left",
              }}
              className="
                w-10
                h-[1px]
                bg-violet-500
              "
            />

            <span
              className="
                text-xs
                uppercase
                tracking-[0.28em]
                text-violet-400
                font-medium
              "
            >
              My Projects
            </span>

          </div>

          <span
            className="
              hidden
              md:block

              text-xs
              uppercase
              tracking-[0.2em]

              text-white/30
            "
          >
            Full-Stack Development
          </span>
        </motion.div>

        {/* =========================================
            INTRODUCTION
        ========================================== */}

        <div
          className="
            grid
            lg:grid-cols-[1fr_0.65fr]

            gap-10
            lg:gap-20

            mt-14
            md:mt-16

            mb-20
            md:mb-24

            items-end
          "
        >
          <motion.h2
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              max-w-3xl

              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-[4.4rem]

              font-medium

              tracking-[-0.055em]

              leading-[1.05]
            "
          >
            Full-stack projects built for

            <span className="text-white/35">
              {" "}real-world functionality.
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.75,
              delay: 0.1,
            }}
            className="
              max-w-md

              text-base
              md:text-lg

              leading-8

              text-white/45
            "
          >
            Applications covering frontend interfaces, backend functionality
            and database integration using React, Django and Python.
          </motion.p>
        </div>

        {/* =========================================
            PROJECT LIST
        ========================================== */}

        <div className="border-t border-white/10">

          {projects.map((project, index) => (
            <ProjectItem
              key={project.number}
              project={project}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

/* =========================================================
   PROJECT ITEM
========================================================= */

function ProjectItem({ project, index }) {
  const reverse = index % 2 === 1;

  return (
    <article
      className="
        py-16
        md:py-24

        border-b
        border-white/10
      "
    >
      <div
        className="
          grid
          lg:grid-cols-[1.08fr_0.92fr]

          gap-12
          lg:gap-20

          items-center
        "
      >

        {/* =========================================
            PROJECT IMAGE
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: reverse ? 50 : -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={reverse ? "lg:order-2" : ""}
        >
          <div
            className="
              group
              relative

              overflow-hidden

              border
              border-white/10

              bg-[#111111]
            "
          >

            {/* =====================================
                BROWSER TOP BAR
            ====================================== */}

            <div
              className="
                h-11

                px-4

                flex
                items-center
                justify-between

                border-b
                border-white/10

                bg-[#0d0d0d]
              "
            >
              {/* browser circles */}

              <div className="flex items-center gap-2">

                <span
                  className="
                    w-2
                    h-2
                    rounded-full
                    bg-white/20
                  "
                />

                <span
                  className="
                    w-2
                    h-2
                    rounded-full
                    bg-white/20
                  "
                />

                <span
                  className="
                    w-2
                    h-2
                    rounded-full
                    bg-white/20
                  "
                />

              </div>

              <span
                className="
                  text-[9px]

                  uppercase

                  tracking-[0.22em]

                  text-white/25
                "
              >
                {project.title}
              </span>

            </div>

            {/* =====================================
                SCREENSHOT
            ====================================== */}

            <div
              className="
                relative

                aspect-[16/10]

                overflow-hidden
              "
            >

              <motion.img
                src={project.image}
                alt={`${project.title} project`}
                initial={{
                  scale: 1.04,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  scale: 1.035,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  w-full
                  h-full

                  object-cover
                  object-top
                "
              />

              {/* subtle hover overlay */}

              <div
                className="
                  absolute
                  inset-0

                  bg-black/0

                  group-hover:bg-black/10

                  transition-colors
                  duration-500

                  pointer-events-none
                "
              />

              {/* project number */}

              <span
                className="
                  absolute

                  bottom-5
                  right-5

                  px-3
                  py-1.5

                  bg-black/60
                  backdrop-blur-md

                  border
                  border-white/10

                  text-[10px]

                  tracking-[0.2em]

                  text-white/70
                "
              >
                {project.number}
              </span>

            </div>

            {/* HOVER VIOLET LINE */}

            <span
              className="
                absolute
                left-0
                bottom-0

                w-0
                h-[2px]

                bg-violet-500

                group-hover:w-full

                transition-all
                duration-500
              "
            />

          </div>
        </motion.div>

        {/* =========================================
            PROJECT INFORMATION
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: reverse ? -40 : 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            delay: 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={reverse ? "lg:order-1" : ""}
        >

          {/* NUMBER / CATEGORY */}

          <div
            className="
              flex
              items-center
              justify-between

              gap-5
            "
          >

            <span
              className="
                text-sm
                font-medium

                text-violet-400
              "
            >
              {project.number}
            </span>

            <span
              className="
                text-[10px]
                md:text-xs

                uppercase

                tracking-[0.18em]

                text-white/30
              "
            >
              {project.category}
            </span>

          </div>

          {/* TITLE */}

          <motion.h3
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.12,
            }}
            className="
              mt-6

              text-4xl
              md:text-5xl

              font-medium

              tracking-[-0.05em]

              leading-[1.08]
            "
          >
            {project.title}
          </motion.h3>

          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.18,
            }}
            className="
              mt-7

              max-w-xl

              text-base
              md:text-lg

              leading-8

              text-white/45
            "
          >
            {project.description}
          </motion.p>

          {/* =====================================
              FEATURES
          ====================================== */}

          <div
            className="
              mt-8
              pt-6

              border-t
              border-white/10
            "
          >

            <p
              className="
                mb-4

                text-[10px]

                uppercase

                tracking-[0.23em]

                text-white/25
              "
            >
              Key Features
            </p>

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2

                gap-x-6
                gap-y-3
              "
            >

              {project.features.map((feature, featureIndex) => (

                <motion.div
                  key={feature}

                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: featureIndex * 0.06,
                  }}
                  className="
                    flex
                    items-center

                    gap-2

                    text-sm

                    text-white/50
                  "
                >

                  <span
                    className="
                      w-1
                      h-1

                      rounded-full

                      bg-violet-500
                    "
                  />

                  {feature}

                </motion.div>

              ))}

            </div>
          </div>

          {/* =====================================
              TECHNOLOGY
          ====================================== */}

          <div
            className="
              mt-8
              pt-6

              border-t
              border-white/10
            "
          >

            <p
              className="
                mb-4

                text-[10px]

                uppercase

                tracking-[0.23em]

                text-white/25
              "
            >
              Technology
            </p>

            <div
              className="
                flex
                flex-wrap

                gap-x-6
                gap-y-3
              "
            >

              {project.technologies.map(
                (technology, techIndex) => (

                  <motion.span
                    key={technology}

                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: techIndex * 0.05,
                    }}
                    whileHover={{
                      y: -2,
                    }}
                    className="
                      text-sm

                      text-white/50

                      hover:text-violet-300

                      transition-colors
                      duration-300

                      cursor-default
                    "
                  >
                    {technology}
                  </motion.span>

                )
              )}

            </div>
          </div>

          {/* =====================================
              PROJECT LINKS
          ====================================== */}

          <div
            className="
              flex
              flex-wrap

              gap-7

              mt-9
            "
          >

            <ProjectLink
              href={project.github}
              icon={<FiGithub />}
            >
              Source Code
            </ProjectLink>

            <ProjectLink
              href={project.live}
              icon={<FiArrowUpRight />}
            >
              Live Project
            </ProjectLink>

          </div>

        </motion.div>

      </div>
    </article>
  );
}

/* =========================================================
   PROJECT LINK
========================================================= */

function ProjectLink({
  href,
  children,
  icon,
}) {
  return (
    <motion.a
      href={href}

      target="_blank"
      rel="noreferrer"

      whileHover={{
        y: -2,
      }}

      className="
        group
        relative

        inline-flex
        items-center

        gap-2

        pb-1

        text-sm
        font-medium

        text-white
      "
    >

      {children}

      <span
        className="
          transition-transform
          duration-300

          group-hover:translate-x-1
          group-hover:-translate-y-1
        "
      >
        {icon}
      </span>

      <span
        className="
          absolute

          left-0
          bottom-0

          w-0
          h-[1px]

          bg-violet-500

          group-hover:w-full

          transition-all
          duration-300
        "
      />

    </motion.a>
  );
}

export default Project;