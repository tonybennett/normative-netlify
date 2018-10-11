import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Content, { HTMLContent } from "../components/Content";
import "typeface-cardo";
import Slider from "react-slick";

import Template from "./template";

import Section from "../components/Section";
import ImageResponsive from "../components/ImageResponsive";
import MouseIcon from "../components/icons/Mouse";

import Lockup from "../assets/images/inspiren-lockup.png";
import Lockup2x from "../assets/images/inspiren-lockup@2x.png";
import Bed from "../assets/images/inspiren-bed.jpg";
import Bed2x from "../assets/images/inspiren-bed@2x.jpg";

import "./case-study.scss";

const settings = {
  dots: true,
  arrows: true,
  className: "center",
  centerMode: true,
  infinite: false,
  slidesToShow: 1,
  centerPadding: "0px",
  speed: 500,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        centerPadding: "0px"
      }
    },
    {
      breakpoint: 875,
      settings: {
        centerPadding: "60px"
      }
    },
    {
      breakpoint: 767,
      settings: {
        centerPadding: "0px"
      }
    }
  ]
};

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        transform: "translate(0, -50%) scaleX(-1)"
      }}
      onClick={onClick}
    >
      <img src={require("../assets/images/left-arrow.svg")} alt="" />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src={require("../assets/images/left-arrow.svg")} alt="" />
    </div>
  );
}

export class CaseStudyTemplate extends React.Component {
  state = {
    showScrollIcon: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showScrollIcon: false
      });
    }, 5000);
  }

  render() {
    const {
      content,
      contentComponent,
      title,
      helmet,
      includeFooter,
      ...rest
    } = this.props;

    const PostContent = contentComponent || Content;

    return (
      <Template includeFooter={includeFooter} {...rest}>
        {helmet || ""}
        <div className="inspiren-body">
          <div className="tag-wrapper">
            <div className="tagBlock" />
          </div>
          <div className="video-wrapper">
            <div className="video">
              <div className="placeholder" />
              <div
                className={`video-scroll-icon ${
                  this.state.showScrollIcon ? "" : "hidden"
                }`}
              >
                <MouseIcon />
              </div>
              <a href="mailto:hello@normative.com" className="video-email">
                hello@normative.com
              </a>
            </div>
          </div>
          <Section>
            <h1 className="section__title">
              Eradicating Patient Neglect with AI.
            </h1>
            <div className="section__body">
              {/* eslint-disable max-len */}
              <p>
                Medical errors are a major cause of death in U.S. hospitals to
                the tune of 250,000 deaths a year
              </p>
              <p>
                Normative partnered with a company called Inspiren to help them
                launch a smart device to combat one contributing factor: patient
                neglect. Their invention, iN is a wall-mounted monitoring device
                that uses computer vision, an infrared receiver and Bluetooth
                beacons to track everything that happens in a hospital room,
                from vital monitoring data to the duration of a nurse’s visit.
              </p>
              <p>
                With purpose, privacy, and elegance in mind, iN’s design is one
                of a friendly and intelligent assistant that is ever watchful,
                never tiring, and always mindful. Placed on the wall behind the
                patient’s bed, iN communicates with medical staff via four
                intuitive colors through an interactive LED display.
              </p>
              <p>
                The system is backed by a robust data analytics engine that
                analyzes data from other devices in the room, from the call
                button to advanced life-sustaining equipment. iN also assesses
                each caregiver’s patient workload to optimize staffing, and
                integrates with Electronic Health Records.
              </p>
              <p>
                By automating the data capture process within hospital rooms,
                the system lifts the burden of data collection and charting from
                clinicians, allowing them to spend more time with patients at
                the bedside to improve outcomes.
              </p>
              <p>
                iN is more than just a product. Developed by a collaborative
                team of clinicians, technologists and designers, it’s the
                world’s first end-to-end cognitive care system.
              </p>
              <p>
                The iN Solution received an honorable mention in Fast Company’s
                2018 Innovation by Design Awards.
              </p>
              {/* eslint-enable max-len */}
            </div>
            <img
              src={Lockup}
              srcSet={`${Lockup} 1x, ${Lockup2x} 2x`}
              alt="App screenshot, dashboard screenshot and hardware rendering"
              className="section__image"
            />
          </Section>
          <Section>
            <h1 className="section__title accent">
              Design in Code. Launch, Faster.
            </h1>
            <div className="video">
              <div className="placeholder">
                {/* <video ref={c => (this.video = c)} preload="auto" controls>
                  <source
                    src={prefixLink(NormVideoWebm)}
                    type="video/webm; codecs=vp9,vorbis"
                  />
                  <source src={prefixLink(NormVideoMP4)} type="video/mp4;" />
                </video> */}
              </div>
            </div>

            <div className="section__body">
              {/* eslint-disable max-len */}
              <br />
              <p>
                When the Inspiren team came to Normative, they had a brilliant
                prototype but it was far from an usable system that hospital
                staff could actually use.
              </p>
              <p>
                With our “Design in Code” process, we were able to transform
                their concept into working software in just under eight weeks.
                Once the system was coded, we stopped debating the design issues
                on paper. We could now problem-solve against the real technical
                issues, hardware and material restraints, industry regulations,
                and psychological barriers that end users might have.
              </p>
              <p>
                The net result? We were able to problem-solve and rapidly cycle
                through a series of improvements to the system, helping Inspiren
                reach critical milestones quickly, manage their risk horizon,
                and build momentum.
              </p>
              <p>
                When Inspiren demoed the working prototype to an important
                stakeholder, they were sold.
              </p>
              <p>
                Soon after, a major New York academic hospital signed on to
                pilot the device on their hospital floors, getting iN out of the
                innovation lab and into hospital rooms.
              </p>
              <p>
                Succeeding in market is every company’s dream. Many ideas spend
                years mired in uncertainty. Using Design in Code, we helped
                Inspiren validate their idea in the real world and get to market
                quickly.
              </p>
              <img
                src={Bed}
                srcSet={`${Bed} 1x, ${Bed2x} 2x`}
                alt="App screenshot, dashboard screenshot and hardware rendering"
                className="section__image"
              />
              <p>
                <br />
                <a href="https://ratsnest.io/designing-in-code-can-help-get-your-innovation-in-market-faster-heres-how-we-did-it-5afc4a118d47">
                  Read more about our "Design in Code" process
                </a>
              </p>

              {/* eslint-enable max-len */}
            </div>
          </Section>
          <Section>
            <h1 className="section__title">Normative x Inspiren Press</h1>
            <div className="press">
              <div className="grid">
                <div className="press-column">
                  <div className="press__logo">
                    <img
                      src={require("../assets/images/fastco.svg")}
                      alt="Fast Company"
                      className="logo-fastco"
                    />
                  </div>
                  <hr />
                  <p>Patient Neglect Kills. This AI could help stop it</p>
                  <a
                    href="https://www.fastcompany.com/90204532/patient-neglect-kills-this-ai-could-stop-it"
                    target="_blank"
                  >
                    Read more
                  </a>
                </div>
                <div className="press-column">
                  <div className="press__logo">
                    <img
                      src={require("../assets/images/tmf.svg")}
                      alt="TMF"
                      className="logo-tmf"
                    />
                  </div>
                  <hr />
                  <p>Inspiren Fights Patient Neglect with A.I.</p>
                  <a
                    href="https://mailchi.mp/medicalfuturist/inspiren-fights-patient-neglect-with-ai-medical-futurist-newsletter-special"
                    target="_blank"
                  >
                    Read more
                  </a>
                </div>
                <div className="press-column">
                  <div className="press__logo">
                    <img
                      src={require("../assets/images/fastco.svg")}
                      alt="Fast Company"
                      className="logo-fastco"
                    />
                  </div>
                  <hr />
                  <p>Innovation by Design 2018 Winners</p>
                  <a
                    href="https://www.fastcompany.com/innovation-by-design/2018/company/inspiren"
                    target="_blank"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </Section>
          <Section>
            <h1 className="section__title">The Making Of</h1>
          </Section>
          <div className="slider">Slider</div>
          <Section>
            <h1 className="section__title">Our Partners</h1>
            <div className="partners">
              <div className="grid">
                <div className="partner-column">
                  <img
                    src={require("../assets/images/logo-inspiren.svg")}
                    alt="Inspiren Logo"
                    className="logo-inspiren"
                  />
                </div>
                <div className="partner-column">
                  <img
                    src={require("../assets/images/logo-10xbeta.png")}
                    alt="10xBeta Logo"
                    className="logo-10x"
                  />
                </div>
              </div>
            </div>
          </Section>
          <Section>
            <h1 className="section__title">Work With Us</h1>
            <div className="section__body">
              {/* eslint-disable max-len */}
              <div className="large-link">
                <a href="mailto:designincode@normative.com">
                  designincode@normative.com
                </a>
              </div>
              {/* eslint-enable max-len */}
            </div>
          </Section>
          <img
            src={require("../assets/images/waves.svg")}
            alt=""
            className="waves"
          />
          {/* <h1>{title}</h1> */}
          {/* <PostContent content={content} /> */}
        </div>
      </Template>
    );
  }
}

CaseStudyTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
  includeFooter: PropTypes.bool
};

const CaseStudy = props => {
  const { data, ...rest } = props;
  const { markdownRemark: post } = data;

  return (
    <CaseStudyTemplate
      content={post.html}
      contentComponent={HTMLContent}
      helmet={<Helmet title={`${post.frontmatter.title} | Case Study`} />}
      title={post.frontmatter.title}
      includeFooter
      {...rest}
    />
  );
};

CaseStudy.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default CaseStudy;

export const pageQuery = graphql`
  query CaseStudyByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;
