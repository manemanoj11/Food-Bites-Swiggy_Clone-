import { useState } from "react";

const Section = ({ title, description,isvisible,setIsVisible }) => {

  return (
    <div className="mainSec">
      <h2>{title}</h2>
      {isvisible ? (
        <button
          onClick={() => {
            setIsVisible(false);
          }}
        >
          hide
        </button>
      ) : (
        <button
          onClick={() => {
            setIsVisible(true);
          }}
        >
          show
        </button>
      )}
     {isvisible &&  <p>{description}</p>}
    </div>
  );
};

const InstaMart = () => {
    const [visibleSection, setIsVisibleSection] = useState("InstaMart");
  return (
    <>
      <h1 className="insta">InsTaMart is Mart</h1>
      <Section
        title={"InstaMart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor lacus luctus accumsan tortor posuere ac ut consequat semper."
        }
        isvisible={visibleSection==='InstaMart'}
        setIsVisible={()=>setIsVisibleSection('InstaMart')}
      />
      <Section
        title={"About Us"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor lacus luctus accumsan tortor posuere ac ut consequat semper."
        }
        isvisible={visibleSection==='About'}
        setIsVisible={()=>setIsVisibleSection('About')}
      />
      <Section
        title={"Details"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor lacus luctus accumsan tortor posuere ac ut consequat semper."
        }
        isvisible={visibleSection==='Details'}
        setIsVisible={()=>setIsVisibleSection('Details')}
      />
    </>
  );
};

export default InstaMart;


// import React, { useState } from "react";

// const Section = ({ title, description }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   const toggleVisibility = () => {
//     setIsVisible(!isVisible);
//   };

//   return (
//     <div className="mainSec">
//       <h2>{title}</h2>
//       <button onClick={toggleVisibility}>
//         {isVisible ? "Hide" : "Show"}
//       </button>
//       {isVisible && <p>{description}</p>}
//     </div>
//   );
// };

// export default Section;
