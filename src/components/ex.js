import React from "react";
import alex from "../assets/team22/alex.jpeg";
import andrew from "../assets/team22/andrew.jpeg";
import { NavLink } from "react-router-dom";

const Ex = props => (
  <div className="example">
    <div className="blog-card">
      <div className="meta">
        <div className="photo" style={{ backgroundImage: `url(${andrew})` }} />
        <ul className="details">
          <li className="author">Prof Githu Muchiri</li>
          <li className="date">Director</li>
          <li className="tags">
            <ul>
              <li>MKU</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="description">
        <h1>A vision to follow</h1>
        <h2>Evolving a brand-name takes years of nurturing</h2>
        <p>
          {" "}
          Evolving a brand-name takes years of nurturing, hard work and passion.
          MKU, which started its journey in 2015, has brought in the
          culture of innovation among its students.{" "}
        </p>
        <p className="read-more">
          <NavLink to="/message/director" exact className="activeclass">
            Read More..
          </NavLink>
        </p>
      </div>
    </div>
    <div className="blog-card alt">
      <div className="meta">
        <div className="photo" style={{ backgroundImage: `url(${alex})` }} />
        <ul className="details">
          <li className="author">Dr. John Arop</li>
          <li className="date">Training and Placement Officer</li>
          <li className="tags">
            <ul>
              <li>MKU</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="description">
        <h1>Exploring the skies</h1>
        <h2>The Training and Placement cell </h2>
        <p>
          The Training and Placement cell of  MKU 
          is an integral part of the academics It helps in
          shaping the careers of our students in the field of Information
          Technology.{" "}
        </p>
        <p className="read-more">
          <NavLink to="/message/tpo" exact className="activeclass">
            Read More..
          </NavLink>
        </p>
      </div>
    </div>
  </div>
);

export default Ex;
