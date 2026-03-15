import { AnimatedBackground } from "./ui/animated-background";
import { Button } from "./ui/button";
import { Meteors } from "./ui/meteors";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full">
      <AnimatedBackground containerClassName="min-h-screen">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center pt-20 text-center lg:pt-32">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              <span className="block">Hi, I'm [Munna Kumar]</span>
              <span className="mt-2 block bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-3xl text-lg text-slate-300"
            >
              I create beautiful, responsive, and user-friendly web applications
              using modern technologies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex gap-4"
            >
              <Button size="lg">View My Work</Button>
              <Button variant="outline" size="lg">
                Contact Me
              </Button>
            </motion.div>
          </div>
        </div>
      </AnimatedBackground>
      <Meteors number={20} />
    </section>
  );
} 