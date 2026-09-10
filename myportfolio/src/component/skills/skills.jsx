import React from "react";
import { motion, useReducedMotion } from "framer-motion";

import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiSqlite,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";

/* =========================================================
   SKILLS DATA
========================================================= */

const skillGroups = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, structured and interactive user interfaces.",

    skills: [
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        name: "HTML",
        icon: SiHtml5,
      },
      {
        name: "CSS",
        icon: SiCss,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
    ],
  },

  {
    title: "Backend Development",
    description:
      "Creating application logic and connecting interfaces with server-side functionality.",

    skills: [
      {
        name: "Python",
        icon: SiPython,
      },
      {
        name: "Django",
        icon: SiDjango,
      },
    ],
  },

  {
    title: "Database",
    description:
      "Structuring and managing application data for full-stack projects.",

    skills: [
      {
        name: "SQLite3",
        icon: SiSqlite,
      },
    ],
  },

  {
    title: "Tools & Deployment",
    description:
      "Managing source code, development workflow and project deployment.",

    skills: [
      {
        name: "Git",
        icon: SiGit,
      },
      {
        name: "GitHub",
        icon: SiGithub,
      },
      {
        name: "Vercel",
        icon: SiVercel,
      },
    ],
  },
];

/* =========================================================
   SKILLS
========================================================= */

function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="
        relative
        bg-[#f5f5f2]
        text-[#111111]

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
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 12,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            flex
            items-center
            justify-between

            pb-5

            border-b
            border-black/15
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

                bg-violet-600
              "
            />

            <span
              className="
                text-xs

                uppercase

                tracking-[0.28em]

                font-medium

                text-violet-600
              "
            >
              Skills
            </span>
          </div>

          <span
            className="
              hidden
              md:block

              text-xs

              uppercase

              tracking-[0.2em]

              text-black/35
            "
          >
            Technical Toolkit
          </span>
        </motion.div>

        {/* =================================================
            INTRO
        ================================================== */}

        <div
          className="
            grid

            lg:grid-cols-[1.15fr_0.85fr]

            gap-10
            lg:gap-24

            mt-14
            md:mt-16

            mb-20
            md:mb-24

            items-end
          "
        >
          {/* HEADING */}

          <motion.h2
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 35,
                    filter: "blur(7px)",
                  }
            }
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
            className="
              max-w-3xl

              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-[4.25rem]

              font-medium

              tracking-[-0.06em]

              leading-[1.05]
            "
          >
            The technologies behind

            <span className="text-violet-600">
              {" "}my work.
            </span>
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
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
              max-w-md

              text-base
              md:text-lg

              leading-8

              text-black/50
            "
          >
            A focused toolkit I use across interface development, backend
            functionality, data management and deployment.
          </motion.p>
        </div>

        {/* =================================================
            SKILL GROUPS
        ================================================== */}

        <div
          className="
            border-t
            border-black/15
          "
        >
          {skillGroups.map((group, groupIndex) => (
            <SkillGroup
              key={group.title}
              group={group}
              index={groupIndex}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* =================================================
            BOTTOM NOTE
        ================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 15,
                }
          }
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
            flex-col
            sm:flex-row

            sm:items-center
            sm:justify-between

            gap-4

            mt-10
          "
        >
          <span
            className="
              text-xs

              uppercase

              tracking-[0.2em]

              text-black/30
            "
          >
            Used across my full-stack projects
          </span>

          <motion.a
            href="#projects"
            whileHover={{
              x: 4,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              text-sm

              font-medium

              text-black/60

              hover:text-violet-600

              transition-colors
              duration-300
            "
          >
            View Projects ↗
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

/* =========================================================
   SKILL GROUP
========================================================= */

function SkillGroup({
  group,
  index,
  reduceMotion,
}) {
  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 55,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.04,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        group

        grid

        lg:grid-cols-[0.62fr_1.38fr]

        gap-9
        lg:gap-20

        py-11
        md:py-14

        border-b
        border-black/15

        transition-colors
        duration-500

        hover:bg-violet-[0.025]
      "
    >
      {/* =================================================
          CATEGORY
      ================================================== */}

      <div
        className="
          lg:pr-8
        "
      >
        <motion.h3
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  x: -25,
                }
          }
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.65,
            delay: 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            text-2xl
            sm:text-3xl

            font-medium

            tracking-[-0.045em]

            group-hover:text-violet-600

            transition-colors
            duration-300
          "
        >
          {group.title}
        </motion.h3>

        <motion.p
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 10,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.14,
          }}
          className="
            mt-4

            max-w-sm

            text-sm
            md:text-base

            leading-7

            text-black/45
          "
        >
          {group.description}
        </motion.p>
      </div>

      {/* =================================================
          TECHNOLOGIES
      ================================================== */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.075,
              delayChildren: 0.12,
            },
          },
        }}
        className="
          flex
          flex-wrap

          items-start

          gap-x-8
          gap-y-6

          lg:pt-1
        "
      >
        {group.skills.map((skill) => (
          <SkillItem
            key={skill.name}
            skill={skill}
            reduceMotion={reduceMotion}
          />
        ))}
      </motion.div>

    </motion.div>
  );
}

/* =========================================================
   SKILL ITEM
========================================================= */

function SkillItem({
  skill,
  reduceMotion,
}) {
  const Icon = skill.icon;

  return (
    <motion.div
      variants={
        reduceMotion
          ? {}
          : {
              hidden: {
                opacity: 0,
                y: 22,
                filter: "blur(5px)",
              },

              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",

                transition: {
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }
      }
      whileHover={
        reduceMotion
          ? {}
          : {
              y: -3,
            }
      }
      className="
        group/skill

        flex
        items-center

        gap-3

        py-2

        cursor-default
      "
    >
      {/* ICON */}

      <motion.span
        whileHover={
          reduceMotion
            ? {}
            : {
                rotate: -6,
                scale: 1.08,
              }
        }
        transition={{
          duration: 0.22,
        }}
        className="
          flex
          items-center
          justify-center

          text-xl
          sm:text-2xl

          text-black/35

          group-hover/skill:text-violet-600

          transition-colors
          duration-300
        "
      >
        <Icon />
      </motion.span>

      {/* NAME */}

      <span
        className="
          text-base
          sm:text-lg

          font-medium

          tracking-[-0.02em]

          text-black/65

          group-hover/skill:text-black

          transition-colors
          duration-300
        "
      >
        {skill.name}
      </span>
    </motion.div>
  );
}

export default Skills;