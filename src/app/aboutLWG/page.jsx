import React from 'react'

const AboutLWG = () => {
  return (
    <section className="bg-white py-20 sm:py-20 md:py-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-black mb-4 text-center py-10 underline">About LWG</h1>
        <p className="text-lg mb-4">
          Leather Working Group is a not-for-profit Organization responsible for
          the world's leading environmental certification for the leather
          manufacturing industry.
        </p>
        <p className="text-lg mb-4">
          As a multi-stakeholder group, LWG boasts over 1300 members from across
          the leather supply chain.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Scope of Audit</h2>
        <h3 className="text-xl font-bold mb-2">Purpose of Audit:</h3>
        <p className="text-lg mb-4">
          Evaluate the environmental performance of tannery operations.
        </p>
        <h3 className="text-xl font-bold mb-2">Scope:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            Operations undertaken in any given site, but includes if any
            operations are subcontracted-out.
          </li>
          <li>Full range of tannery operations.</li>
          <li>
            Includes effluent treatment even if performed in a different
            location.
          </li>
          <li>
            Includes maintenance, technical, and administrative activities.
          </li>
          <li>
            Excludes residential aspects (like dormitories, canteen, etc.).
          </li>
          <li>
            12 months' operations (most recent but last of which should not be
            more than 3 months). If it is 6-months operational data for a newly
            built tannery, certification will be valid for one year.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Audit Process</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            LWG audits can be conducted by any LWG Approved auditors – there are
            12 auditors around the world. Another auditor is under training.
          </li>
          <li>LWG auditors work independently and as employees of LWG.</li>
          <li>2 / 3 man-days per site.</li>
          <li>
            Multi-site audits: Each permit is considered as separate sites and
            hence separate audits, because each permit can have independent
            legal consequences.
          </li>
          <li>
            Audit reports are peer-reviewed by another LWG auditor before
            issuing certificate.
          </li>
          <li>Validity of certification: 24 months.</li>
          <li>Listing in LWG website is voluntary.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Benefits of LWG Audit</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            A mechanism that supports the promotion of continual improvement in
            environmental performance.
          </li>
          <li>Acceptance to buyers.</li>
          <li>Improved environmental performance.</li>
          <li>Better image of the company.</li>
          <li>Reduced water consumption.</li>
          <li>Reduced energy consumption.</li>
          <li>Reduced wastage of chromium and other chemicals.</li>
          <li>Reduced occupational risk and reduced health hazards.</li>
          <li>
            A management system to handle restricted substances, improve
            environmental performance.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">
          Measures Adopted by the Tannery
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            Re-engineering recipe for leather manufacturing – focus to reduce
            water and improve chemical uptake.
          </li>
          <li>Training to shop floor employees.</li>
          <li>Training to employees on Environmental Management System.</li>
          <li>Safety awareness training, training on the use of PPEs.</li>
          <li>Water flow meters in each of drums.</li>
          <li>
            Installation of active guards for all drive parts in all machines.
          </li>
          <li>
            Optimizing machine operations particularly in finishing to reduce
            energy.
          </li>
          <li>5S - Good housekeeping measures.</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutLWG