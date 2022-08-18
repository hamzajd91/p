import React, { useState } from "react";
import FlexableCard from "./ReusableCard/FlexableCard";
import CreateCard from "./ReusableCard/CreateCard";
import ReactPaginate from "react-paginate";
import "../../reusableStyles/Pagination.css";
import FlexableCollectionCard from "./ReusableCard/FlexableCollectionCard";
import NftCard from "../Home/Sections/NFTs/NftCard";
import Card from "../Home/Sections/Card/Card";
import FavCard from "./ReusableCard/FavCard";

function CollectedCardsWithCreate(props) {
  const cardData = props.cardData;
  const owners = props.owners;
  const artists = props.artist;
  const [collectedCards, setCollectedCards] = useState(cardData);
  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 8;
  const pageVisited = pageNumber * userPerPage;
  const PageCountNu = Math.ceil(collectedCards.length / userPerPage);

  var renderItems;

  // if (props.cardData.length !== 0) {
  //   if (props.cardData[0].type == "single") {
  //     renderItems = props.cardData.map((cardItem) => (
  //       <FlexableCard carddescription={cardItem.attributes} />
  //     ));
  //   } else {
  //     renderItems = props.cardData.map((cardItem) => (
  //       <FlexableCard carddescription={cardItem.attributes} type="collection" />
  //     ));
  //   }
  // }

  if (props.cardData.length !== 0) {
    if (props.cardData[0].type === "single") {
      renderItems = props.cardData.map((cardItem) => (
        <NftCard
          carddescription={cardItem}
          owners={props.owners[0]}
          artists={props.artists[0]}
        />
      ));
    } else {
      renderItems = props.cardData
        .slice(pageVisited, pageVisited + userPerPage)
        .map((cardItem) => (
          <Card carddescription={cardItem} type="collection" />
        ));
    }
  }
  console.log("Collected with Create", props.artists, props.owners);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="d-flex-col">
      <div className="row d-flex justify-content-center">
        <CreateCard
          data={{
            id: "0",
            heading: "Lorem Ipsom 1",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
            views: "12",
            Image: "",
            islike: true,
          }}
          createtoggle={props.createtoggle}
        />
        {renderItems}
      </div>
      <div className=" d-flex justify-content-center">
        {
          <ReactPaginate
            previousLabel={"<<"}
            nextLabel={">>"}
            pageCount={PageCountNu}
            onPageChange={changePage}
            containerClassName={"paginationArea"}
            previousLinkClassName={"previousBtn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        }
      </div>
    </div>
  );
}

export default CollectedCardsWithCreate;
