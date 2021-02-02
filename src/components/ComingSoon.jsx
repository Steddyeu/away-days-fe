import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndoAlt } from "@fortawesome/free-solid-svg-icons";

export default function ComingSoon() {
  
  
  const goBack =  () => {
    window.history.back();
  };

  return (
    <div className="no-stadiums-list">
      <button
        onClick={() => goBack()}
        className={"individual-stadium-home-button"}
      >
        <FontAwesomeIcon className="button-icon" icon={faUndoAlt} />
      </button>
      <p>More stadiums coming soon...</p>

      <iframe
        title={"gif"}
        style={{ width: "20em", height: "20em" }}
        src="https://giphy.com/embed/dKdtyye7l5f44"
        width="480"
        height="256"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        {/*eslint-disable-next-line*/}
        <a
          href="https://giphy.com/gifs/soccer-gif-art-lol-dKdtyye7l5f44"
          alt="placeholder gif"
        ></a>
      </p>
    </div>
  );
}
