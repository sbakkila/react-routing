import React from 'react';

class Artist extends  React.Component {
  constructor(props){
    super(props);
    console.log(props.params);
    this.id = props.params.artistId;
  }

  componentDidMount(){
    this.props.getArtist(this.id);
    this.props.getAlbums(this.id);

  }

  render(){
      console.log(this.props);
      const albums = this.props.artistAlbums;



    return (
      <div>
        <h3>{this.props.selectedArtist.name}</h3>
        <ol>{albums.map((album)=>{
          return(
            <div key={album.id}>
              <li>{album.name}</li>
              <img src={`/api/albums/${album.id}/image`} />
            </div>
            )
        })}
        </ol>

        {albums[0] ?
          (<ol>{albums.map((album) => {
            return album.songs.map((song) => {
              return(
                <div key={song.id}>
                  <li>{song.name}</li>
                </div>
              )
            })
          })}
          </ol>)
          : null}

      </div>
    )
  }
}

export default Artist
