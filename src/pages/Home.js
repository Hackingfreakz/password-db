import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import './style.css'
const characters=[
  {id:1,name:"Kakashi Hatake",image:"/assets/1.jpeg"},
  {id:2,name:"Kakashi Hatake",image:"/assets/2.jpeg"},
  {id:3,name:"Kakashi Hatake",image:"/assets/3.jpeg"},
  {id:4,name:"Kakashi Hatake",image:"/assets/4.jpeg"},
  {id:5,name:"Kakashi Hatake",image:"/assets/5.jpg"},
  {id:6,name:"Kakashi Hatake",image:"/assets/6.jpeg"},
  {id:7,name:"Kakashi Hatake",image:"/assets/7.jpeg"}
]
function Home() {
  return (
    <div> 
      <Navbar/>
      <div className='container'>
        <div className='row'>
          {characters.map((character)=>(<div key={character.id} className='col-md-4'><Card character={character}/></div>))}
        </div>
      </div>
    </div>
  )
}

export default Home