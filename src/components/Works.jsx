import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useState } from "react";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  images,
  source_code_link,
  onOpen,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} onClick={onOpen}
    className="cursor-pointer">
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className='bg-tertiary p-5 rounded-2xl sm:w-90 w-full'
      >
        <div className='relative w-full h-57.5'>
          <img
            src={images[0]}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={(e) => {e.stopPropagation();window.open(source_code_link, "_blank");}}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  console.log(project);
  const [currentImage, setCurrentImage] = useState(0);

  const previous = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const next = () => {
    setCurrentImage((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl z-10"
        >
          ✕
        </button>

        <img
          src={project.images[currentImage]}
          alt={project.name}
          className="w-full rounded-xl max-h-[80vh] object-contain"
        />

        {project.images.length > 1 && (
          <>
            <button
              onClick={previous}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-12 h-12 rounded-full"
            >
              ←
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-12 h-12 rounded-full"
            >
              →
            </button>
          </>
        )}

        <div className="flex justify-center gap-2 mt-4">
          {project.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentImage
                  ? "bg-white"
                  : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Mon travail
        </p>
        <h2 className={styles.sectionHeadText}>
          Projets.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-7.5"
        >
          Les projets suivants mettent en valeur mes compétences et mon expérience à travers des exemples concrets de mon travail.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            onOpen={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default SectionWrapper(Works, "");
