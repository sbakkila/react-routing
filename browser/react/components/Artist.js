import React from 'react';

class Artist extends  React.Component {
  constructor(props){
    super(props);
    console.log(props.params);
    this.id = props.params.artistId;
  }

  componentDidMount(){
    this.props.getArtist(this.id);
    this.props.albums.forEach((album) => {
      this.props.getAlbum(album.id);
    })

  }

  render(){
      console.log(this.props);
      const albums = this.props.albums;

    return (
      <div>
        <h3>{this.props.selectedArtist.name}</h3>
        <ol>{albums.map((album)=>{
          return <li>{album.name}</li>;
        })}</ol>
        <h4>{this.props.selectedArtist.name}</h4>
        <h4>{this.props.selectedArtist.name}</h4>
      </div>
    )
  }
}

export default Artist
