import React from 'react'

export default function Card(props) {
    
    const [clicked, setClicked] = React.useState(false);

    function handleClick() {
      setClicked(true);
    }

    


  return (
    <>
      <div
        className="bcard"
        style={{ backgroundImage: `url(${props.backgroundImage})`} }
      >
        {clicked && <div className="bcard-state">VISITED</div>}
        <div className="bcard-content">
          <h2 className="bcard-title">{props.title}</h2>
          <a
            href={props.link}
            target="_blank"
            className="bbutton"
            rel="noreferrer"
            onClick={handleClick}
          >
            {props.github ? (
              <i className="fa-brands fa-github"></i>
            ) : (
              <i className="fa-solid fa-link"></i>
            )}{" "}
            {props.buttonText}
            {!props.buttonText && "More info"}
          </a>
          <p className="bcard-body">{props.body}</p>
        </div>
      </div>
    </>
  );
}
