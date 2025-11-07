'use client';

import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DataServer3D, { DataServerLoader } from '../components/DataServer3D';
import { Suspense, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Animation variants
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

export default function Datasets() {
  const contentRef = useRef();
  const imageRef = useRef();

  const contentIsVisible = useInView(contentRef, { once: true, margin: '-100px' });
  const imageIsVisible = useInView(imageRef, { once: true, margin: '-100px' });

  return (
    <div className="bg-white dark:bg-black">
      <NextSeo
        title="MedLabel Datasets"
        description="Access expert-labeled, AI-ready medical datasets."
        canonical=""
        openGraph={{
          url: '',
          title: 'MedLabel Datasets',
          description: 'Expert-annotated, compliant, scalable medical AI datasets.',
          images: [
            {
              url: 'https://og-playground.vercel.app/api/og?title=Datasets',
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
          <motion.div
            ref={contentRef}
            transition={{ delay: 0.3, duration: 0.7 }}
            initial="initial"
            animate={contentIsVisible ? 'animate' : 'initial'}
            variants={fadeInUp}
            className="w-full pb-5 mx-auto text-center md:w-11/12"
          >
            {/* Animated Heading */}
            <h1 className="mb-3 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl">
              MedLabel AI.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-green-500 dark:from-blue-600 dark:to-green-400">
                Dataset Portals.
              </span>
            </h1>

            {/* 3D Server */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-10 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 p-6"
            >
              <Suspense fallback={<DataServerLoader />}>
                <DataServer3D />
              </Suspense>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="mt-16 grid md:grid-cols-3 gap-8"
            >
              <FeatureCard
                title="Secure & PIPEDA/GDPR/HIPAA Compliant"
                desc="Securely de-identified, encrypted, and Canada-hosted for privacy compliance."
              />
              <FeatureCard
                title="Segmented, AI-Ready Data"
                desc="Our data-pipeline de-identifies and fully segments MRI imaging data to make it AI-ready "
              />
              <FeatureCard
                title="Built to Scale with Your Clinic"
                desc="From single-location archives to multi-site networks."
              />
            </motion.div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 text-center md:ml-6"
            >
              <Link
                href="/Datasets"
                className="inline-flex items-center px-5 py-3 text-sm font-medium text-white transition duration-300 bg-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 dark:text-gray-700 dark:bg-white"
                aria-label="Dataset Portals Coming Soon"
                rel="noreferrer"
              >
                <span className="flex justify-center">Dataset Portals Coming Soon</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
  ref={imageRef}
  initial={{ opacity: 0, y: 30 }}
  animate={imageIsVisible ? 'animate' : 'initial'}
  variants={fadeInUp}  // ← Add this
  className="relative w-full py-10 mx-auto text-center md:py-32 md:my-12 md:w-10/12"
>
  <div className="relative z-10">
    <Link href="/" passHref legacyBehavior>
      <a target="_blank" rel="noreferrer" className="block">
        <img
          src="/images/data1.jpg"
          alt="MedLabel AI Dataset Portal Preview"
          className="transition duration-700 shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 hover:transform hover:scale-105"
          onError={(e) => {
            console.error("Image failed to load:", e.target.src);
            e.target.src = "/images/placeholder.jpg"; // Optional fallback
          }}
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

// Animated FeatureCard
function FeatureCard({ title, desc }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="text-center p-6 bg-gray-50 rounded-xl"
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </motion.div>
  );
}