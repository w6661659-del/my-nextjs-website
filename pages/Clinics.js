'use client';

import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Suspense, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, ease: 'easeOut' },
};

export default function Clinics() {
  // Create refs for scroll animations
  const contentRef = useRef();
  const imageRef = useRef();

  // Check if elements are in view
  const contentIsVisible = useInView(contentRef, { once: true, margin: '-100px' });
  const imageIsVisible = useInView(imageRef, { once: true, margin: '-100px' });

  return (
    <div className="bg-white ">
      <NextSeo
        title="MedLabel AI Clinics"
        description="Partner with MedLabel AI to ethically monetize your imaging data."
        canonical=""
        openGraph={{
          url: '',
          title: 'MedLabel AI Clinics',
          description: 'Turn your imaging data into revenue — ethically and effortlessly.',
          images: [
            {
              url: 'https://og-playground.vercel.app/api/og?title=Clinics',
            },
          ],
          site_name: 'MedLabel AI',
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {/* Main Section */}
      <section className="relative">
        <div className="px-4 pt-10 mx-auto max-w-7xl md:pt-16">
          {/* Text Content */}
          <motion.div
            ref={contentRef}
            initial="initial"
            animate={contentIsVisible ? 'animate' : 'initial'}
            transition={{ delay: 0.4, duration: 1.5 }}
            variants={fadeInUp}
            className="w-full pb-5 mx-auto text-center md:w-11/12"
          >
            <h1 className="mb-3 text-5xl font-bold tracking-tight text-gray-900 ">
              Turn Your Imaging Data into Revenue — Ethically
            </h1>
            <p className="max-w-xl pt-5 mx-auto text-lg text-gray-600 ">
            MedLabel partners with clinics to ethically source de-identified historical imaging data — transforming your archives into high-fidelity datasets for AI training.
             We handle compliance, labeling, and licensing, while you get paid for every imaging exam you contribute — all with zero operational burden. No data will be collected or formal agreements initiated until MedLabel receives REB approval or waiver from a Canadian Research Ethics Board.
            </p>

            {/* Button */}
            <div className="mt-6 text-center md:ml-6">
              <Link
                href="https://github.com/minor/plutonium/"
                className="inline-flex items-center px-5 py-3 text-sm font-medium text-white transition duration-300 bg-black rounded hover:bg-gray-800 "
                aria-label="Download Partner Guide"
                rel="noreferrer"
              >
                <span className="flex justify-center">✍️ Express Interest — No Data Collected Until REB Approval</span>
              </Link>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            ref={imageRef}
            initial="initial"
            animate={imageIsVisible ? 'animate' : 'initial'}
            variants={fadeIn}
            transition={{ delay: 0.9, duration: 1.5 }}
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
                    className="transition duration-700 shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 hover:transform hover:scale-105"
                    src="/images/data2.jpg"
                    alt="Medical Imaging Data for AI"
                  />
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}