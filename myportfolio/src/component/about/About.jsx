import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

function About() {
  return (
    <section
      id="about"
      className="
        relative
        bg-[#f5f5f2]
        text-[#111111]
        py-24
        md:py-32
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ================= HEADER ================= */}

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
            border-black/15
          "
        >
          <div className="flex items-center gap-3">

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
              About Me
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
            Full-Stack Developer
          </span>
        </motion.div>

        {/* ================= MAIN ================= */}

        <div
          className="
            grid
            lg:grid-cols-[0.95fr_1.05fr]

            gap-14
            lg:gap-28

            mt-16
            md:mt-20
          "
        >
          {/* ================= LEFT ================= */}

          <div>

            {/* HI I'M */}

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
              }}
              className="
                text-sm
                md:text-base

                uppercase
                tracking-[0.24em]

                text-black/40
              "
            >
              Hi, I'm
            </motion.p>

            {/* MAHJABEEN */}

            <div className="overflow-hidden pb-5 mt-2">

              <motion.h2
                initial={{
                  y: "110%",
                }}
                whileInView={{
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  text-6xl
                  sm:text-7xl
                  md:text-8xl
                  lg:text-[6.4rem]

                  font-bold

                  tracking-[-0.075em]

                  leading-[1]

                  text-[#111111]
                "
              >
                Mahjabeen
              </motion.h2>

            </div>

            {/* ROLE */}

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
                delay: 0.1,
              }}
              className="
                mt-1

                text-2xl
                sm:text-3xl

                font-medium

                tracking-[-0.04em]

                text-violet-600
              "
            >
              Full-Stack Developer
            </motion.p>

            {/* PERSONAL LINE */}

            <motion.p
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
                delay: 0.18,
              }}
              className="
                mt-8

                max-w-lg

                text-xl
                sm:text-2xl
                md:text-[1.7rem]

                leading-[1.45]

                tracking-[-0.035em]

                text-black/75
              "
            >
              I enjoy turning ideas into

              <span className="text-violet-600">
                {" "}
                web experiences that feel simple, useful and complete.
              </span>
            </motion.p>

          </div>

          {/* ================= RIGHT ================= */}

          <div className="lg:pt-5">

            {/* DESCRIPTION */}

            <motion.div
              initial={{
                opacity: 0,
                y: 35,
                filter: "blur(6px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                max-w-xl

                space-y-6

                text-base
                md:text-lg

                leading-8

                text-black/55
              "
            >
              <p>
                I'm Mahjabeen, a full-stack developer who enjoys building
                websites and applications from an idea into something people
                can actually use.
              </p>

              <p>
                What interests me most about development is being involved in
                the complete process — thinking about how an interface should
                look, how users will interact with it, and how everything works
                behind the scenes.
              </p>

              <p>
                I like keeping my work clean, organized and easy to understand.
                With every project I build, I try to improve both the way I
                design interfaces and the way I structure the code behind them.
              </p>

            </motion.div>

            {/* ================= CURRENTLY ================= */}

            <motion.div
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
                delay: 0.2,
              }}
              className="
                mt-12

                pt-7

                border-t
                border-black/15
              "
            >
              <div
                className="
                  grid

                  sm:grid-cols-[130px_1fr]

                  gap-4
                  sm:gap-8
                "
              >
                <span
                  className="
                    text-xs
                    uppercase
                    tracking-[0.22em]

                    font-medium

                    text-violet-600
                  "
                >
                  Currently
                </span>

                <p
                  className="
                    max-w-md

                    text-sm
                    md:text-base

                    leading-7

                    text-black/55
                  "
                >
                  Building practical full-stack projects and strengthening my
                  development skills through hands-on work.
                </p>
              </div>
            </motion.div>

            {/* ================= APPROACH ================= */}

            <motion.div
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
                delay: 0.28,
              }}
              className="
                mt-7

                pt-7

                border-t
                border-black/15
              "
            >
              <div
                className="
                  grid

                  sm:grid-cols-[130px_1fr]

                  gap-4
                  sm:gap-8
                "
              >
                <span
                  className="
                    text-xs
                    uppercase
                    tracking-[0.22em]

                    font-medium

                    text-black/35
                  "
                >
                  Approach
                </span>

                <p
                  className="
                    max-w-md

                    text-sm
                    md:text-base

                    leading-7

                    text-black/55
                  "
                >
                  Learn by building, improve through practice, and keep every
                  project focused on clarity and usability.
                </p>
              </div>
            </motion.div>

            {/* ================= PROJECT LINK ================= */}

            <motion.a
              href="#projects"
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
                delay: 0.35,
              }}
              whileHover={{
                x: 4,
              }}
              className="
                group

                inline-flex
                items-center

                gap-2

                mt-10

                text-sm
                font-medium

                text-black/70

                hover:text-violet-600

                transition-colors
                duration-300
              "
            >
              See what I've been building

              <FiArrowUpRight
                className="
                  group-hover:translate-x-1
                  group-hover:-translate-y-1

                  transition-transform
                  duration-300
                "
              />
            </motion.a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;