import React from 'react';
import {Link} from 'react-router';



function Artists (props) {

  const artists = props.artists;



  return (
    <div>
      <h3>Artists</h3>
        <div className="list-group">
        {
          props.artists.map(artist => {
            return (
              <div className="list-group-item" key={artist.id}>
                {/* determine where to actually Link to later! */}
                <Link to={`artist/${artist.id}`  }>{ artist.name }</Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Artists
