import React from 'react';
import './Education.css';
import TMSL from './Techno India Salt Lake.jpg';
import TIU from './Techno India University.JPG';
import Carmel from './Carmel School.png';
import BCA1 from './1stsembca.pdf';
import BCA2 from './2ndsembca.pdf';
import BCA3 from './3rdsembca.pdf';
import BCA4 from './4thsembca.pdf';
import BCA5 from './5thsembca.pdf';
import BCA6 from './6thsembca.pdf';
import ICSE from './10th Mark Sheet.pdf';
import ISC from './12th Marksheet.pdf';
import MCA1 from './MCA1stSemresult.jpg';
import MCA2 from './MCA2ndSemresult.jpg';
import MCA3 from './MCA3rdSemresult.jpg';
import MCA4 from './MCA4thSemresult.jpg';

const Education = () => {
  return (
    <section className="education-section">
      <h1 className="education-title">
        EDUCATIONAL <span>QUALIFICATIONS</span>
        <span className="underline"></span>
      </h1>

      <div className="colleges-grid">
        {/* Masters */}
        <div className="education-card">
          <img className="college-img" src={TIU} alt="Techno India University" />
          <div className="card-content">
            <h2>TECHNO INDIA UNIVERSITY</h2>
            <p>Masters in Computer Applications</p>
            <div className="btn-group">
              <a href={MCA1} download><button>1st Sem</button></a>
              <a href={MCA2} download><button>2nd Sem</button></a>
              <a href={MCA3} download><button>3rd Sem</button></a>
              <a href={MCA4} download><button>4th Sem</button></a>
            </div>
          </div>
        </div>

        {/* Bachelors */}
        <div className="education-card">
          <img className="college-img" src={TMSL} alt="Techno India Salt Lake" />
          <div className="card-content">
            <h2>TECHNO INDIA SALT-LAKE</h2>
            <p>Bachelors in Computer Applications</p>
            <div className="btn-group">
              <a href={BCA1} download><button>1st Sem</button></a>
              <a href={BCA2} download><button>2nd Sem</button></a>
              <a href={BCA3} download><button>3rd Sem</button></a>
              <a href={BCA4} download><button>4th Sem</button></a>
              <a href={BCA5} download><button>5th Sem</button></a>
              <a href={BCA6} download><button>6th Sem</button></a>
            </div>
          </div>
        </div>

        {/* School */}
        <div className="education-card">
          <img className="college-img" src={Carmel} alt="Carmel School Sarengabad" />
          <div className="card-content">
            <h2>CARMEL SCHOOL SARENGABAD</h2>
            <p>I.C.S.E. & I.S.C.</p>
            <div className="btn-group">
              <a href={ICSE} download><button>10th ICSE</button></a>
              <a href={ISC} download><button>12th ISC</button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
