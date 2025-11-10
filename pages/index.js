'use client';

import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sponsors from '../components/Sponsors';
import Featurestwo from '../components/Featurestwo';

import Server3D, { DataServerLoader } from '../components/Server3D';
import { Suspense, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

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

export default function Home() {
  // Create refs for animated sections
  const imageRef = useRef();
  const sponsorsRef = useRef();
  const featuresRef = useRef();
  const pricingRef = useRef();

  // Use useInView with each ref
  const imageInView = useInView(imageRef, { once: true, margin: '-100px' });
  const sponsorsInView = useInView(sponsorsRef, { once: true, margin: '-100px' });
  const featuresInView = useInView(featuresRef, { once: true, margin: '-100px' });
  const pricingInView = useInView(pricingRef, { once: true, margin: '-100px' });

  return (
    <div className="bg-white">
      <NextSeo
        title="MedLabel "
        description="MedLabel  is the world’s most trusted medical AI data."
        canonical="https://plutonium.vercel.app/"
        openGraph={{
          url: 'https://plutonium.vercel.app/',
          title: 'MedLabel ',
          description: 'MedLabel is the world’s most trusted medical AI data.',
          images: [
            {
              url: 'https://og-playground.vercel.app/api/og?title=MedLabel%20AI',
            },
          ],
          site_name: 'MedLabel ',
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {/* Hero Section */}
      <section className="relative">
        <div className="px-4 pt-6 mx-auto max-w-7xl md:pt-6">
          <div className="w-full pb-5 mx-auto text-center md:w-11/12">
            {/* Animated Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
              className="mb-3 text-5xl font-bold tracking-tight text-gray-900"
            >
              MedLabel
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-green-500 ">
              The Data Engine for AI Diagnostics. 
              </span>
            </motion.h1>

            {/* Animated Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
              className="max-w-xl pt-5 mx-auto text-lg text-gray-600 "
            >
              MedLabel is building the world’s most trusted source of compliant, segmented medical imaging data—automatically processed, ethically sourced from clinics, and licensed to the AI companies building the future of healthcare.
            </motion.p>

            {/* 3D Server */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1.2 }}
              className="mt-5 bg-white rounded-2xl overflow-hidden p-4"
            >
              <Suspense fallback={<DataServerLoader />}>
                <Server3D />
              </Suspense>
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="mt-6 text-center md:ml-6"
            
            >
              <Link href="/Clinics">
                <motion.button
                  variants={fadeInUp}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 relative overflow-hidden"
                >
                  <span className="absolute inset-0 w-0 bg-white opacity-20 group-hover:w-full transition-all duration-500 ease-out origin-left"></span>
                  <span className="relative flex justify-center z-10 items-center">Clinics</span>
                </motion.button>
              </Link>

              <br className="sm:hidden" />

              <Link href="/About">
                <motion.div
                  variants={fadeInUp}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-5 py-3 mt-2 ml-0 text-sm font-medium text-gray-800 transition duration-300 border rounded-lg shadow hover:shadow-md hover:border-gray-400 md:ml-2"
                >
                  <span className="flex justify-center items-center">Investors</span>
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, y: 30 }}
            animate={imageInView ? 'animate' : 'initial'}
            variants={fadeInUp}
            className="relative w-full py-10 mx-auto text-center md:py-32 md:my-12 md:w-10/12"
          >
            <div className="relative z-10">
              <img
                className="transition duration-700 shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 hover:transform hover:scale-105"
                src="/images/27777.png"
                alt="Medical AI Data Example"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sponsors */}
      <motion.div
        ref={sponsorsRef}
        initial={{ opacity: 0, y: 20 }}
        animate={sponsorsInView ? 'animate' : 'initial'}
        variants={fadeInUp}
      >
        <Sponsors />
      </motion.div>

      {/* Features */}
      <motion.div
        ref={featuresRef}
        initial={{ opacity: 0, y: 20 }}
        animate={featuresInView ? 'animate' : 'initial'}
        variants={fadeInUp}
        transition={{ delay: 0.4 }}
      >
        <Featurestwo />
      </motion.div>

      {/* Pricing */}
      <motion.div
        ref={pricingRef}
        initial={{ opacity: 0, y: 20 }}
        animate={pricingInView ? 'animate' : 'initial'}
        variants={fadeInUp}
        transition={{ delay: 0.4 }}
      >
      </motion.div>

      <Footer />
    </div>
  );
}
