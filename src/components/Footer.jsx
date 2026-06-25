import { SectionWrapper } from "../hoc";
import { github, linkedin } from "../assets";

const github_link = "https://github.com/Yunostaa";
const linkedin_link = "https://www.linkedin.com/in/theo-cozic-48657ar/";

const Footer = () => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <p>Développé par Théo Cozic avec React - 2026</p>
      <div className='flex flex-row gap-4'>
      <div
        onClick={() => window.open(github_link, "_blank")}
        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
      >
        <img
          src={github}
          alt='lien github'
          className='w-1/2 h-1/2 object-contain'
        />
      </div>
      <div
        onClick={() => window.open(linkedin_link, "_blank")}
        className='dark-blue-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
      >
        <img
          src={linkedin}
          alt='lien linkedin'
          className='w-1/2 h-1/2 object-contain'
        />
      </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Footer);
