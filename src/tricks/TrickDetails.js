import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TrickDetailsCard } from '../functions/TrickDetailsCard'

export const TrickDetails = () => {
    const [trick, setTrick] = useState({})
    const [steps, setSteps] = useState([])

    const { trickId } = useParams()
   
    useEffect(() => {
        fetch(
            `http://localhost:8088/steps?trickId=${trickId}`
        )
            .then((res) => res.json())
            .then((steps) => {
                setSteps(steps)
            })
    }, [])

    useEffect(() => {
        fetch(
            `http://localhost:8088/tricks/${trickId}`
        )
            .then((res) => res.json())
            .then((trickData) => {
                setTrick(trickData)
            })
    }, [])

    
        const sortedSteps = steps.sort((a,b) => {
            return a.order - b.order
        })

    

    return (
        <TrickDetailsCard steps={steps} />
    )
}

        // <section>
        //     <h1>
        //         {trick.name}
        //     </h1>
        //     <div className='trick_steps'>
        //         {sortedSteps.map((step) => {
        //             return (<>
        //                 <h3>Step {step.order}.</h3>
        //                 <article>
        //                     {step.details}
        //                 </article>
        //                 </>
        //             )
        //         })}
        //     </div>

        //     <div>
        //         Difficulty: {trick.difficulty} / 5
        //     </div>
        // </section>