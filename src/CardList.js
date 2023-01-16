import React from 'react'
import Card from './Card';


const CardList = (props) => {
    
if (!props.profiles) return <div></div>;

  return (
    <div>
          {props.profiles.map((profile) =>
                
              <Card profile={profile} />
      )}

    </div>
  );
}

export default CardList;
