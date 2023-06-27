// let albums = [
//     { id: 1, title: 'Nevermind', artist: 'Nirvana', year: 1991 },
//     { id: 2, title: 'The Dark Side of the Moon', artist: 'Pink Floyd', year: 1973 },
//     { id: 3, title: 'Thriller', artist: 'Michael Jackson', year: 1982 },
//     { id: 4, title: 'The White Album', artist: 'The Beatles', year: 1968 },
//     { id: 5, title: 'London Calling', artist: 'The Clash', year: 1979 },
//     { id: 6, title: 'Pet Sounds', artist: 'The Beach Boys', year: 1966 }
//   ];

import db from "../lowdbConfig.js"

  // get
  /* 
  export const getAlbum = (req,res) => {
    res.send(albums)
  }
  */
  export const getAlbum = async (req,res) => {
    await db.read()
    res.send(db.data)
  }

  // find
  /* 
  export const findAlbum = (req,res) => {
    const year = parseInt(req.params.year)
    const album = albums.filter((item) => item.year === year)
    res.send(album)
  }
  */
 export const findAlbum = async (req,res) => {
  await db.read()
  const year = parseInt(req.params.year);
  const album = db.data.filter((item) => item.year === year);
  res.send(album)
 }

  // post
  /* 
  export const postAlbum = (req,res) => {
    const music = req.body
    music.id = albums.length+1;
    albums.push(music)
    console.log(albums)
    res.send({added:true, data:music})
  }
  */
 export const postAlbum = async (req,res) => {
  await db.read()
  const musicBody = req.body;
  const musicBodyId = db.data.reduce((maxId,music) => Math.max(maxId,music.id), 0) +1;
  const newMusic = {id:musicBodyId, ...musicBody}
  db.data.push(newMusic);
  db.write()
  console.log(db.data)
  res.send({added:true, data:newMusic})
 }
 
  // delete
  /* 
  export const deleteAlbum = (req,res) => {
    const deleteTitle = (req.params.title).trim()
    const newAlbums = albums.filter((item) => item.title !== deleteTitle)
   
    res.send(newAlbums) 
    console.log(newAlbums)
  }
  */
 export const deleteAlbum = async (req,res) => {
  await db.read()
  const deleteTitle = (req.params.title).trim();
  console.log(deleteTitle)
  const filteredAlbums = db.data.filter((item) => item.title.toLowerCase() !== deleteTitle.toLowerCase());
  db.write()
  res.send(filteredAlbums)
 }