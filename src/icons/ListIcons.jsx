import React, { useState } from 'react'
import cardData from '../utils/CardData'
import './styles/ListIcons.css'


const ListIcons = () => {
    const [cardList, setCardList] = useState(cardData.sort(()=> Math.random() - 0.5))
    const [prevIndexCard, setPrevIndexCard] = useState(-1)
  //  const cardList = 

    const selectedCard = index =>{
      cardList[index].status = 'selected'
      setCardList([ ...cardList ])
      if(prevIndexCard === -1){
        setPrevIndexCard(index)
      }else{
        //se ejecuta en la 2 tarjeta que seleccionamos
        validateCards(index)
      }
      
    }

    

    const validateCards = (newIndexCard) =>{
        setTimeout(()=>{
            const prev = cardList[prevIndexCard]
            const current = cardList[newIndexCard]
            if(prev.icon === current.icon){
               prev.status = 'up'
                current.status='up'
            }else{
                prev.status = 'down'
                current.status = 'down'
            }
           
            setCardList([...cardList])
            setPrevIndexCard(-1)
        },1000)

       
    }
    

  return (
    
    <div className='card'>
            <h2>Memory game</h2>
           <div className="cards__container">
           { 
            cardList.map((card, i) => (
               <div 
               className={`cards_container-card ${card.status}`} 
               key={card.id}
               onClick={()=> selectedCard(i)}
               >
                 {
                    card.status !== 'down' ?  (<i className={card.icon}  ></i>)  :  (<i className="fa-solid fa-lock"></i>)              }
                 
               </div>
            ))
        }     
            </div> 
        
    </div>
  )
}

export default ListIcons