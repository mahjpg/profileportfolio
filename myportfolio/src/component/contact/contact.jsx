import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  FiArrowUpRight,
  FiMail,
  FiSend,
} from "react-icons/fi";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setSending(false);
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("Failed to send message. Please try again.");
          setSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
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

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
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
            <span className="w-8 h-[1px] bg-violet-600" />

            <span
              className="
                text-xs
                uppercase
                tracking-[0.28em]
                font-medium
                text-violet-600
              "
            >
              Contact
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
            Let's Connect
          </span>
        </motion.div>

        {/* MAIN */}

        <div
          className="
            grid
            lg:grid-cols-[0.9fr_1.1fr]
            gap-16
            lg:gap-28
            mt-16
            md:mt-20
            items-start
          "
        >
          {/* LEFT */}

          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="
                text-xs
                uppercase
                tracking-[0.24em]
                text-black/40
              "
            >
              Have something in mind?
            </motion.p>

            <motion.h2
              initial={{
                opacity: 0,
                y: 40,
                filter: "blur(7px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mt-7
                max-w-xl
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-[5rem]
                font-medium
                tracking-[-0.07em]
                leading-[1.02]
              "
            >
              Let's build
              <span className="text-violet-600">
                {" "}something great.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.12,
              }}
              className="
                mt-8
                max-w-lg
                text-base
                md:text-lg
                leading-8
                text-black/50
              "
            >
              Whether you want to discuss a project, ask a question or simply
              connect, feel free to send me a message.
            </motion.p>

            {/* EMAIL */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-black/35
                "
              >
                Email
              </p>

              <motion.a
                href="mailto:m23315023@gmail.com"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  mt-4
                  text-base
                  sm:text-lg
                  font-medium
                  text-black/70
                  hover:text-violet-600
                  transition-colors
                  duration-300
                "
              >
                <FiMail />

                m23315023@gmail.com

                <FiArrowUpRight
                  className="
                    text-black/30
                    group-hover:text-violet-600
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                />
              </motion.a>
            </motion.div>

            {/* SOCIALS */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.28,
              }}
              className="
                mt-8
                pt-7
                border-t
                border-black/15
              "
            >
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-black/35
                "
              >
                Find me online
              </p>

              <div className="flex flex-wrap gap-6 mt-5">
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
            </motion.div>
          </div>

          {/* RIGHT FORM */}

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
              amount: 0.1,
            }}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* FORM HEADING */}

            <div
              className="
                flex
                items-end
                justify-between
                gap-6
                pb-7
                border-b
                border-black/15
              "
            >
              <div>
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.22em]
                    text-violet-600
                  "
                >
                  Send a message
                </p>

                <h3
                  className="
                    mt-3
                    text-3xl
                    sm:text-4xl
                    font-medium
                    tracking-[-0.045em]
                  "
                >
                  Tell me about your idea.
                </h3>
              </div>

              <FiArrowUpRight
                className="
                  hidden
                  sm:block
                  text-2xl
                  text-black/20
                "
              />
            </div>

            {/* FORM */}

            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-2"
            >
              <ContactField
                label="Your Name"
                name="from_name"
                type="text"
                placeholder="Enter your name"
                delay={0.05}
              />

              <ContactField
                label="Your Email"
                name="from_email"
                type="email"
                placeholder="Enter your email"
                delay={0.1}
              />

              <ContactField
                label="Subject"
                name="subject"
                type="text"
                placeholder="What would you like to discuss?"
                delay={0.15}
              />

              {/* MESSAGE */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: 0.2,
                }}
                className="
                  group
                  py-8
                  border-b
                  border-black/15
                  focus-within:border-violet-500
                  transition-colors
                  duration-300
                "
              >
                <label
                  htmlFor="message"
                  className="
                    block

                    text-lg
                    sm:text-xl

                    font-medium

                    tracking-[-0.02em]

                    bg-gradient-to-r
                    from-violet-600
                    to-indigo-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  placeholder="Tell me a little about your project..."
                  className="
                    w-full
                    mt-4
                    bg-transparent
                    border-none
                    outline-none
                    resize-none
                    text-base
                    md:text-lg
                    text-black/80
                    placeholder:text-black/25
                  "
                />
              </motion.div>

              {/* SEND BUTTON */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: 0.28,
                }}
                className="
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  gap-5
                  mt-8
                "
              >
                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={
                    sending ? {} : { y: -2 }
                  }
                  whileTap={
                    sending ? {} : { scale: 0.97 }
                  }
                  className="
                    group
                    relative
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    self-start
                    px-7
                    py-3.5
                    rounded-full
                    bg-[#111111]
                    text-white
                    text-sm
                    font-medium
                    overflow-hidden
                    disabled:opacity-60
                    disabled:cursor-not-allowed
                  "
                >
                  <span
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-violet-600
                      to-indigo-600
                      translate-x-[-101%]
                      group-hover:translate-x-0
                      transition-transform
                      duration-500
                      ease-[cubic-bezier(0.16,1,0.3,1)]
                    "
                  />

                  <span className="relative z-10">
                    {sending ? "Sending..." : "Send Message"}
                  </span>

                  <FiSend
                    className="
                      relative
                      z-10
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      transition-transform
                      duration-300
                    "
                  />
                </motion.button>

                {status && (
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className={`
                      text-sm
                      ${
                        status.includes("successfully")
                          ? "text-violet-600"
                          : "text-red-600"
                      }
                    `}
                  >
                    {status}
                  </motion.p>
                )}
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CONTACT FIELD
========================================================= */

function ContactField({
  label,
  name,
  type,
  placeholder,
  delay,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.65,
        delay,
      }}
      className="
        group
        py-8
        border-b
        border-black/15
        focus-within:border-violet-500
        transition-colors
        duration-300
      "
    >
      <label
        htmlFor={name}
        className="
          block

          text-lg
          sm:text-xl

          font-medium

          tracking-[-0.02em]

          bg-gradient-to-r
          from-violet-600
          to-indigo-500

          bg-clip-text
          text-transparent
        "
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="
          w-full
          mt-4
          bg-transparent
          border-none
          outline-none
          text-base
          md:text-lg
          text-black/80
          placeholder:text-black/25
        "
      />
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
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ x: 3 }}
      transition={{ duration: 0.2 }}
      className="
        group
        inline-flex
        items-center
        gap-2
        text-sm
        font-medium
        text-black/55
        hover:text-violet-600
        transition-colors
        duration-300
      "
    >
      <span className="text-base">
        {icon}
      </span>

      <span>{children}</span>

      <FiArrowUpRight
        className="
          text-black/25
          group-hover:text-violet-600
          group-hover:translate-x-0.5
          group-hover:-translate-y-0.5
          transition-all
          duration-300
        "
      />
    </motion.a>
  );
}

export default Contact;