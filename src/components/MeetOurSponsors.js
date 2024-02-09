// import React from "react";
// import Red from "../assets/Red.png";
// import StickerMule from "../assets/sponsors/sticker-mule-logo-light.png";
// import Card from "react-bootstrap/Card";
// import "./MeetOurSponsors.css";

// function MeetTheTeam() {

//   const styles ={
//     backgroundColor: "#712323",
//     padding: "5%"
//   }

//   return (

    
//     <div className="App"  style={styles} id="meet-our-sponsors-section">
//       <div class="container-fluid-xl"></div>
//       <h2 className="text-white text-center text-9xl pt-6">Meet Our Sponsors</h2>

      
//     </div>
//   );
// }

// export default MeetTheTeam;


import React from "react";
import Red from "../assets/Red.png";
import StickerMule from "../assets/sponsors/sticker-mule-logo-light.png";
import Scotiabank from "../assets/sponsors/Scotiabank.png";
import EnvironicsAnalytics from "../assets/sponsors/EnvironicsAnalytics.jpg";
import Cse from "../assets/sponsors/CSE.jpeg";
import Accenture from "../assets/sponsors/Accenture-logo.png";
import Brampton from "../assets/sponsors/Brampton.jpg";
import Cgi from "../assets/sponsors/CGI.jpg";
import Kpm from "../assets/sponsors/kpm_logo_vertical-600x428-1.jpg";
import Pg from "../assets/sponsors/P&G.png";
import Redbull from "../assets/sponsors/Red-Bull-logo.jpg";
import Microsoft from "../assets/sponsors/reactor.jpg";
import Card from "react-bootstrap/Card";
import "./MeetOurSponsors.css";

function MeetTheTeam() {

const styles ={
  backgroundColor: "#712323"
}
  const golden = {
    border: "10px solid #ffd700", /* #ffd700 is the hexadecimal color code for gold */
    padding: "10px",
    color: "#ffd700"
    //  backgroundColor: "white"
    };

    const bronze = {
      border: "10px solid #cd7f32", /* #cd7f32 is the hexadecimal color code for bronze */
      padding: "10px",
      color: "#cd7f32"
      };
      const community = {
        border: "10px solid #fff", /* #cd7f32 is the hexadecimal color code for bronze */
        padding: "10px",
        color: "#cd7f32"
        };
  return (
    <div className="App text-white text-left sm:text-4xl md:text-3xl lg:text-6xl p-4" id="meet-our-sponsors-section" style={styles}>
      <div class="container-fluid-xl"></div>
      <h1 class="text-white sm:text-4xl md:text-3xl lg:text-6xl p-5">Meet Our Sponsors</h1>

        <div id="sponsors">
        
        <div class="sponsors-container">
        <div class="gold-sponsors text-center">
          <h3>Gold Sponsors</h3>
            <div>
              <div class="flex items-center justify-center">
                <div class="flex grid-cols-4 gap-5 place-items-center place-content-center justify-center">
                  <Card className="custom-card mx-auto justify-center"> 
                    <a href="https://www.scotiabank.com/ca/en/personal.html" target="_blank" rel="noreferrer" class="centered-image">
                      <Card.Img variant="top" src={Scotiabank} className="smaller-image" />
                    </a>
                  </Card>
                </div>
              </div>
            </div>
            <div>
              <div class="flex items-center justify-center">
                <div class="flex grid-cols-4 gap-5 place-items-center place-content-center justify-center">
                  <Card className="custom-card mx-auto justify-center"> 
                    <a href="https://environicsanalytics.com/en-ca/home" target="_blank" rel="noreferrer" class="centered-image">
                      <Card.Img variant="top" src={EnvironicsAnalytics} className="smaller-image" />
                    </a>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          </div>  
          
          <div class="sponsors-container">
  <div class="bronze-sponsors text-center">
  <h2 class="text-white sm:text-4xl md:text-3xl lg:text-6xl p-4">Bronze Sponsors</h2>
    <div class="d-flex justify-content-center align-items-center flex-wrap">
      <div class="col-lg-4 col-md-6 mb-3">
        <Card className="custom-card mx-auto justify-content-center"> 
          <a href="https://www.pg.ca/en-ca/" target="_blank" rel="noreferrer" class="centered-image">
            <Card.Img variant="top" src={Pg} className="smaller-image" style={{ width: '80%', height: '150px' }} />
          </a>
        </Card>
      </div>

      <div class="col-lg-4 col-md-6 mb-3">
        <Card className="custom-card mx-auto justify-content-center"> 
          <a href="https://www.cse-cst.gc.ca/en" target="_blank" rel="noreferrer" class="centered-image">
            <Card.Img variant="top" src={Cse} className="smaller-image" style={{ width: '70%', height: '150px', padding:'10px' }} />
          </a>
        </Card>
      </div>

      <div class="col-lg-4 col-md-6 mb-3">
        <Card className="custom-card mx-auto justify-content-center"> 
          <a href="https://www.kpmpower.com/" target="_blank" rel="noreferrer" class="centered-image"> 
            <Card.Img variant="top" src={Kpm} className="smaller-image" style={{ width: '100%', height: '150px' }} />
          </a>
        </Card>
      </div>
      <div class="col-lg-4 col-md-6 mb-3">
        <Card className="custom-card mx-auto justify-content-center"> 
          <a href="https://www.accenture.com/ca-en" target="_blank" rel="noreferrer" class="centered-image">
            <Card.Img variant="top" src={Accenture} className="smaller-image" style={{ width: '100%', height: '150px' }} />
          </a>
        </Card>
      </div>
      
      <div class="col-lg-3 col-md-6 mb-3">
        <Card className="custom-card mx-auto justify-content-center"> 
          <a href="https://www.cgi.com/en" target="_blank" rel="noreferrer" class="centered-image" >
            <Card.Img variant="top" src={Cgi} className="smaller-image" style={{ width: '100%', height: '150px',padding:'40px' }} />
          </a>
        </Card>
      </div>
    </div>
  </div>
</div>



<div class="community-sponsors text-center">
  <h3>Community Sponsors</h3>
  <div class="d-flex justify-content-center align-items-center flex-wrap">
    <div class="col-lg-3 col-md-6 mb-3">
      <Card className="custom-card mx-auto justify-content-center"> 
        <a href="https://developer.microsoft.com/en-us/reactor/" target="_blank" rel="noreferrer" class="centered-image">
          <Card.Img variant="top" src={Microsoft} className="smaller-image" style={{ width: '100%', height: '120px' }} />
        </a>
      </Card>
    </div>
    <div class="col-lg-3 col-md-6 mb-3">
      <Card className="custom-card mx-auto justify-content-center"> 
        <a href="https://investbrampton.ca/locate-here/innovation-district/" target="_blank" rel="noreferrer" class="centered-image">
          <Card.Img variant="top" src={Brampton} className="smaller-image" style={{ width: '100%', height: '120px', padding:'20px' }}/>
        </a>
      </Card>
    </div>
    <div class="col-lg-3 col-md-6 mb-3">
      <Card className="custom-card mx-auto justify-content-center"> 
        <a href="https://www.redbull.com/ca-en/" target="_blank" rel="noreferrer" class="centered-image">
          <Card.Img variant="top" src={Redbull} className="smaller-image" style={{ width: '100%', height: '120px', padding:'10px' }}/>
        </a>
      </Card>
    </div>
    <div class="col-lg-3 col-md-6 mb-3">
      <Card className="custom-card mx-auto justify-content-center"> 
        <a href="https://mule.to/p5it" target="_blank" rel="noreferrer" class="centered-image">
          <Card.Img variant="top" src={StickerMule} className="smaller-image" style={{ width: 'auto', height: '110px'}}/>
        </a>
      </Card>
    </div>
  </div>
</div>

</div>
      </div>
  );
}

export default MeetTheTeam;
