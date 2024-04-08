import React , {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)
    
    const tick = ()=> {
        // setCount(count + 1) ------ (1)
        setCount(prevCount => prevCount + 1) // ------ (2)
    }
    
    // this Code won't work if we use (1) Approch because value of count changes but the useEffect does'nt keep track of it and Forgets it after 1st Render. 
    // To Fix that we Have to pass count in the Dependancy array or we can use prevCount State Variable to keep the Track of Count Variable as Mentioned in (2). 
    // the 2nd Approch does what we want without Calling the useEffect again after the Initial Render.  
    // If we have to Call some function inside useEffect; it's ideal to define that function inside the useEffect Hook aswell to Maintain/Mangage Dependancy Array

    // function doSomething(someProps){
    //     console.log(someProps)
    // }
    useEffect(()=> {
        // This is wrong as it ignores the dependancy array even when the function doSomething Depends on 'someProps'
        // doSomething()
        // The Better Approch
        // function doSomething2(someProps){
        //     console.log(someProps)
        // }
        // doSomething2()
        const interval = setInterval(tick, 1000)
        console.log('Renders?')
        return(()=>{
            clearInterval(interval)
        })
    // }, [someProps])
    }, [])

  return (
    <div>
        <h2> {count} </h2>
    </div>
  )
}

export default IntervalHookCounter