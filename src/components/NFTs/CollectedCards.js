import React, { useEffect, useState } from "react";
import FlexableCard from "./ReusableCard/FlexableCard";
import CreateCard from "./ReusableCard/CreateCard";
import ReactPaginate from "react-paginate";
import "../../reusableStyles/Pagination.css";
import NftCard from "../Home/Sections/NFTs/NftCard";
import { Moralis } from "moralis";

function CollectedCards(props) {
  const { filteredImaged } = props;
  const [nftsCollection, setnftscollections] = useState([]);
  const getData = async () => {
    if (filteredImaged) {
      var queryCollection = new Moralis.Query("LazyMintNFT");
      queryCollection.containedIn("tokenid", filteredImaged.NFTs);
      var data = await queryCollection.find();
      setnftscollections(data);
    }
  };
  useEffect(() => {
    setnftscollections(filteredImaged);
  }, []);

  //const [collectedCards, setCollectedCards] = useState(nftsCollection);

  // const [pageNumber, setPageNumber] = useState(0);
  // const userPerPage = 8;
  // const pageVisited = pageNumber * userPerPage;
  //const PageCountNu = Math.ceil(collectedCards.length / userPerPage);

  // const renderItems = collectedCards
  // .slice(pageVisited, pageVisited + userPerPage)
  //.map((cardItem) => <FlexableCard />);

  var renderItems;
  if (nftsCollection) {
    renderItems = nftsCollection.map((cardItem) => (
      <NftCard carddescription={cardItem.attributes} />
    ));
  }
  console.log(nftsCollection);

  return (
    <>
      <div className="d-flex flex-wrap justify-content-center ">
        {renderItems}
      </div>
      <div className="row d-flex justify-content-center">
        {/* {
          <ReactPaginate
            previousLabel={"<<"}
            nextLabel={">>"}
           // pageCount={PageCountNu}
       //     onPageChange={changePage}
            containerClassName={"paginationArea"}
            previousLinkClassName={"previousBtn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        } */}
      </div>
    </>
  );
}

export default CollectedCards;
