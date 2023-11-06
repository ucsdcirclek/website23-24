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
            <h3>Darwin Yu</h3>
            <p>President</p>
            <p style={{ whiteSpace: 'nowrap' }}>Cognitive Behavioral Neuroscience</p>
            <p>3rd Year</p>
            <p>president@ucsdcki.org</p>
          </div>
        </div>
        <div className="card">
          <img src={placehold} alt="guy" />
          <div>
            <h3>Tuan Ha</h3>
            <p>Secretary</p>
            <p>Human Bio</p>
            <p>3rd Year</p>
            <p>secretary@ucsdcki.org</p>
          </div>
        </div>
        <div className="card">
          <img src={placehold} alt="guy" />
          <div>
            <h3>Blake Sharp</h3>
            <p>Treasurer</p>
            <p>Math</p>
            <p>2nd Year</p>
            <p>treasurer@ucsdcki.org</p>
          </div>
        </div>
        <div className="card">
          <img src={placehold} alt="guy" />
          <div>
            <h3>Dania Santiago</h3>
            <p>VP Administration</p>
            <p>?</p>
            <p>3rd Year</p>
            <p>vpa@ucsdcki.org</p>
          </div>
        </div>
        <div className="card">
          <img src={placehold} alt="guy" />
          <div>
            <h3>Michelle Bach</h3>
            <p>VP Service</p>
            <p>Biochemistry</p>
            <p>4th Year</p>
            <p>vps@ucsdcki.org</p>
          </div>
        </div>


        <h2>Appointed Board</h2>
        <div className="card">
          <img src={placehold} alt="guy" />
          <div>
            <h3>Alex Gao</h3>
            <p>Tech Chair</p>
            <p>Computer Science</p>
            <p>4th Year</p>
            <p>technology@ucsdcki.org</p>
          </div>
        </div>
        <div className="card">
          <img src={placehold} alt="guy" />
          <div>
            <h3>Jenny Tran</h3>
            <p>Member Research & Development</p>
            <p>Biochemistry</p>
            <p>4th Year</p>
            <p>mr@ucsdcki.org</p>
          </div>
        </div>
        <div className="card">
          <img src={placehold} alt="guy" />
          <div>
            <h3>Jason Ang</h3>
            <p>Member Research & Development</p>
            <p>Literature & Writing</p>
            <p>4th Year</p>
            <p>mr@ucsdcki.org</p>
          </div>
        </div>
        <div className="card">
          <img src={placehold} alt="guy" />
          <div>
            <h3>Amy Kavi</h3>
            <p>Service Chair</p>
            <p>Neurobiology</p>
            <p>3rd Year</p>
            <p>service@ucsdcki.org</p>
          </div>
        </div>
        <div className="card">
          <img src={placehold} alt="guy" />
          <div>
            <h3>Enrique Espinoza</h3>
            <p>Service Chair</p>
            <p>Human Biology</p>
            <p>3rd Year</p>
            <p>service@ucsdcki.org</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Board;