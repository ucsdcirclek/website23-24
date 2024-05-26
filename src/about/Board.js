import "./Board.css"
import placehold from "../images/ckilogo.png"

function Board() {
    return (
      <div className="board-members">
        <h1>2023-2024 UCSD CKI Board</h1>
        <h2>Executive Board</h2>
        <div className="card">
          <img src={placehold} alt="guy" />
          <div>
            <h3>Erin Yamaoka</h3>
            <p>President</p>
            <p style={{ whiteSpace: 'nowrap' }}>Cognitive Behavioral Neuroscience</p>
            <p>3rd Year</p>
            <p>president@ucsdcki.org</p>
          </div>
        </div>
        <div className="card">
          <img src={placehold} alt="guy" />
          <div>
            <h3>Tyler Lenart</h3>
            <p>Secretary</p>
            <p>Business</p>
            <p>1st Year</p>
            <p>secretary@ucsdcki.org</p>
          </div>
        </div>
        <div className="card">
          <img src={placehold} alt="guy" />
          <div>
            <h3>Ramon Guerrero</h3>
            <p>Treasurer</p>
            <p>CS</p>
            <p>2nd Year</p>
            <p>treasurer@ucsdcki.org</p>
          </div>
        </div>
        <div className="card">
          <img src={placehold} alt="guy" />
          <div>
            <h3>Omar Salazar</h3>
            <p>VP Administration</p>
            <p>Business Econ</p>
            <p>1st Year</p>
            <p>vpa@ucsdcki.org</p>
          </div>
        </div>
        <div className="card">
          <img src={placehold} alt="guy" />
          <div>
            <h3>Desiree Menjivar</h3>
            <p>VP Service</p>
            <p>Marine Bio</p>
            <p>2nd Year</p>
            <p>vps@ucsdcki.org</p>
          </div>
        </div>


        <h2>Appointed Board</h2>
        <div className="card">
          <img src={placehold} alt="guy" />
          <div>
            <h3>Katie Huggins</h3>
            <p>Tech Chair</p>
            <p>Neurobiology</p>
            <p>1st Year</p>
            <p>technology@ucsdcki.org</p>
          </div>
        </div>
        <div className="card">
          <img src={placehold} alt="guy" />
          <div>
            <h3>Annalise Coaker</h3>
            <p>Member Research & Development</p>
            <p>Microbiology</p>
            <p>1st Year</p>
            <p>mr@ucsdcki.org</p>
          </div>
        </div>
        <div className="card">
          <img src={placehold} alt="guy" />
          <div>
            <h3>Ethan Truong</h3>
            <p>Fundraising</p>
            <p>Math CS</p>
            <p>2nd Year</p>
            <p>fundraising@ucsdcki.org</p>
          </div>
        </div>
        <div className="card">
          <img src={placehold} alt="guy" />
          <div>
            <h3>Emily Chang</h3>
            <p>Service Chair</p>
            <p>Neurobiology</p>
            <p>1st Year</p>
            <p>service@ucsdcki.org</p>
          </div>
        </div>
        <div className="card">
          <img src={placehold} alt="guy" />
          <div>
            <h3>Kelly Wu</h3>
            <p>Media Chair</p>
            <p>Business Economics</p>
            <p>1st Year</p>
            <p>media@ucsdcki.org</p>
          </div>
        </div>
        <div className="card">
          <img src={placehold} alt="guy" />
          <div>
            <h3>Junlin Ruan</h3>
            <p>Service Chair</p>
            <p>Molecular & Cell Bio</p>
            <p>1st Year</p>
            <p>service@ucsdcki.org</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Board;