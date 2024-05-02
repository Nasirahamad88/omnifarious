import Link from 'next/link';
import React from 'react'


const OngoingProject = () => {
    return (
      <section className="bg-white text-black">
        <div className="w-[80%] mx-auto">
          <h2 className="text-3xl font-bold text-center max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8 text-gray-900 sm:text-4xl">
            Ongoing Projects/Assignments
          </h2>
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl  ">
                Click to open this one and close others
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
          </div>
        </div>
        <Link href="/completedProjects">
          <h2 className="font-bold border rounded-lg py-2 px-2 mt-10 text-center w-[90%] sm:w-[25%] mx-auto text-indigo-950 bg-green-800 text-2xl">
            Completed Projects
          </h2>
        </Link>
       
      </section>
    );
}

export default OngoingProject;