import { useRef, useState } from 'react'
import React from 'react'
import Card from './card'

function FrontBG() {
  var ref = useRef(null);
  var data = [{
    discription : "Lakshya jangid ...........",
    size: "0.8mb",
    close : true,
    tag :{close :true,Title : "Downlond Now",color:"green"}
  },
  {
    discription : "Lorem ipsum dolor sit amet consectetur adipisicing.",
    size: "0.2mb",
    close : false,
    tag :{close :true,Title : "Downlond Now",color:"green"}
  },
  {
    discription : "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat eaque doloribus sunt molestiae",
    size: "0.15mb",
    close : true,
    tag :{close :true,Title : "Downloading",color:"blue"}
  }
]
  return (
    <div ref= {ref} className="fixed flex gap-5 top-0 left-0 z-[3] w-full h-screen">
      { data.map((item,index)=>(
        <Card data={item} reference = {ref}/>)
      )}
    </div>
  )
}

export default FrontBG