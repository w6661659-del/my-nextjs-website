'use client';

import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
};

export default function Contact() {
  const contentRef = useRef();
  const buttonRef = useRef();
  const imageRef = useRef();

  const contentIsVisible = useInView(contentRef, { once: true, margin: '-100px' });
  const buttonIsVisible = useInView(buttonRef, { once: true, margin: '-100px' });
  const imageIsVisible = useInView(imageRef, { once: true, margin: '-100px' });

  return (
    <div className="bg-white dark:bg-black">
      <NextSeo
        title="MedLabel Contact"
        description="Get in touch with MedLabel AI — the world’s most trusted medical AI data provider."
        canonical="https://plutonium.vercel.app/contact"
        openGraph={{
          url: 'https://plutonium.vercel.app/contact',
          title: 'Contact MedLabel',
          description: 'Partner with us or learn more about our medical AI datasets.',
          images: [
            {
              url: 'https://og-playground.vercel.app/api/og?title=Contact',
            },
          ],
          site_name: 'MedLabel',
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {/* Main Section */}
      <section className="relative">
        <div className="px-4 pt-10 mx-auto max-w-7xl md:pt-16">
          {/* Animated Heading */}
          <motion.div
            ref={contentRef}
            initial="initial"
            animate={contentIsVisible ? 'animate' : 'initial'}
            variants={fadeInUp}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-full pb-5 mx-auto text-center md:w-11/12"
          >
            <h1 className="mb-3 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl">
              Contact Us
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-green-500 dark:from-blue-600 dark:to-green-400">
                Help build the foundation of medical AI
              </span>
            </h1>
          </motion.div>

          {/* Button */}
          <motion.div
            ref={buttonRef}
            initial="initial"
            animate={buttonIsVisible ? 'animate' : 'initial'}
            variants={fadeInUp}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 text-center md:ml-6"
          >
            <Link
              href="mailto:jacob@medlabel.ca"
              class="email-button"
              className="inline-flex items-center px-5 py-3 text-sm font-medium text-white transition duration-300 bg-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 dark:text-gray-700 dark:bg-white"
              aria-label="Explore Datasets"
              rel="noreferrer"
            >
              <span className="flex justify-center">Contact Us</span>
            </Link>
          </motion.div>

          {/* Image Section */}
          <motion.div
            ref={imageRef}
            initial="initial"
            animate={imageIsVisible ? 'animate' : 'initial'}
            variants={fadeInUp}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative w-full py-10 mx-auto text-center md:py-32 md:my-12 md:w-10/12"
          >
            <div className="relative z-10">
              <Link href="/" passHref legacyBehavior>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <img
                    src="/images/15.jpg"
                    alt="MedLabel AI Contact & Collaboration"
                    className="w-full max-w-3xl mx-auto transition duration-700 shadow-xl rounded-xl ring-1 ring-gray-200 dark:ring-gray-700 hover:transform hover:scale-105"
                  />
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}