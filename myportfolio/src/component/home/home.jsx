import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiMail,
} from "react-icons/fi";

function Home() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        bg-[#050407]
        text-white
        overflow-hidden
      "
    >
      {/* =====================================================
          BACKGROUND VIDEO
      ====================================================== */}

      <motion.video
        autoPlay
        muted
        loop
        playsInline
        initial={{
          opacity: 0,
          scale: 1.04,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.6,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      >
        <source
          src="/videos/homebackground.mp4"
          type="video/mp4"
        />
      </motion.video>

      {/* =====================================================
          EVEN DARK OVERLAY
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-black/50
        "
      />

      {/* =====================================================
          PURPLE / BLUE THEME WASH
      ====================================================== */}

      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(120deg,rgba(67,25,122,0.26)_0%,rgba(31,17,56,0.18)_48%,rgba(30,58,138,0.14)_100%)]
        "
      />

      {/* =====================================================
          CENTER VIOLET LIGHT
      ====================================================== */}

      <div
        className="
          absolute

          left-1/2
          top-[44%]

          -translate-x-1/2
          -translate-y-1/2

          w-[780px]
          h-[520px]

          rounded-full

          bg-violet-600/[0.07]

          blur-[140px]

          pointer-events-none
        "
      />

      {/* =====================================================
          TOP + BOTTOM DEPTH
      ====================================================== */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b

          from-black/45
          via-transparent
          to-black/80
        "
      />

      {/* =====================================================
          VERY SUBTLE GRID
      ====================================================== */}

      <div
        className="
          absolute
          inset-0

          opacity-[0.018]

          bg-[linear-gradient(rgba(167,139,250,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(167,139,250,0.6)_1px,transparent_1px)]

          bg-[size:90px_90px]

          pointer-events-none
        "
      />

      {/* =====================================================
          MAIN WRAPPER
      ====================================================== */}

      <div
        className="
          relative
          z-10

          max-w-7xl
          mx-auto

          min-h-screen

          px-6
          lg:px-8

          pt-28
          pb-7

          flex
          flex-col
        "
      >
        {/* =================================================
            HERO CONTENT
        ================================================== */}

        <div
          className="
            flex-1

            flex
            items-center
            justify-center
          "
        >
          <div
            className="
              w-full
              max-w-5xl

              flex
              flex-col
              items-center

              text-center
            "
          >
            {/* =================================================
                NAME
            ================================================== */}

            <div className="overflow-hidden pb-5">

              <motion.h1
                initial={{
                  y: "110%",
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  duration: 0.95,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  text-6xl
                  sm:text-7xl
                  md:text-8xl
                  lg:text-[7.4rem]

                  font-medium

                  tracking-[-0.075em]

                  leading-[0.96]
                "
              >
                Mahjabeen
              </motion.h1>

            </div>

            {/* =================================================
                ROLE
            ================================================== */}

            <motion.p
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.27,
              }}
              className="
                mt-1

                text-2xl
                sm:text-3xl
                md:text-[2.2rem]

                font-medium

                tracking-[-0.04em]

                bg-gradient-to-r
                from-violet-300
                to-indigo-300

                bg-clip-text
                text-transparent
              "
            >
              Full-Stack Developer
            </motion.p>

            {/* =================================================
                TYPEWRITER
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 14,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="
                mt-6

                min-h-[30px]

                flex
                items-center
                justify-center

                text-base
                sm:text-lg
                md:text-xl

                text-white/60
              "
            >
              <span>
                Building{"\u00A0"}
              </span>

              <span
                className="
                  font-medium
                  text-violet-400
                "
              >
                <Typewriter
                  words={[
                    "responsive interfaces.",
                    "full-stack applications.",
                    "Django powered systems.",
                    "modern web experiences.",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={55}
                  deleteSpeed={32}
                  delaySpeed={1600}
                />
              </span>
            </motion.div>

            {/* =================================================
                MAIN STATEMENT
            ================================================== */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 28,
                filter: "blur(7px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.85,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mt-7

                max-w-3xl

                text-xl
                sm:text-2xl
                md:text-[1.8rem]

                leading-[1.45]

                tracking-[-0.035em]

                text-white/85
              "
            >
              I design and build complete web experiences from{" "}

              <span className="text-violet-300">
                thoughtful interfaces
              </span>

              {" "}to{" "}

              <span className="text-indigo-300">
                dependable backend systems.
              </span>
            </motion.h2>

            {/* =================================================
                ACTIONS
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.65,
              }}
              className="
                flex
                flex-wrap
                items-center
                justify-center

                gap-4

                mt-9
              "
            >
              {/* VIEW PROJECTS */}

              <motion.a
                href="#projects"
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  relative

                  inline-flex
                  items-center
                  justify-center

                  gap-3

                  px-7
                  py-3.5

                  rounded-full

                  bg-white
                  text-black

                  text-sm
                  font-medium

                  overflow-hidden
                "
              >
                {/* VIOLET / BLUE WIPE */}

                <span
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-r
                    from-violet-600
                    to-indigo-600

                    -translate-x-full

                    group-hover:translate-x-0

                    transition-transform
                    duration-500

                    ease-[cubic-bezier(0.16,1,0.3,1)]
                  "
                />

                <span
                  className="
                    relative
                    z-10

                    group-hover:text-white

                    transition-colors
                    duration-300
                  "
                >
                  View Projects
                </span>

                <FiArrowUpRight
                  className="
                    relative
                    z-10

                    group-hover:text-white

                    group-hover:translate-x-1
                    group-hover:-translate-y-1

                    transition-all
                    duration-300
                  "
                />
              </motion.a>

              {/* CONTACT */}

              <motion.a
                href="#contact"
                whileHover={{
                  x: 3,
                }}
                className="
                  group

                  inline-flex
                  items-center

                  gap-2

                  px-3
                  py-3

                  text-sm
                  font-medium

                  text-white/65

                  hover:text-white

                  transition-colors
                  duration-300
                "
              >
                Contact Me

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

            {/* =================================================
                SOCIAL LINKS
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.78,
              }}
              className="
                flex
                items-center
                justify-center

                gap-7

                mt-7
              "
            >
              <SocialLink
                href="https://github.com/YOUR_USERNAME"
                icon={<FaGithub />}
              >
                GitHub
              </SocialLink>

              <SocialLink
                href="https://linkedin.com/in/YOUR_USERNAME"
                icon={<FaLinkedinIn />}
              >
                LinkedIn
              </SocialLink>

              <SocialLink
                href="mailto:m23315023@gmail.com"
                icon={<FiMail />}
                external={false}
              >
                Email
              </SocialLink>
            </motion.div>

          </div>
        </div>

        {/* =================================================
            DEVELOPMENT STRIP
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 22,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.88,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            hidden
            md:grid

            grid-cols-3

            border-t
            border-white/15
          "
        >
          <DevelopmentItem
            heading="Frontend Development"
            text="Responsive interfaces and interactive experiences"
          />

          <DevelopmentItem
            heading="Backend Development"
            text="Application logic and server-side functionality"
            middle
          />

          <DevelopmentItem
            heading="Database Management"
            text="Structured and reliable application data"
          />
        </motion.div>

        {/* =================================================
            MOBILE DEVELOPMENT STRIP
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.85,
          }}
          className="
            md:hidden

            grid
            grid-cols-1

            mt-10

            border-t
            border-white/15
          "
        >
          <DevelopmentItem
            heading="Frontend Development"
            text="Responsive interfaces"
          />

          <DevelopmentItem
            heading="Backend Development"
            text="Application functionality"
          />

          <DevelopmentItem
            heading="Database Management"
            text="Structured application data"
          />
        </motion.div>

        {/* =================================================
            SCROLL TO EXPLORE
        ================================================== */}

        <div
          className="
            flex
            items-center
            justify-end

            pt-4
          "
        >
          <motion.a
            href="#about"
            animate={{
              y: [0, 3, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              hidden
              sm:flex

              items-center

              gap-2

              text-[10px]

              uppercase

              tracking-[0.24em]

              text-white/40

              hover:text-violet-300

              transition-colors
              duration-300
            "
          >
            Scroll to explore

            <FiArrowDownRight />
          </motion.a>
        </div>

      </div>
    </section>
  );
}

/* =========================================================
   DEVELOPMENT ITEM
========================================================= */

function DevelopmentItem({
  heading,
  text,
  middle = false,
}) {
  return (
    <motion.div
      whileHover={{
        y: -3,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        group

        py-5
        md:px-6

        ${
          middle
            ? "md:border-x md:border-white/10"
            : ""
        }

        max-md:border-b
        max-md:border-white/10
      `}
    >
      <p
        className="
          text-[10px]
          sm:text-[11px]

          uppercase

          tracking-[0.2em]

          font-medium

          text-violet-300/75

          group-hover:text-violet-300

          transition-colors
          duration-300
        "
      >
        {heading}
      </p>

      <p
        className="
          mt-2

          text-xs
          sm:text-sm

          leading-6

          text-white/45

          group-hover:text-white/70

          transition-colors
          duration-300
        "
      >
        {text}
      </p>
    </motion.div>
  );
}

/* =========================================================
   SOCIAL LINK
========================================================= */

function SocialLink({
  href,
  icon,
  children,
  external = true,
}) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      whileHover={{
        y: -2,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        flex
        items-center

        gap-2

        text-sm

        text-white/45

        hover:text-white

        transition-colors
        duration-300
      "
    >
      <span
        className="
          text-base

          group-hover:text-violet-300

          transition-colors
          duration-300
        "
      >
        {icon}
      </span>

      <span className="hidden sm:inline">
        {children}
      </span>
    </motion.a>
  );
}

export default Home;