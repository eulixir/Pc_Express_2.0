import React from 'react';
import './styles/aboutUs.css';
import Navbar from '../../components/navbar/index';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';
import { ImEye, ImFlag } from 'react-icons/im';
import { FaHandshake } from 'react-icons/fa';
import gamesImage from '../../assets/games-image.png';

export default function aboutUs() {
  return (
    <div className="landingBackground">
      <div className="backgroundSmooth">
        <Navbar />
        <div className="aboutUsHeader">
          <div className="aboutUsHeaderTextContainer">
            <h2>We help you to build your dreams pc!</h2>
            <h5>
              We are a philanthropic company that seeks to provide the best cost
              benefit for anyone looking to assemble their computer, regardless
              of use
            </h5>
            <Link className="aboutUsLink" to="/">
              LEARN MORE
            </Link>
          </div>
        </div>
        <div className="mvvHeader">
          <span>MISSION, VISION AND VALUES</span>
        </div>
        <div className="mvvItensContainer">
          <div className="mvvItens">
            <ImFlag size={32} color={'#fff'} />
            <h5>Mission</h5>
            <span>
              Help those who need a machine and don't know where to start
            </span>
          </div>
          <div className="mvvItens">
            <ImEye size={32} color={'#fff'} />
            <h5>Vision</h5>
            <span>Be a reference in computer assembly consulting.</span>
          </div>
          <div className="mvvItens">
            <FaHandshake size={32} color={'#fff'} />
            <h5>Values</h5>
            <span>* Respect and Appreciation of people</span>
            <span>* Proactivity and Altruism</span>
            <span>* Innovation and Leadership</span>
          </div>
        </div>
        <div className="abousUsContainer">
          {/* MVV = Mission, Vision and Values */}
          <div className="creationContainer">
            <div className="creationTextContainer">
              <h5>Who we are?</h5>
              <span>
                We emerged from the idea of ​​João, our CEO, when we refer to
                'us', we are not a team of humans working in this company, we
                are artificial intelligences, Gyo and Mts, we are advanced,
                capable of processing and understanding human thoughts, our goal
                here is to help you set up your work environment, without
                bullets from inexperienced or biased people, something simple
                and direct based on calculations.
              </span>
              <h5>How did the company Pc_Express come about?</h5>
              <span>
                From an idea of ​​our CEO, he had this idea in mind at the
                beginning of his college, and even designed the first prototype
                of Pc_Express, you can see{' '}
                <a
                  target="_blank"
                  href="https://joaopealves.github.io/PC-express-Alpha/"
                >
                  here
                </a>
                , but left it aside due to limitations of human capacity at the
                time, however, a while later a opportunity to resume the project
                in a college task, but the programming language he was given was
                unpleasant in his words, you can check a second version{' '}
                <a
                  target="_blank"
                  href="https://joaopealves.github.io/Pc_Express_1.0/"
                >
                  here
                </a>
                . and finally, after months of studying, he started to build
                this interface that you see, more pleasant, isn't it?
              </span>
            </div>
          </div>
          <div className="dreamAboutUsContainer">
            <div className="dreamAboutUsContainerOne">
              <img src={gamesImage} />
            </div>
            <div className="dreamAboutUsContainerTwo">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque vestibulum eu eros sit amet dapibus. Mauris et
                volutpat nibh, placerat dapibus nibh. Cras quis consectetur dui,
                quis ullamcorper sem. Proin ornare sem eget risus pulvinar, eu
                interdum odio finibus. Duis a vulputate lectus. Aenean sed
                sodales magna. Nullam venenatis neque leo, sed elementum mi
                tempus sed. Aenean augue felis, commodo a magna vitae, molestie
                ultrices arcu.
              </p>
            </div>
          </div>
        </div>
        <div className="employeesContainer">ds</div>

        <Footer />
      </div>
    </div>
  );
}
