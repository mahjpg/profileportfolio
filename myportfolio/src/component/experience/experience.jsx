import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

/* =========================================================
   EXPERIENCE DATA
========================================================= */

const experiences = [
  {
    type: "Project-Based Development",
    title: "Full-Stack Development",
    status: "Current",

    description:
      "Building complete web applications from the user interface to backend functionality and database integration.",

    details: [
      "Connecting React interfaces with Django backend logic",
      "Working with authentication, application data and user interactions",
      "Building responsive interfaces across different screen sizes",
      "Structuring projects from frontend components to backend functionality",
    ],

    work: [
      "E-Commerce Platform",
      "Travel & Tour Website",
      "Job Portal Platform",
    ],

    technologies: [
      "React",
      "Django",
      "Python",
      "SQLite3",
      "Tailwind CSS",
    ],
  },

  {
    type: "Interface Development",
    title: "Frontend Development",
    status: "Ongoing",

    description:
      "Creating responsive interfaces that keep layouts structured, interactions clear and the overall experience easy to use.",

    details: [
      "Reusable React components",
      "Responsive page layouts",
      "Interactive interface elements",
      "Consistent styling with Tailwind CSS",
    ],

    work: [
      "Responsive Interfaces",
      "Application Dashboards",
      "Interactive Pages",
    ],

    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },

  {
    type: "Application Development",
    title: "Backend Development",
    status: "Ongoing",

    description:
      "Working with Django and Python to build the functionality that supports full-stack web applications.",

    details: [
      "Application logic with Django",
      "Database-driven functionality",
      "Frontend and backend integration",
      "Handling application data and user actions",
    ],

    work: [
      "Product Management",
      "Booking Systems",
      "Job Applications",
    ],

    technologies: [
      "Python",
      "Django",
      "SQLite3",
    ],
  },
];

/* =========================================================
   EXPERIENCE SECTION
========================================================= */

function Experience() {
  return (
    <section
      id="experience"
      className="
        relative
        bg-[#09090b]
        text-white

        py-24
        md:py-32

        overflow-hidden
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto

          px-6
          lg:px-8
        "
      >
        {/* =================================================
            SECTION HEADER
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.65,
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
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                w-8
                h-[1px]

                bg-violet-500
              "
            />

            <span
              className="
                text-xs

                uppercase

                tracking-[0.28em]

                font-medium

                text-violet-400
              "
            >
              Experience
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
            Development Journey
          </span>
        </motion.div>

        {/* =================================================
            INTRO AREA
        ================================================== */}

        <div
          className="
            grid

            lg:grid-cols-[0.8fr_1.2fr]

            gap-14
            lg:gap-28

            mt-16
            md:mt-20

            mb-16
            md:mb-20
          "
        >
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              filter: "blur(7px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p
              className="
                text-xs

                uppercase

                tracking-[0.22em]

                text-white/35

                mb-6
              "
            >
              Hands-on experience
            </p>

            <h2
              className="
                max-w-xl

                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-[4.3rem]

                font-medium

                tracking-[-0.06em]

                leading-[1.05]
              "
            >
              Learning through

              <span className="text-violet-400">
                {" "}building complete applications.
              </span>
            </h2>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
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
              delay: 0.12,
            }}
            className="
              lg:flex
              lg:items-end
            "
          >
            <p
              className="
                max-w-xl

                text-base
                md:text-lg

                leading-8

                text-white/45
              "
            >
              My development experience comes from building practical
              projects where I work across interfaces, backend functionality
              and application data rather than focusing on only one part of
              the development process.
            </p>
          </motion.div>
        </div>

        {/* =================================================
            EXPERIENCE LIST
        ================================================== */}

        <div
          className="
            border-t
            border-white/10
          "
        >
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={experience.title}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        {/* =================================================
            PROJECT LINK
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
            justify-end

            mt-10
          "
        >
          <motion.a
            href="#projects"
            whileHover={{
              x: 4,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              group

              inline-flex
              items-center

              gap-2

              text-sm

              font-medium

              text-white/50

              hover:text-violet-400

              transition-colors
              duration-300
            "
          >
            Explore my projects

            <FiArrowUpRight
              className="
                group-hover:translate-x-1
                group-hover:-translate-y-1

                transition-transform
                duration-300
              "
            />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

/* =========================================================
   EXPERIENCE ITEM
========================================================= */

function ExperienceItem({
  experience,
  index,
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 70,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.22,
      }}
      transition={{
        duration: 0.9,
        delay: index * 0.04,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        group
        relative

        grid

        lg:grid-cols-[0.55fr_1.45fr]

        gap-8
        lg:gap-20

        py-12
        md:py-16

        border-b
        border-white/10
      "
    >
      {/* =================================================
          SUBTLE ROW HOVER
      ================================================== */}

      <div
        className="
          absolute
          inset-0

          -mx-4
          lg:-mx-6

          bg-white/[0.025]

          opacity-0

          group-hover:opacity-100

          transition-opacity
          duration-500

          pointer-events-none
        "
      />

      {/* =================================================
          LEFT SIDE
      ================================================== */}

      <div
        className="
          relative
          z-10
        "
      >
        <motion.p
          initial={{
            opacity: 0,
            x: -18,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.12,
          }}
          className="
            text-xs

            uppercase

            tracking-[0.2em]

            text-violet-400
          "
        >
          {experience.type}
        </motion.p>

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.18,
          }}
          className="
            mt-4

            text-sm

            text-white/30
          "
        >
          {experience.status}
        </motion.p>
      </div>

      {/* =================================================
          RIGHT SIDE
      ================================================== */}

      <div
        className="
          relative
          z-10
        "
      >
        {/* TITLE */}

        <motion.h3
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.65,
            delay: 0.1,
          }}
          className="
            text-3xl
            sm:text-4xl
            md:text-[2.7rem]

            font-medium

            tracking-[-0.05em]

            leading-tight

            group-hover:text-violet-300

            transition-colors
            duration-300
          "
        >
          {experience.title}
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
            duration: 0.65,
            delay: 0.16,
          }}
          className="
            mt-5

            max-w-2xl

            text-base
            md:text-lg

            leading-8

            text-white/45
          "
        >
          {experience.description}
        </motion.p>

        {/* =================================================
            WHAT I WORKED ON
        ================================================== */}

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
            duration: 0.65,
            delay: 0.22,
          }}
          className="
            mt-8
          "
        >
          <p
            className="
              text-[10px]

              uppercase

              tracking-[0.22em]

              text-white/30

              mb-4
            "
          >
            What I work on
          </p>

          <div
            className="
              grid
              sm:grid-cols-2

              gap-x-8
              gap-y-3
            "
          >
            {experience.details.map((detail) => (
              <div
                key={detail}
                className="
                  flex
                  items-start

                  gap-3

                  text-sm
                  md:text-base

                  leading-6

                  text-white/55
                "
              >
                <span
                  className="
                    w-1
                    h-1

                    mt-[10px]

                    flex-shrink-0

                    bg-violet-400
                  "
                />

                <span>
                  {detail}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* =================================================
            SELECTED WORK
        ================================================== */}

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
            duration: 0.65,
            delay: 0.28,
          }}
          className="
            mt-9

            pt-6

            border-t
            border-white/[0.08]
          "
        >
          <p
            className="
              text-[10px]

              uppercase

              tracking-[0.22em]

              text-white/30

              mb-4
            "
          >
            Selected work
          </p>

          <div
            className="
              flex
              flex-wrap

              gap-x-5
              gap-y-2
            "
          >
            {experience.work.map((item) => (
              <span
                key={item}
                className="
                  text-sm

                  text-white/55
                "
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* =================================================
            TECHNOLOGIES
        ================================================== */}

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
            duration: 0.65,
            delay: 0.34,
          }}
          className="
            flex
            flex-wrap

            gap-2

            mt-7
          "
        >
          {experience.technologies.map((technology) => (
            <span
              key={technology}
              className="
                px-3
                py-1.5

                rounded-full

                border
                border-white/10

                text-xs

                text-white/45

                group-hover:border-violet-400/20
                group-hover:text-white/60

                transition-colors
                duration-300
              "
            >
              {technology}
            </span>
          ))}
        </motion.div>

      </div>
    </motion.article>
  );
}

export default Experience;