import React from "react";
// import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/Logo.png";
// import user from "../../../assets/user.png";
import "./people-style.css";
import Navigation_Entities from "../../../Components/Navigation/Navigation_Entities";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Person from "../../../Components/Person/person";
import personData from "./data.json";

function People() {
    // const To_dashboard = useNavigate();
    // const navigateTo_dashboard = () => {
    //     To_dashboard("/dashboard");
    // };

    // const To_standards = useNavigate();
    // const navigateTo_standards = () => {
    //     To_standards("/standards");
    // };

    // const To_EvidenceTasks = useNavigate();
    // const navigateTo_EvidenceTasks = () => {
    //     To_EvidenceTasks("/EvidenceTasks");
    // };

    // const To_People = useNavigate();
    // const navigateTo_People = () => {
    //     To_People("/People");
    // };

    // const To_Policy = useNavigate();
    // const navigateTo_Policy = () => {
    //     To_Policy("/Policy");
    // };

    // const To_Settings = useNavigate();
    // const navigateTo_Settings = () => {
    //     To_Settings("/Settings");
    // };

    // const To_SignUp = useNavigate();
    // const handleLogout = () => {
    //     // Handle your logout logic here
    //     To_SignUp("/SignUp");
    // };

    return (
        <div className="dashboard-container">
            <div className="dashboard-left-pane">
                <div>
                    <img className="dashboard-logo-img" src={Logo} alt="Logo" />
                </div>

                <Navigation_Entities />
            </div>

            <div className="dashboard-right-pane">
                <div className="text">
                    <h1 className="people-heading">People</h1>
                </div>

                <div className="people-list-pane">
                    <div className="people-list">



                        {personData.map((person, index) => (
                            <Person key={index} personData={person} />
                        ))}

                        {/* <div className="person-info person-info-active">
              <div className="person-image-pane">
                <img className="person-image" src={user} alt="" />
              </div>

              <div className="person-nameInfo">
                <div className="person-name">Abdullah Shahzad</div>

                <div className="person-role">Super Admin</div>
              </div>

              <div className="person-projectCountInfo">
                <div className="project-count">578</div>

                <div className="project-countInfo">Projects</div>
              </div>

              <div className="person-nameInfo">
                <div className="finished-project-count">69</div>

                <div className="finished-projectCountInfo">
                  Fineshed Projects
                </div>
              </div>
            </div>

            <div className="person-info">
              <div className="person-image-pane">
                <img className="person-image" src={user} alt="" />
              </div>

              <div className="person-nameInfo">
                <div className="person-name">Usman Baig</div>

                <div className="person-role">Admin</div>
              </div>

              <div className="person-projectCountInfo">
                <div className="project-count">300</div>

                <div className="project-countInfo">Projects</div>
              </div>

              <div className="person-finishedProjectCountInfo">
                <div className="finished-project-count">241</div>

                <div className="finished-projectCountInfo">
                  Fineshed Projects
                </div>
              </div>
            </div>

            <div className="person-info">
              <div className="person-image-pane">
                <img className="person-image" src={user} alt="" />
              </div>

              <div className="person-nameInfo">
                <div className="person-name">Sahil Parkash</div>

                <div className="person-role">Team Member</div>
              </div>

              <div className="person-projectCountInfo">
                <div className="project-count">1980</div>

                <div className="project-countInfo">Projects</div>
              </div>

              <div className="person-finishedProjectCountInfo">
                <div className="finished-project-count">348</div>

                <div className="finished-projectCountInfo">
                  Fineshed Projects
                </div>
              </div>
            </div>

            <div className="person-info">
              <div className="person-image-pane">
                <img className="person-image" src={user} alt="" />
              </div>

              <div className="person-nameInfo">
                <div className="person-name">Jhon Doe</div>

                <div className="person-role">Team Member</div>
              </div>

              <div className="person-projectCountInfo">
                <div className="project-count">510</div>

                <div className="project-countInfo">Projects</div>
              </div>

              <div className="person-finishedProjectCountInfo">
                <div className="finished-project-count">32</div>

                <div className="finished-projectCountInfo">
                  Fineshed Projects
                </div>
              </div>
            </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default People;
