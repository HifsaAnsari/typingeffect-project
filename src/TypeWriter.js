import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function TypeWriter() {
    return (
        <div>
            <h1 style={{padding:'3rem',margin:'auto 0'}}>
i am a
<span style={{color:"red",fontWeight:"bold",marginLeft:"10px"}}>
<Typewriter
            words={['Eat', 'Sleep', 'Code', 'Repeat!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={() => console.log(`Done after 5 loops!`)}
          />
</span>
            </h1>         
        </div>
    )
}

export default TypeWriter
