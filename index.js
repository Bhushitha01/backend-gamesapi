const express=require("express")
const app=express();
const cors = require("cors")
app.use(cors());
app.use(express.json());

const port = 5000;
const games = [
    {
      id: 1,
      title: 'The Legend of Zelda: Breath of the Wild',
      genre: 'Action-adventure',
      platform: 'Nintendo Switch',
      releaseYear: 2017,
    },
    {
      id: 2,
      title: 'God of War',
      genre: 'Action-adventure',
      platform: 'PlayStation 4',
      releaseYear: 2018,
    },
    {
      id: 3,
      title: 'Cyberpunk 2077',
      genre: 'Role-playing',
      platform: 'PC',
      releaseYear: 2020,
    },
    {
      id: 4,
      title: 'Hollow Knight',
      genre: 'Metroidvania',
      platform: 'PC',
      releaseYear: 2017,
    },
    {
      id: 5,
      title: 'Minecraft',
      genre: 'Sandbox',
      platform: 'Multi-platform',
      releaseYear: 2011,
    },
  ];

  app.get("/games",(req,res)=>{
    res.status(200).json({games:games})
  })

  app.get("/games/:id",(req,res)=>{
    let id=parseInt(req.params.id);
    let user = games.find((u)=>u.id===id);
    if(user) {
        res.status(200).json({user})
    }
    else {
        res.status(404).json({message: "There was no game pertaining to this id"})
    }
  })
  app.listen(port,()=>{
    console.log("The server is running on port",port)
  })