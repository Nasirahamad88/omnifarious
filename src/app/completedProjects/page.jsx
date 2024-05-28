import React from "react";
import AllLogo from "../Component/AllLogo";

const projects = [
  {
    title: "LA-MUNI APPARELS LTD. (MAKSONS GROUP)",
    entity:
      "Structural and Electrical Consultancy Services including DEA, SLD, ELD etc. as per Nirapon",
  },
  {
    title: "GARDENIA WEARS LTD. (MAKSONS GROUP)",
    entity:
      "Consultancy of Fire Separation for Steel Structure as per RSC Environmental Impact Assessment",
  },
  {
    title: "MITHELA TEXTILE IND. LTD.",
    entity: "Environmental Impact Assessment Fire Safety Consultant",
  },
  {
    title: "DISHANG SWEATER LTD.",
    entity: "Electrical Safety Assessment Fire Safety Assessment Structural Safety Assessment ",
  },
  {
    title: "AXIS KNITWEAR LTD.AXIS VILLAGE LTD. ",
    entity: "Electrical Consultanct Lightning Protection System (LPS) ",
  },
  {
    title: "SALMA TANNERY LTD.",
    entity: "Electrical Assessment Single Line Diagram (SLD)Electrical Testing Services Environmental Impact Assessment Machine Calibration ",
  },
];

const CompletedProjects = () => {
  return (
    <div>
      <section className="bg-white text-black py-20">
        <div className="w-[80%] mx-auto">
          <h2 className="text-3xl font-bold text-center max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8 text-gray-900 sm:text-4xl">
            Completed Projects
          </h2>
          <div className="join join-vertical w-full">
            {projects.map((project, index) => (
              <div
                key={index}
                className="collapse collapse-arrow join-item border border-base-300"
              >
                <input
                  type="radio"
                  name="my-accordion-4"
                  defaultChecked={index === 0}
                />
                <div className="collapse-title text-xl  ">{project.title}</div>
                <div className="collapse-content">
                  <p>{project.entity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <AllLogo/> */}
      </section>
    </div>
  );
};

export default CompletedProjects;
