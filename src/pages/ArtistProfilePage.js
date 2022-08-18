import React from "react";
import ArtistProfile from "./../components/ArtistProfile";

function ArtistProfilePage() {
  return (
    <div className="sidebar_Navbar_Structure">
      <div className="position-relative">
        <div className="position-relative">
          <ArtistProfile />
        </div>
      </div>
    </div>
  );
}

export default ArtistProfilePage;
