let albums = [
    { id: 1, title: 'Nevermind', artist: 'Nirvana', year: 1991 },
    { id: 2, title: 'The Dark Side of the Moon', artist: 'Pink Floyd', year: 1973 },
    { id: 3, title: 'Thriller', artist: 'Michael Jackson', year: 1982 },
    { id: 4, title: 'The White Album', artist: 'The Beatles', year: 1968 },
    { id: 5, title: 'London Calling', artist: 'The Clash', year: 1979 },
    { id: 6, title: 'Pet Sounds', artist: 'The Beach Boys', year: 1966 }
  ];

  export const getAlbum = (req,res) => {
    res.send(albums)
  }