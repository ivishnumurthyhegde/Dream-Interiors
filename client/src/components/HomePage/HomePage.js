import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../Context/AuthContext/AuthContext";

function HomePage() {
  const { token}=useContext(authContext);
  return (
    <>
      <div className="home-body">
        <div className="entry">
          <div className="overlay"></div>
          <div className="text">
            <div className="small-text">THE CHOICE AROUND THE WORLD</div>
            <div className="big-text1">
              Innovative <span>Modern</span>
            </div>
            <div className="big-text2">Design & Works</div>
            <div className="desc-entry">
              The final design package as per latest approval and client dreams
              and art work requirements to acceptance.
            </div>
            <div className="buttons-entry">



            {token && <Link to='/profile'> <button class="button-52" role="button">
                Get Started
              </button></Link>}
              {
                !token &&  <Link to='/register'> <button class="button-52" role="button">
                Get Started
              </button></Link>
              }

              <a href="#services">
              <button class="button-53" role="button">
                Know More
              </button>
              </a>
            </div>
          </div>
        </div>

        <div className="planning"></div>
        <div className="services-main" id="services">
          <div className="service-heading">
            Servi<span>ces</span>
          </div>
          <div className="serv-cont">
            <div className="data-card">
              <div className="card">
                <div className="data">
                  <div className="heading-card">Concept Development</div>
                  <div className="detail">
                    The concepts are developed in phases, from formless idea to
                    precise message in an appropriate form with supportive
                    visuals and content.
                  </div>
                </div>
              </div>
            </div>

            <div className="data-card">
              <div className="card">
                <div className="data">
                  <div className="heading-card">
                    Furniture and Fixture Selection
                  </div>
                  <div className="detail">
                    Furniture includes chairs, tables, desks, sofas, beds, and
                    cabinets. Fixtures such as lighting fixtures, plumbing
                    fixtures, and built-in cabinetry are permanently attached to
                    a building.
                  </div>
                </div>
              </div>
            </div>

            <div className="data-card">
              <div className="card">
                <div className="data">
                  <div className="heading-card">Customization and Millwork</div>
                  <div className="detail">
                    It is a building material made at a factory or mill.
                    Interior trim, doors, shelving, stair treads, and mantels
                    are considered millwork. Moulding and flooring are usually
                    produced in mills as well.
                  </div>
                </div>
              </div>
            </div>

            <div className="data-card">
              <div className="card">
                <div className="data">
                  <div className="heading-card">Renovation and Remodeling</div>
                  <div className="detail">
                    What does remodeling do? Think of it like this: Renovation
                    consists of making something old look and feel new, while
                    remodeling consists of making something new out of something
                    old. The difference comes down to your goal for your project
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
          {token && <Link to='/profile'> <button class="button-53" role="button">
                Book Services
              </button></Link>}
              {
                !token &&  <Link to='/register'> <button class="button-53" role="button">
                Book Services
              </button></Link>
              }
         
          </div>
        </div>

        <div className="growth"></div>
        <div className="contact"></div>
      </div>
    </>
  );
}

export default HomePage;
