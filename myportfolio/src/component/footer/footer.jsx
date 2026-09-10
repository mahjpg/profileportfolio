import React from "react";
import { motion } from "framer-motion";

import {
  FiArrowUp,
  FiArrowUpRight,
  FiMail,
} from "react-icons/fi";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        relative
        bg-black
        text-white
        overflow-hidden
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto

          px-6
          lg:px-8

          pt-20
          md:pt-24

          pb-8
        "
      >
        {/* =====================================================
            TOP AREA
        ====================================================== */}

        <div
          className="
            grid

            lg:grid-cols-[1.2fr_0.8fr]

            gap-16
            lg:gap-24
          "
        >
          {/* =================================================
              LEFT — IDENTITY
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              filter: "blur(6px)",
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
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* NAME */}

            <h2
              className="
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-[5.2rem]

                font-medium

                tracking-[-0.07em]

                leading-[1]
              "
            >
              Mahjabeen
            </h2>

            {/* ROLE */}

            <p
              className="
                mt-5

                text-lg
                md:text-xl

                font-medium

                text-violet-400
              "
            >
              Full-Stack Developer
            </p>

            {/* DESCRIPTION */}

            <p
              className="
                mt-6

                max-w-xl

                text-base
                md:text-lg

                leading-8

                text-white/45
              "
            >
              Building responsive full-stack web applications with clean
              interfaces, practical functionality and structured development.
            </p>

            {/* EMAIL */}

            <motion.a
              href="mailto:m23315023@gmail.com"
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

                gap-3

                mt-8

                text-sm
                sm:text-base

                text-white/60

                hover:text-white

                transition-colors
                duration-300
              "
            >
              <FiMail className="text-violet-400" />

              <span>
                m23315023@gmail.com
              </span>

              <FiArrowUpRight
                className="
                  text-white/25

                  group-hover:text-violet-400

                  group-hover:translate-x-1
                  group-hover:-translate-y-1

                  transition-all
                  duration-300
                "
              />
            </motion.a>
          </motion.div>

          {/* =================================================
              RIGHT — LINKS
          ================================================== */}

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
              delay: 0.1,
            }}
            className="
              grid
              grid-cols-2

              gap-10
              sm:gap-16
            "
          >
            {/* NAVIGATION */}

            <div>
              <p
                className="
                  text-xs

                  uppercase

                  tracking-[0.22em]

                  text-white/30
                "
              >
                Navigation
              </p>

              <div
                className="
                  flex
                  flex-col

                  items-start

                  gap-4

                  mt-6
                "
              >
                <FooterLink href="#home">
                  Home
                </FooterLink>

                <FooterLink href="#about">
                  About
                </FooterLink>

                <FooterLink href="#projects">
                  Projects
                </FooterLink>

                <FooterLink href="#skills">
                  Skills
                </FooterLink>

                <FooterLink href="#experience">
                  Experience
                </FooterLink>

                <FooterLink href="#contact">
                  Contact
                </FooterLink>
              </div>
            </div>

            {/* SOCIALS */}

            <div>
              <p
                className="
                  text-xs

                  uppercase

                  tracking-[0.22em]

                  text-white/30
                "
              >
                Socials
              </p>

              <div
                className="
                  flex
                  flex-col

                  items-start

                  gap-4

                  mt-6
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
              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            LARGE DIVIDER
        ====================================================== */}

        <motion.div
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
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            origin-left

            w-full
            h-px

            bg-white/10

            mt-20
            md:mt-24
          "
        />

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div
          className="
            flex
            flex-col
            sm:flex-row

            sm:items-center
            sm:justify-between

            gap-6

            pt-7
          "
        >
          {/* COPYRIGHT */}

          <motion.p
            initial={{
              opacity: 0,
              y: 10,
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
              text-xs
              sm:text-sm

              text-white/30
            "
          >
            © {year} Mahjabeen — All rights reserved
          </motion.p>

          {/* RIGHT */}

          <div
            className="
              flex
              items-center

              gap-6
            "
          >
            <span
              className="
                hidden
                md:block

                text-xs

                text-white/25
              "
            >
              Built with React and Tailwind CSS
            </span>

            {/* BACK TO TOP */}

            <motion.a
              href="#home"
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                duration: 0.2,
              }}
              aria-label="Back to top"
              className="
                group

                flex
                items-center
                justify-center

                w-11
                h-11

                rounded-full

                border
                border-white/15

                text-white/50

                hover:bg-violet-600
                hover:border-violet-600
                hover:text-white

                transition-colors
                duration-300
              "
            >
              <FiArrowUp
                className="
                  group-hover:-translate-y-0.5

                  transition-transform
                  duration-300
                "
              />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   FOOTER NAVIGATION LINK
========================================================= */

function FooterLink({
  href,
  children,
}) {
  return (
    <motion.a
      href={href}
      whileHover={{
        x: 4,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        text-sm
        md:text-base

        text-white/45

        hover:text-white

        transition-colors
        duration-300
      "
    >
      {children}
    </motion.a>
  );
}

/* =========================================================
   SOCIAL LINK
========================================================= */

function SocialLink({
  href,
  icon,
  children,
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{
        x: 4,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        group

        flex
        items-center

        gap-3

        text-sm
        md:text-base

        text-white/45

        hover:text-white

        transition-colors
        duration-300
      "
    >
      <span
        className="
          text-base

          group-hover:text-violet-400

          transition-colors
          duration-300
        "
      >
        {icon}
      </span>

      <span>
        {children}
      </span>

      <FiArrowUpRight
        className="
          text-xs

          opacity-0

          -translate-x-1
          translate-y-1

          group-hover:opacity-100
          group-hover:translate-x-0
          group-hover:translate-y-0

          transition-all
          duration-300
        "
      />
    </motion.a>
  );
}

export default Footer;