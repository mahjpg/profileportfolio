import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiMenu,
  FiX,
} from "react-icons/fi";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = [
        "home",
        "about",
        "projects",
        "skills",
        "experience",
        "contact",
      ];

      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const sectionTop = section.offsetTop - 180;

          if (window.scrollY >= sectionTop) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToSection = (id) => {
    setMenuOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50

        transition-all
        duration-300

        ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-white/10"
            : "bg-black"
        }
      `}
    >
      <div
        className="
          max-w-7xl
          mx-auto

          px-6
          lg:px-8

          h-[88px]

          flex
          items-center
          justify-between
        "
      >
        {/* ================= LOGO + NAME ================= */}

        <button
          onClick={() => goToSection("home")}
          className="
            group
            flex
            items-center
            gap-3
            text-white
          "
        >
          {/* M LOGO */}

          <motion.img
            src="/favicon.ico"
            alt="Mahjabeen Logo"
            whileHover={{
              scale: 1.06,
              rotate: -2,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              w-10
              h-10

              object-cover
              rounded-full

              border
              border-violet-400/40

              shadow-[0_0_18px_rgba(139,92,246,0.18)]
            "
          />

          {/* NAME */}

          <span
            className="
              text-xl
              sm:text-2xl

              font-semibold

              tracking-[-0.04em]

              group-hover:text-violet-200

              transition-colors
              duration-300
            "
          >
            Mahjabeen
          </span>
        </button>

        {/* ================= DESKTOP NAV LINKS ================= */}

        <div
          className="
            hidden
            lg:flex

            absolute
            left-1/2
            -translate-x-1/2

            items-center
            gap-10
          "
        >
          {navLinks.map((link) => {
            const active = activeSection === link.id;

            return (
              <button
                key={link.id}
                onClick={() => goToSection(link.id)}
                className={`
                  relative
                  py-3

                  text-sm
                  font-medium

                  transition-colors
                  duration-300

                  ${
                    active
                      ? "text-white"
                      : "text-white/45 hover:text-white"
                  }
                `}
              >
                <motion.span
                  whileHover={{
                    y: -2,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="block"
                >
                  {link.name}
                </motion.span>

                {/* ACTIVE LINE */}

                {active && (
                  <motion.span
                    layoutId="activeNavLine"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 32,
                    }}
                    className="
                      absolute
                      left-0
                      right-0
                      -bottom-[1px]

                      h-[2px]

                      rounded-full

                      bg-violet-500
                    "
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* ================= DESKTOP CONTACT BUTTON ================= */}

        <motion.button
          onClick={() => goToSection("contact")}
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            hidden
            lg:flex

            group
            relative

            items-center
            justify-center

            gap-2

            px-6
            py-3

            rounded-full

            bg-white
            text-black

            text-sm
            font-medium

            overflow-hidden
          "
        >
          {/* PURPLE WIPE */}

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
            Contact Us
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
        </motion.button>

        {/* ================= MOBILE BUTTON ================= */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            lg:hidden

            w-10
            h-10

            flex
            items-center
            justify-center

            rounded-full

            border
            border-white/15

            text-xl
            text-white

            hover:border-violet-400/50
            hover:text-violet-300

            transition-colors
            duration-300
          "
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              lg:hidden

              bg-black/95
              backdrop-blur-xl

              border-t
              border-white/10
            "
          >
            <div
              className="
                px-6
                py-7

                flex
                flex-col

                gap-2
              "
            >
              {navLinks.map((link) => {
                const active = activeSection === link.id;

                return (
                  <button
                    key={link.id}
                    onClick={() => goToSection(link.id)}
                    className={`
                      flex
                      items-center

                      gap-3

                      py-3

                      text-left
                      text-base

                      transition-colors
                      duration-300

                      ${
                        active
                          ? "text-white"
                          : "text-white/50 hover:text-white"
                      }
                    `}
                  >
                    {active && (
                      <motion.span
                        layoutId="mobileActiveLine"
                        className="
                          w-5
                          h-[2px]

                          rounded-full

                          bg-violet-500
                        "
                      />
                    )}

                    {link.name}
                  </button>
                );
              })}

              {/* MOBILE CONTACT */}

              <button
                onClick={() => goToSection("contact")}
                className="
                  group
                  relative

                  mt-4

                  flex
                  items-center
                  justify-center

                  gap-2

                  w-full

                  py-3.5

                  rounded-full

                  bg-white
                  text-black

                  font-medium

                  overflow-hidden
                "
              >
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
                  Contact Us
                </span>

                <FiArrowUpRight
                  className="
                    relative
                    z-10

                    group-hover:text-white

                    transition-colors
                    duration-300
                  "
                />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;