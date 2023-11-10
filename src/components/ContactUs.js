import React from "react";
import Card from "./Card";
import james from "../assets/team22/james.jpeg";
import alex from "../assets/team22/alex.jpeg";
import andrew from "../assets/team22/andrew.jpeg";
import sylvia from "../assets/team22/sylvia.jpeg";
import timothy from "../assets/team22/timo.jpg";
import rachael from "../assets/team22/rachael.jpg";
import maingi from "../assets/team22/maingi.jpg";
import Ishan from "../assets/team22/ishan.jpg";
const contactUs = () => {
  return (
    <React.Fragment>
      <div className="contact-outer" style={{ backgroundColor: "white" }}>
        <div className="placement-team">
          <h1 className="placement-team-heading">The Team</h1>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={alex}
                alt="Dr. Alex Mwangi"
                name="Dr. Alex Mwangi"
                isTeacher={false}
                position="Training and Placements Officer"
                email="placements@mku.ac.ke, tpo@mku.ac.ke"
                linkedin="https://www.linkedin.com/in/waweru-mwangi-8994a9231/"
                islinkedin={true}                
                isPhone={false}
                isEmail={true}
              />
              <Card
                src={james}
                alt="James Musyoka"
                name="James Musyoka"
                isTeacher={false}
                position="Overall Coordinator"
                email="placements@mku.ac.ke "
                phone="0714427473"
                linkedin="https://www.linkedin.com/in/james-musyoka-b33944225/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={andrew}
                alt="Andrew Mbugua"
                name="Andrew Mbugua"
                isTeacher={false}
                position="B.tech Coordinator"
                email="placements@mku.ac.ke "
                phone="0714427473"
                linkedin="https://www.linkedin.com/in/andrew-mbugua-04a575237/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={sylvia}
                alt="Sylvia Kalunde"
                name="Sylvia Kalunde"
                isTeacher={false}
                position="B.tech Coordinator"
                email="placements@mku.ac.ke "
                phone="0714427473"
                linkedin="https://www.linkedin.com/in/sylvia-kalunde-mutavuta/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={timothy}
                alt="Timothy Kariuki"
                name="Timothy Kariuki"
                isTeacher={false}
                position="Head of Department"
                email="placements@mku.ac.ke "
                phone="0714427473"
                linkedin="https://www.linkedin.com/in/timothy-kariuki-3t6s/"
                islinkedin={true}
                isPhone={true}
                isEmail={false}
              />
              <Card
                src={rachael}
                alt="Rachael Muga"
                name="Rachael Muga"
                isTeacher={false}
                position="Alumni Services"
                email="placements@mku.ac.ke "
                phone="0714427473"
                linkedin="https://www.linkedin.com/in/rachael-muga-92329b227/"
                islinkedin={true}
                isPhone={true}
                isEmail={false}
              />
              <Card
                src={maingi}
                alt="Alex Maingi"
                name="Alex Maingi"
                isTeacher={false}
                position="Alumni Services"
                email="placements@mku.ac.ke "
                phone="0714427473"
                linkedin="https://www.linkedin.com/in/alex-maingi-757a16233/"
                islinkedin={true}
                isPhone={true}
                isEmail={false}
              />
              <Card
                src={Ishan}
                alt="James Musyoka"
                name="James Musyoka"
                isTeacher={false}
                position="B.tech Coordinator"
                email="placements@mku.ac.ke "
                phone="0714427473"
                linkedin="https://www.linkedin.com/in/james-musyoka-b33944225/"
                islinkedin={true}
                isPhone={true}
                isEmail={false}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default contactUs;
