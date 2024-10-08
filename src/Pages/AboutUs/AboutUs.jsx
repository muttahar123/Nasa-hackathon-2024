import './AboutUs.scss';
import { Nav, Footer } from '../../components/exportComponents';
import pixelArt1 from '../../assets/images/Thassia 1.svg';
import pixelArt2 from '../../assets/images/Ana 1.svg';
import pixelArt3 from '../../assets/images/pelizarinho 1.svg';
import pixelArt4 from '../../assets/images/show_3 1.svg';
import pixelArt5 from '../../assets/images/show 1.svg';
import pixelArt6 from '../../assets/images/show_4 1.svg';
import ourGoals from '../../assets/images/General/ABOUT US/OUR-GOALS.jpg';
import ourHistory from '../../assets/images/General/ABOUT US/OUR HISTORY.jpg';
import ourProjects from '../../assets/images/General/ABOUT US/OUR PROJECTS.jpg';
function AboutUs() {
  return (
    <>
      <Nav />
      <div className="gradient-container">
        <p className="title">About Us</p>
        <p className="subtitle">This is Climate Curators</p>
      </div>
      <div className="team-container">
        <p className="title"> A Journey Through Climate Change and Innovation</p>
        <div className="team-image">
          <figure>
            <img src={pixelArt1} alt="Thassia" />
            <figcaption>Muttahar </figcaption>
          </figure>
          <figure>
            <img src={pixelArt2} alt="Ana_Clara" />
            <figcaption>Eman</figcaption>
          </figure>
          <figure>
            <img src={pixelArt3} alt="Gabriel" />
            <figcaption>Shahood</figcaption>
          </figure>
          <figure>
            <img src={pixelArt4} alt="Vitória" />
            <figcaption>Suroosh</figcaption>
          </figure>
          <figure>
            <img src={pixelArt5} alt="João Pedro" />
            <figcaption>Faizan</figcaption>
          </figure>
          
        </div>
      </div>
      <div className="container">
        <div className="about-container">
          <div className="text-container">
            <h1 className="title">Our Project</h1>
            <h2 className="subtitle">How do we get started?</h2>
            <p className="text">
            In the face of a climate crisis that threatens our planet, a diverse team of passionate young individuals from CS students, Developer, designer, and environmentalists—has united with a singular purpose: to participate in NASA Space Apps 2024.Each member brings unique skills and perspectives shaped by their individual journeys across different states and disciplines. Together, we brainstorm innovative solutions to combat climate change, drawing inspiration from both science and creativity.
            </p>
          </div>
          <img src={ourHistory} alt="" />
        </div>
        <p className="final-text">
          Together, earth science and computer science students seek to develop
          solutions to reduce global warming.
        </p>
      </div>
      <div className="container">
        <div className="about-container">
          <img src={ourProjects} alt="" height="350px" />
          <div
            className="text-container"
            style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}
          >
            <h1 className="title">Our Projects</h1>
            <h2 className="subtitle">How can we change the world?</h2>
            <p className="text">
              - Intuitive heat-related hazard prediction map;
            </p>
            <p className="text">
              - Individual and governmental guidance for mitigating the impacts
              of global warming;
            </p>
          </div>
        </div>
        <p className="final-text">
          - Interactive and fun game to create an awareness of how each action
          influences global warming;
        </p>
        <p className="final-text">
          - Community where people can share their actions and see what other
          people are doing to reduce global warming.
        </p>
      </div>
      <div className="container">
        <div className="about-container">
          <div className="text-container">
            <h1 className="title">Our Goals</h1>
            <h2 className="subtitle">How do we get started?</h2>
            <p className="text">
              Using historical and real-time data about environmental and human
              factors in order to make predictions and heat stress risk
              warnings;
            </p>
            <p className="text">
              Provide information in a simple and understandable way, raising
              awareness around the world and creating a sense of conscious
              community engaged in changing the world.
            </p>
          </div>
          <img src={ourGoals} alt="" />
        </div>
        <p className="final-text">
          Accessibly raise awareness of the risks and impacts of global warming,
          as well as actions that can be taken individually or governmentally to
          combat climate change, informing people how we can make a difference
          together.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default AboutUs;
