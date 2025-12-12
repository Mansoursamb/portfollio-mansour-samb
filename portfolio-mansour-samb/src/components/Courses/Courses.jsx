import React, { useState } from "react";
import { courses } from "../../assets/assets";
import "./Courses.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CircularProgress from "../CirculaProgress/CircularProgress";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";

export const Courses = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="courses" id="courses">
      <h2>Mes Compétences</h2>
      <p>Les projets et Cours que j'ai suivi</p>

      <div className="swiper-container">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            200: { slidesPerView: 1, spaceBetween: 0 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          className="courses-swiper"
        >
          {courses.map((project) => {
            const ProjectIcon = project.courses[0]?.icon;
            return (
              <SwiperSlide key={project.id} className="course-slide">
                <article className="course-card">
                  {ProjectIcon && (
                    <div className="course-icon-wrapper">
                      <ProjectIcon className="course-icon" />
                    </div>
                  )}
                  <h3 className="course-title">{project.projectTitle}</h3>
                  <p className="course-count">{project.courses.length} cours</p>
                  <button
                    className="btn-detail"
                    onClick={() => setSelectedProject(project)}
                  >
                    Voir détails
                  </button>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
            <h3>{selectedProject.projectTitle}</h3>
            <div className="courses-detail-list">
              {selectedProject.courses.map((course, idx) => (
                <div key={idx} className="course-detail-item">
                  <div className="detail-header">
                    <p className="course-name">{course.name}</p>
                    <span className="course-duration">{course.duration}</span>
                  </div>
                  <p className="course-description">{course.description}</p>
                  <CircularProgress completion={course.completion} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default Courses;
