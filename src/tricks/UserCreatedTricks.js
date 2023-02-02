import ModalDeleteScreen from '../functions/ModalDeleteScreen'

export const UserCreatedTricks = ( { trickList, update } ) => {    
    
    const deleteListing = (id) => {
        fetch(`http://localhost:8088/tricks/${id}`, {
            method: "DELETE"
        }).then(update())
    }

   return trickList.map(singleTrick => {
        return <div key={singleTrick.id}><h1>
            {singleTrick.name}
        </h1>
        <article>
            {singleTrick.description}
        </article>
        <ModalDeleteScreen singleTrick={singleTrick} confirmDelete={deleteListing} /></div>
    })
}
