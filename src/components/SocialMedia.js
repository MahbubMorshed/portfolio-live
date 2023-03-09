import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaArtstation, FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsLinkedin
          onClick={() =>
            window.open("https://www.linkedin.com/in/mahbub-morshed/")
          }
        />
      </div>
      <div>
        <FaArtstation
          onClick={() => window.open("https://www.artstation.com/mahbub")}
        />
      </div>
      <div>
        <FaFacebookF
          onClick={() =>
            window.open("https://www.facebook.com/mahbub.morshed.1004/")
          }
        />
      </div>
    </div>
  );
};

export default SocialMedia;
