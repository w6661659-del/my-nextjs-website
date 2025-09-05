import Link from "next/link";

export default function Features() {
  return (
    <section id="features" className="py-12">
      <div className="max-w-xl px-4 py-12 mx-auto sm:px-6 lg:max-w-6xl lg:px-8">
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center text-gray-800 md:leading-tight md:tracking-normal dark:text-gray-200 md:text-4xl">
          How the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r
           dark:bg-gradient-to-r from-sky-600 to-sky-700 dark:from-rose-400 dark:via-fuchsia-400 dark:to-indigo-400">
            Ecosystem
          </span>{" "}
          and{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r 
          dark:bg-gradient-to-r from-sky-600 to-sky-700 dark:from-indigo-400 dark:via-fuchsia-400 dark:to-rose-400">
            Company
          </span>{" "}
          operates.
          
        </h1>
        <p className="max-w-md mx-auto mb-10 text-lg text-gray-800 dark:text-gray-400 md:text-lg">
      
        MedLabel AI partners with clinic's to de-identify historical imaging data, make the imaging data globally complaint, annotate the data with expert radiologists and license it to medical AI startups. We handle compliance, infrastructure, and labeling—enabling clinic's to securely share in the revenue while advancing trustworthy AI innovation.
        </p>
      
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="mb-10 space-y-6">
          <h1 className="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r
           dark:bg-gradient-to-r from-sky-700 to-blue-700 dark:from-rose-400 dark:via-fuchsia-400 dark:to-indigo-400
            md:text-2xl sm:text-left"> Our Story: Why We Exist
            </h1>
            <div className="h-auto">
      
                <img
                  className="transition duration-700 rounded shadow-2xl h-80 hover:shadow-3xl md:hover:transform md:hover:scale-105"
                  src="/images/ca15.jpg"
                  alt="Placeholder for Next.js"
                />
  
            </div>
            <div className="mx-2 font-normal text-gray-700 dark:text-gray-400 text-md">
              <ul className="mr-0 md:mr-10">
                <li className="mb-2">
                  <span className="font-semibold">Medical AI has transformative potential
                     — but it's only as good as the data it's trained on. </span>  
                     <p> Today, most AI models fail in clinical deployment because they're built on:</p>
<p>- Public datasets that are small, outdated, or poorly annotated</p>
<p>- Gig-worker labeling that lacks clinical nuance</p>
<p>- Data scraped without proper compliance </p>
                </li>
                <li className="mb-2">
                  <span className="font-semibold">We founded MedLabel AI to solve this bottleneck. By partnering with private clinic's and board-certified radiologists, we're creating the foundation for trustworthy medical AI
                     — ethically sourced, expert-validated, and globally compliant.</span>
                
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-10 space-y-6">
          <h1 className="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r
           dark:bg-gradient-to-r from-sky-700 to-blue-700 dark:from-rose-400 dark:via-fuchsia-400 dark:to-indigo-400
            md:text-2xl sm:text-left"> For Investors: Why MedLabel AI?
            </h1>
            <div className="h-auto">

                <img
                  className="transition duration-700 rounded shadow-2xl h-80 hover:shadow-3xl md:hover:transform md:hover:scale-105"
                  src="/images/ca5.jpg"
                  alt="Placeholder for TailwindCSS JIT"
                />
             
            </div>
            <div className="mx-2 font-normal text-gray-700 dark:text-gray-400 text-md">
              <ul className="mr-0 md:mr-10">
                <li className="mb-2">
                <span className="font-semibold">MedLabel AI is building the foundational data layer for Global Medical AI. </span> 

                <span className="font-semibold">Why Invest?</span>
<p>✅ Defensible moat: Radiologists + clinic partnerships + compliance  </p>
<p>✅ Canada advantage: Neutral, stable, PIPEDA/GDPR-compliant jurisdiction  </p>
<p>✅ Strategic for China: High-quality Western data without U.S. friction  </p>
<p>✅ Market timing: EU AI Act requires data provenance and bias audits  </p>
<p>✅ Recurring revenue: Initial license + monthly updates per dataset  </p>


                </li>
              </ul>
            </div>
          </div>
          <div className="mb-10 space-y-6">
          <h1 className="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r
           dark:bg-gradient-to-r from-sky-700 to-blue-700 dark:from-rose-400 dark:via-fuchsia-400 dark:to-indigo-400
            md:text-2xl sm:text-left">
            For Clinic's: Our Partnership Model
            </h1>
            <div className="h-auto">
            
                <img
                  className="transition duration-700 rounded shadow-2xl h-80 hover:shadow-3xl md:hover:transform md:hover:scale-105"
                  src="/images/ca3.jpg"
                  alt="Placeholder for Dark Mode"
                />
             
            </div>
            <div className="mx-2 font-normal text-gray-700 dark:text-gray-400 text-md">
              <ul className="mr-0 md:mr-10">
                <li className="mb-2">
                <span className="font-semibold">We partner with clinic's to ethically source de-identified historical imaging data
                   — transforming your archives into high-fidelity datasets
                    for AI training. 

How it works:</span>
<p>- We handle all compliance, de-identification, and labeling</p>
<p>- You earn revenue share up to 37% based on your contribution</p>
<p>- Zero operational burden — no additional work for your team</p>
<p>- Quarterly payments with full transparency</p>

<span className="font-semibold">Our Clinic Partners Gain:</span>
<p> ✅ New revenue stream from dormant imaging archives</p>
<p> ✅ Co-authorship opportunities on AI research papers</p>
<p> ✅ Access to cutting-edge AI tools developed using your data</p>
<p> ✅ Enhanced reputation as an innovator in medical AI</p>


                </li>
                
              </ul>
            </div>
          </div>
          <div className="mb-10 space-y-6">
            <h1 className="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r
           dark:bg-gradient-to-r from-sky-700 to-blue-700 dark:from-rose-400 dark:via-fuchsia-400 dark:to-indigo-400
            md:text-2xl sm:text-left">
            Why Canada? Our Strategic Advantage
            </h1>
            <div className="h-auto">

                <img
                  className="transition duration-700 rounded shadow-2xl h-80 hover:shadow-3xl md:hover:transform md:hover:scale-105"
                  src="/images/ca1.jpg"
                  alt="Placeholder for Next-SEO"
                />
            </div>
            <div className="mx-2 font-normal text-gray-700 dark:text-gray-400 text-md">
              <ul className="mr-0 md:mr-10">
                <li className="mb-2">
              <p><span className="font-semibold">MedLabel AI is proudly Canadian — and this is by design. </span></p>

              <p>Canada offers the perfect jurisdiction for global medical AI </p>
<p> ✅ PIPEDA compliance (Canada's federal privacy law)</p>
<p> ✅ BC PIPA alignment (one of North America's strongest provincial laws)</p>
<p> ✅ GDPR compatibility (recognized as "substantially similar")</p>
<p> ✅ Neutral position in U.S.-China tech tensions</p>
<p> ✅ Trusted jurisdiction for global partners</p>

<p>Unlike U.S.-based providers, 
we offer Chinese AI builders
 access to Western-quality data without geopolitical friction. 
 Unlike domestic Chinese providers, we deliver the clinical precision 
 and compliance required for global deployment.</p>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
