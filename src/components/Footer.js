import React from "react";
import { Link } from "react-router-dom";
import prospectus from "../assets/Mount-Kenya-University-Prospectus-2023.pdf";
import jnf from "../assets/JNF 2022-23 IIIT Lucknow.docx";
import james from "../assets/team22/james.jpeg";
import anu from "../assets/team22/anu.jpg";

const footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-outer-wrapper">
          <div className="footer-inner-wrapper">
            <div className="footer-col">
              <h2>Contact Us</h2>
              <p>
                MKU ICT
                <br />
                KIAMBU
                <br />
                THIKA
              </p>
              <p>
                <a href="mailto:musyokajames430@gmail.com">
                musyokajames430@gmail.com
                </a>
              </p>
            </div>
            <div className="footer-col-parent">
              <a href="https://www.linkedin.com/in/james-musyoka-b33944225/" target="_blank">
                <img src={james} alt={"james"} className="footer-img"/>
              </a>
              <div className="footer-col">
                <p className="footer-contact-name">JAMES MUSYOKA</p>
                <p className="footer-contact-position">Overall Placement Coordinator</p>
                <p>
                  <a href="tel:+91-8094123615">+254 714 427 473</a>
                </p>
                <p> 
                  <a href="mailto:placements@mku.ac.ke">
                    placements@mku.ac.ke
                  </a>
                </p>
              </div>
            </div>
            <div className="footer-col-parent">
              <a href="https://www.linkedin.com/in/anu-kumari-401464197/" target="_blank" rel="noopener noreferrer">
              <img src={anu} alt={"anu"} className="footer-img"/>
              </a>
              <div className="footer-col">
                <p className="footer-contact-name">Ann Kimani</p>
                <p className="footer-contact-position">Placement Executive</p>
                <p>
                  <a href="tel:2547324121272">+2547324121272</a>
                </p>
                <p> 
                  <a href="mailto:placements@mku.ac.ke">
                    placements@mku.ac.ke
                  </a>
                </p>
              </div>
            </div>
            <div className="footer-col">
              <h2>Links</h2>
              <p>
                <a
                  href="https://www.myjobsinkenya.com/"
                  target="none"
                >
                  National Career Service
                </a>
              </p>
              <p>
                <a href={prospectus} target="blank">
                  Prospectus
                </a>
              </p>
              <p>
                <a href={jnf} target="blank">
                  Job Notification form
                </a>
              </p>
              <p>
                <Link to="/courses">Academics</Link>
              </p>
              <p>
                <Link to="/facilities">Facilities</Link>
              </p>
              <p>
                <Link to="/alumni-speaks">Alumni Speaks</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>
          ALL RIGHTS RESERVED © 2023. <strong>MKU THIKA.</strong> (Developed
          & Managed By -{" "}
          <a href="https://www.linkedin.com/in/james-musyoka-b33944225/" target="none">
            JAMES
          </a>
          , {" "}
           <a
            href="https://www.linkedin.com/in/narendra-singh-139b5219a/"
            target="none"
          >
            MUSYOKA 
          </a>, {" "}
           <a
            href="https://www.linkedin.com/in/harshdeep-061661193/x"
            target="none"
          >
            JOHN
          </a>
          ,{"  "}
          <a href="https://www.linkedin.com/in/vinamrbajaj/" target="none">
            ANN
          </a>
          , {" "}
          <a href="https://www.linkedin.com/in/rktejesh/" target="none">
            WINNIE
          </a>
          )
        </p>
      </div>
    </footer>
  );
};

export default footer;
