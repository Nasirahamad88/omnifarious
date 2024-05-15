import React from 'react'

const TrainingPage = () => {
  return (
    <section className="bg-white py-20 ">
      <div className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8 underline py-10">
            Empower Your Team with Omni Training & Facilitation
          </h1>
          <p className="text-lg mb-8">
            Omni’s tailored training and facilitation solutions are crafted to
            empower your team with the latest tools, strategies, and insights,
            ensuring they thrive amidst evolving client needs and industry
            demands.
          </p>
          <h2 className="text-xl font-bold text-center mb-8 underline">
            Key Features of Our Training and Facilitation Services:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">
                Customized Curriculum Development
              </h2>
              <p className="text-gray-700 mb-4">
                We work closely with your firm to develop tailored training
                modules that address your unique needs and challenges.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">
                Interactive Learning Methodologies
              </h2>
              <p className="text-gray-700 mb-4">
                Our training sessions blend diverse learning methodologies,
                including case studies, role-plays, and simulations, to enhance
                engagement and knowledge retention.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">
                Seasoned Facilitation Expertise
              </h2>
              <p className="text-gray-700 mb-4">
                Our facilitators bring extensive experience across industries
                and domains, ensuring smooth facilitation of complex discussions
                and decision-making processes.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">
                Follow-up Support and Evaluation
              </h2>
              <p className="text-gray-700 mb-4">
                Beyond the training room, we provide follow-up support and
                evaluation to reinforce learning outcomes and drive continuous
                improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrainingPage