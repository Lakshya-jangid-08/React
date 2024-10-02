import React from 'react'

function Background() {
  return (
    <div className='fixed bg-zinc-900 z-[2] w-full h-screen '>
      <div className=" flex justify-center items-center w-full h-12">Documents</div>
      <h1 className='absolute top-1/2 left-1/2 text-[10vmax] leading-none tracking-tighter translate-x-[-50%] translate-y-[-50%] font-semibold text-white' >Docs</h1>
    </div>
  )
}

export default Background