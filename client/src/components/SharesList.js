import React from 'react';
import SharesItem from "./SharesItem";

const SharesList = ({shares, handleShareClicked}) => {

    const shareList = shares.map((share, index) => {
        return <SharesItem key={index} share={share} handleShareClicked={handleShareClicked}/>
    });
    
    return(
        <div className='share-list'>
            {shareList}
        </div>
    );
}

export default SharesList;