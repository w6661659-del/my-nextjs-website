'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// =======================
// SectionHeader Component (Dark Mode Ready)
// =======================
const SectionHeader = ({ headerInfo }) => {
  const { title, subtitle, description } = headerInfo;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.1 }}
      viewport={{ once: true }}
      className="animate_top mx-auto text-center"
    >
      <div className="mb-4 inline-block rounded-full bg-zumthor px-4.5 py-1.5 
                      dark:bg-gray-800 dark:border dark:border-gray-700"
      >
        <span className="text-sectiontitle font-medium text-black dark:text-white">
          {title}
        </span>
      </div>
      <h2 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white 
                    md:w-4/5 xl:w-1/2 xl:text-sectiontitle3"
      >
        {subtitle}
      </h2>
      <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%] 
                    text-gray-600 dark:text-gray-300"
      >
        {description}
      </p>
    </motion.div>
  );
};

// ===================
// Feature Data
// ===================
const featuresData = [
  {
    id: 1,
    icon: '/images/icon/icon-01.svg',
    title: 'Public Datasets Lack Clinical Fidelity',
    description:
      'Publicly available imaging datasets are often small, outdated, or lack the diversity and clinical context needed for robust, generalizable AI models.',
  },
  {
    id: 2,
    icon: '/images/icon/icon-02.svg',
    title: 'Manual Labeling Doesn’t Scale',
    description:
      'Traditional annotation relies on costly, slow human labeling—creating bottlenecks that delay AI development and inflate burn without guaranteeing consistency.',
  },
  {
    id: 3,
    icon: '/images/icon/icon-03.svg',
    title: 'Data Sourcing Often Lacks Compliance',
    description:
      'Many datasets are collected without proper consent or regulatory safeguards, making them unusable in HIPAA, GDPR, or PIPEDA-regulated environments.',
  },
  {
    id: 4,
    icon: '/images/icon/icon-04.svg',
    title: 'High-Fidelity Automation, Not Guesswork',
    description:
      'We use state-of-the-art AI (94.3% Dice score segmentation) to generate consistent, anatomically precise labels—no gig workers, no variability, just reproducible quality at scale.',
  },
  {
    id: 5,
    icon: '/images/icon/icon-05.svg',
    title: 'Ethically Sourced from Private Clinics',
    description:
      'We partner with clinics to ethically acquire historical and future MRI data—offering fair compensation, full transparency, and zero operational burden.',
  },
  {
    id: 6,
    icon: '/images/icon/icon-06.svg',
    title: 'Built for Regulatory Compliance',
    description:
      'Our end-to-end pipeline is designed from the ground up for HIPAA, GDPR, and PIPEDA—ensuring every dataset is pixel-safe, audit-logged, and ready for global licensing.',
  },
];

// =======================
// Single Feature Component (Dark Mode Enhanced)
// =======================
const SingleFeature = ({ feature }) => {
  const { icon, title, description } = feature;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="rounded-lg border border-gray-200 bg-white p-7.5 shadow-solid-3 
                 transition-all hover:shadow-solid-4 
                 dark:border-gray-700 dark:bg-gray-800 dark:text-white 
                 md:p-10"
    >
      <div className="relative flex h-16 w-16 items-center justify-center rounded-md 
                      bg-primary text-white"
      >
        <Image src={icon} width={36} height={36} alt={title} />
      </div>
      <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </motion.div>
  );
};

// =======================
// Main Featurestwo Component
// =======================
const Featurestwo = () => {
  return (
    <section id="features" className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* Section Header */}
        <SectionHeader
          headerInfo={{
            title: 'AI CAN\'T WORK WITHOUT TRUSTWORTHY DATA',
            subtitle: 'We Deliver the Clinical-Grade Standard',
            description:
              'Most medical AI fails in real-world deployment due to poor data quality. At MedLabel, we address this at the source—by partnering directly with private imaging clinics to acquire real-world MRI data and transform it into automated, de-identified, and globally compliant datasets, ready to train the next generation of AI diagnostics.',
          }}
        />

        {/* Features Grid */}
        <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
          {featuresData.map((feature) => (
            <SingleFeature feature={feature} key={feature.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featurestwo;