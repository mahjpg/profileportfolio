import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    {
      name: "Home",
      href: "#home",
      id: "home",
    },
    {
      name: "About",
      href: "#about",
      id: "about",
    },
    {
      name: "Projects",
      href: "#projects",
      id: "projects",
    },
    {
      name: "Skills",
      href: "#skills",
      id: "skills",
    },
    {
      name: "Experience",
      href: "#experience",
      id: "experience",
    },
  ];

  /* ======================================
     ACTIVE SECTION ON SCROLL
  ====================================== */

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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* ======================================
          NAVBAR
      ====================================== */}

      <motion.nav
        initial={{
          y: -60,
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
          z-50

          w-full

          transition-all
          duration-300

          ${
            scrolled
              ? "bg-black/90 backdrop-blur-xl border-b border-white/10"
              : "bg-black/70 backdrop-blur-md border-b border-white/5"
          }
        `}
      >
        <div
          className="
            max-w-7xl
            mx-auto

            h-20

            px-6
            lg:px-8

            grid
            grid-cols-[1fr_auto]
            lg:grid-cols-[1fr_auto_1fr]

            items-center
          "
        >
          {/* ======================================
              NAME
          ====================================== */}

          <motion.a
            href="#home"
            onClick={closeMenu}
            whileHover={{
              x: 3,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              w-fit

              text-xl
              md:text-2xl

              font-semibold

              tracking-[-0.04em]

              text-white
            "
          >
            Mahjabeen
          </motion.a>

          {/* ======================================
              DESKTOP NAVIGATION
          ====================================== */}

          <div
            className="
              hidden
              lg:flex

              items-center

              gap-9
            "
          >
            {navLinks.map((link) => {
              const active = activeSection === link.id;

              return (
                <motion.a
                  key={link.id}
                  href={link.href}
                  whileHover={{
                    y: -2,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    relative

                    py-2.5

                    text-sm
                    font-medium
                  "
                >
                  {/* TEXT */}

                  <span
                    className={`
                      transition-colors
                      duration-300

                      ${
                        active
                          ? "text-white"
                          : "text-zinc-500 hover:text-white"
                      }
                    `}
                  >
                    {link.name}
                  </span>

                  {/* ======================================
                      ACTIVE LINK INDICATOR
                      ONLY CURRENT SECTION
                  ====================================== */}

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
                </motion.a>
              );
            })}
          </div>

          {/* ======================================
              RIGHT SIDE
          ====================================== */}

          <div
            className="
              flex
              items-center
              justify-end

              gap-3
            "
          >
            {/* ======================================
                CONTACT US
                LEFT TO RIGHT VIOLET WIPE
            ====================================== */}

            <motion.a
              href="#contact"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                hidden
                sm:inline-flex

                group
                relative

                items-center
                justify-center

                gap-2

                px-5
                py-2.5

                rounded-full

                bg-white
                text-black

                text-sm
                font-medium

                overflow-hidden
              "
            >
              {/* LEFT → RIGHT VIOLET EFFECT */}

              <span
                className="
                  absolute
                  inset-0

                  bg-violet-600

                  -translate-x-full

                  group-hover:translate-x-0

                  transition-transform
                  duration-500

                  ease-[cubic-bezier(0.16,1,0.3,1)]
                "
              />

              {/* TEXT */}

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

              {/* ARROW */}

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

            {/* ======================================
                MOBILE MENU BUTTON
            ====================================== */}

            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{
                scale: 0.9,
              }}
              className="
                lg:hidden

                w-11
                h-11

                flex
                items-center
                justify-center

                rounded-full

                border
                border-white/15

                text-white

                hover:border-white/40

                transition
                duration-300
              "
              aria-label="Toggle navigation menu"
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{
                      opacity: 0,
                      rotate: -90,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 90,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <FiX className="text-xl" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{
                      opacity: 0,
                      rotate: 90,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: -90,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <FiMenu className="text-xl" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ======================================
          MOBILE MENU
      ====================================== */}

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* BACKDROP */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={closeMenu}
              className="
                fixed
                inset-0

                z-40

                bg-black/70

                backdrop-blur-sm

                lg:hidden
              "
            />

            {/* ======================================
                MOBILE NAV
            ====================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                fixed

                top-20
                left-0

                z-40

                w-full

                bg-black

                border-b
                border-white/10

                lg:hidden
              "
            >
              <div className="px-6 py-6">

                {/* ======================================
                    MOBILE LINKS
                ====================================== */}

                {navLinks.map((link, index) => {
                  const active = activeSection === link.id;

                  return (
                    <motion.a
                      key={link.id}
                      href={link.href}
                      onClick={closeMenu}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: index * 0.05,
                      }}
                      className="
                        relative

                        flex
                        items-center
                        justify-between

                        py-4
                      "
                    >
                      <div
                        className="
                          flex
                          items-center

                          gap-3
                        "
                      >
                        {/* ACTIVE MOBILE INDICATOR */}

                        {active && (
                          <motion.span
                            layoutId="mobileActiveIndicator"
                            className="
                              w-5
                              h-[2px]

                              rounded-full

                              bg-violet-500
                            "
                          />
                        )}

                        <span
                          className={`
                            text-lg
                            font-medium

                            transition-colors
                            duration-300

                            ${
                              active
                                ? "text-white"
                                : "text-zinc-500"
                            }
                          `}
                        >
                          {link.name}
                        </span>
                      </div>

                      <span
                        className="
                          text-[10px]

                          tracking-[0.2em]

                          text-zinc-700
                        "
                      >
                        0{index + 1}
                      </span>
                    </motion.a>
                  );
                })}

                {/* ======================================
                    MOBILE CONTACT BUTTON
                    LEFT → RIGHT EFFECT
                ====================================== */}

                <motion.a
                  href="#contact"
                  onClick={closeMenu}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    group
                    relative

                    mt-6

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
                  {/* LEFT → RIGHT VIOLET WIPE */}

                  <span
                    className="
                      absolute
                      inset-0

                      bg-violet-600

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
                </motion.a>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;