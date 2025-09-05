'use client';

import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sponsors from '../components/Sponsors';
import Featurestwo from '../components/Featurestwo';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Reusable animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export default function About() {
  const heroRef = useRef();
  const buttonRef = useRef();
  const imageRef = useRef();
  const sponsorsRef = useRef();

  const heroIsVisible = useInView(heroRef, { once: true, margin: '-100px' });
  const buttonIsVisible = useInView(buttonRef, { once: true, margin: '-100px' });
  const imageIsVisible = useInView(imageRef, { once: true, margin: '-100px' });
  const sponsorsIsVisible = useInView(sponsorsRef, { once: true, margin: '-100px' });

  return (
    <div className="bg-white dark:bg-black">
      <NextSeo
        title="MedLabel AI About"
        description="MedLabel AI is the world’s most trusted medical AI data."
        canonical=""
        openGraph={{
          url: '',
          title: 'About MedLabel AI',
          description: 'Building the world’s most trusted medical AI data ecosystem.',
          images: [
            {
              url: 'https://og-playground.vercel.app/api/og?title=About',
            },
          ],
          site_name: 'MedLabel AI',
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {/* Hero Section */}
      <section className="relative">
        <div className="px-4 pt-10 mx-auto max-w-7xl md:pt-16">
          <motion.div
            ref={heroRef}
            initial="initial"
            animate={heroIsVisible ? 'animate' : 'initial'}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={fadeInUp}
            className="w-full pb-5 mx-auto text-center md:w-11/12"
          >
            <h1 className="mb-3 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl">
              About MedLabel AI.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-green-500 dark:from-blue-600 dark:to-green-400">
                Building The World's Most Trusted Medical AI Data Ecosystem.
              </span>
            </h1>
          </motion.div>

          {/* Animate Featurestwo as a group */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={heroIsVisible ? 'animate' : 'initial'}
            transition={{ delayChildren: 0.8 }}
          >
            <Featurestwo />
          </motion.div>
        </div>
      </section>

      {/* Button */}
      <motion.div
        ref={buttonRef}
        initial={{ opacity: 0, y: 10 }}
        animate={buttonIsVisible ? 'animate' : 'initial'}
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
        className="mt-6 text-center md:ml-6"
      >
        <Link
          href="/Hospitals"
          className="inline-flex items-center px-5 py-3 text-sm font-medium text-white transition duration-300 bg-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 dark:text-gray-700 dark:bg-white"
          aria-label="Download Pitch Deck"
          rel="noreferrer"
        >
          <span className="flex justify-center">MedLabel AI Pitch Deck</span>
        </Link>
      </motion.div>

      {/* Animated Image Section */}
      <section className="py-16 md:py-24">
        <div className="px-4 mx-auto max-w-7xl">
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, y: 40 }}
            animate={imageIsVisible ? 'animate' : 'initial'}
            variants={fadeInUp}
            className="text-center"
          >
            <img
              src="/images/12.jpg"
              alt="MedLabel AI Data Ecosystem Overview"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-xl ring-1 ring-gray-200 dark:ring-gray-700 transition-transform duration-500 hover:scale-[1.02]"
            />
          </motion.div>
        </div>
      </section>

      {/* Sponsors */}
      <motion.div
        ref={sponsorsRef}
        initial={{ opacity: 0, y: 20 }}
        animate={sponsorsIsVisible ? 'animate' : 'initial'}
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
      >
        <Sponsors />
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <Footer />
      </motion.footer>
    </div>
  );
}