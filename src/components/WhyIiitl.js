import React from "react";
import { Link } from "react-router-dom";

const Why = (props) => {
  return (
    <div className="whyus-o-container">
      <div className="whyus-container">
        <h1 className="whyus-h1">Why Recruit at MKU?</h1>
        <p>
          <strong>MKU , THIKA</strong> encourages its students to balance
          their academics and co-curricular activities. This allows for an
          all-round development, as evidenced by the numerous projects
          undertaken and the participation in sports and cultural events.
        </p>
        <p>
          The institute also encourages the students to showcase their research
          in national conferences and workshops. The students work as Teaching
          Assistants, guiding and aiding the students in the batches that are
          junior to them.
        </p>
        <h2>The Academic Program</h2>
        <p>The campus offers B.Tech and M.Tech programs.</p>
        <p>
          The Courses are finely refined and fabricated to meet the needs of the
          versatile industry and latest research areas. The highly qualified,
          intellectual and technically proficient faculty at MKU fuel
          the learning process in turn igniting the minds.
        </p>
        <p>
          Click <Link to="/courses">here</Link> to see the course structure.
        </p>
        <h2>Admission Criteria</h2>
        <p>
          B.Tech Entrance at MKU is based on KCSE score. Students who have
           attained a MEAN grade of C+ and above are eligible to join us.{" "}
        </p>
        <p>
          Admissions to M.Tech program is made through a review by the
           university senate of the students' willingness and performance in the B. Tech.
        </p>
        <p>
          These students are enriched with both qualitative and quantitative
          skills, thus they make up for the best in class.
        </p>
        <h2>Our Placements and Internships</h2>
        <p>
          The campus has opened doors for various internships which include
          2-months summer internships and 6 months internships for pre-final and
          final year students respectively.
        </p>
        <h2>Faculty</h2>
        <p>
          Our faculty can be compared favorably with the best in the country.
          All regular faculty members of the MKU, hold Ph.D. and have
          good teaching skills.
        </p>
        <p>
          Our faculty have published various national and international journals
          and conference proceedings and organized several workshops.
        </p>
        <p>
          Our focus on recruiting world-class faculty and strong research
          programs bodes well for the future of the institute, which is fast
          emerging as one of the best in the country and also making its
          presence felt.
        </p>
        <h2>Projects</h2>
        <p>
          Projects are an integral part of the education program. Students are
          required to do group projects/research in many courses that they are
          taught. Students are also provided with an option of the independent
          study which enables them to do research in the field of their
          interest.
        </p>
        <h2>Coders At Work</h2>
        <p>
          Our students take part in many renowned programming competitions like{" "}
          <strong>HACKATHONS</strong> and <strong>Google solutions challenge</strong>.
        </p>
        <p>
          And our students are honing their skills on websites like Microsoft Learn,
          CodeCamp, W3 Schools etc. in various languages.
        </p>
      </div>
    </div>
  );
};

export default Why;
