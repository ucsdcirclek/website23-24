import "./MissionValues.css"


const tennants = ["Service", "Leadership", "Fellowship", "Pledge"]
const tennantsText =["UCSD Circle K holds multiple weekly service events and you do not have to be a paid member to participate. Our projects range from maintaining the campus community garden, to ladling soup at soup kitchens, to helping children at Boys and Girls Club. Rides are provided to all service events and meeting locations and details are disclosed in the event pages which can be located on our website calendar.", "UCSD Circle K has a multitude of leadership opportunities. We have a plethora of committees that are always seeking more committee members and would be more than happy to receive member input. Furthermore, every event requires a chair, a responsibility that anyone may request. Lastly, our club has an Elected Board which is chosen by club members every year before Spring Quarter and an Appointed Board which is selected by the Elected Board. If you want to learn more about our current board as well as specific positions, please refer to the Contact Page.", "UCSD Circle K provides an abundance of social and friendship opportunities. All of our events are always open to new members and can range from hanging out at the California beaches to going out for a meal at local San Diego restaurants, to having a board game night in the UCSD library. Circle K also has an awesome family system that enables more intimate friendships and a great mentorship program in which returning members guide new members through college. To view upcoming social events, please refer to the website calendar.", "I pledge to uphold the Objects of Circle K International, to foster compassion and goodwill toward others through service and leadership, to develop my abilities and the abilities of all people, and to dedicate myself to the realization of mankind’s potential!"] 

function MissionValues() {
    return (
      <div className="MissionValues">
        <div className="mainText">
          <p className="mlTitle">Circle K International Mission & Values</p>
          <p>
          CKI (Circle K International) is a collegiate organization that is 
          devoted to helping universities join a global network of responsible 
          citizens and leaders with a lifelong commitment to service.
          CKI (Circle K International) is a collegiate organization that is 
          devoted to helping universities join a global network of responsible 
          citizens and leaders with a lifelong commitment to service.
          CKI (Circle K International) is a collegiate organization that is 
          devoted to helping universities join a global network of responsible 
          citizens and leaders with a lifelong commitment to service.
          </p>
        </div>
        <div className="tennantsSection">
        {tennants.map((name, index) => (
          <div key={index} className="tennantsItem">
            <p className="tennants">{name}</p>
            <p className="tennantsText">{tennantsText[index]}</p>
          </div>
        ))}
      </div>
      </div>
    );
  }
  
  export default MissionValues;