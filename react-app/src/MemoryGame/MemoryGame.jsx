import { useState } from 'react';
import './MemoryGame.css'
import _ from 'lodash';

export default function MemoryGame({images}){

    let newImages = [...images, ...images];
    let shuffledImages = _.shuffle(newImages);
    let initial = [];
    for(let i = 0; i < shuffledImages.length; i++) {
        initial.push({
            id: i,
            link: shuffledImages[i],
            hidden: ' hidden',
            noedit: false
        })
    }

    const [imageObjects, setImagesObjects] = useState(initial);
    
    function openImg(index){
        let newImageObjects = structuredClone(imageObjects);
        

        if(newImageObjects[index].hidden === ' hidden') {
            newImageObjects[index].hidden = '';
        }
        else newImageObjects[index].hidden = ' hidden';

        for(let i = 0; i < newImageObjects.length; i++) {
            const el = newImageObjects[i];
            const cur = newImageObjects[index];
            if(el.hidden === '' && el.link !== cur.link && i !== index && el.noedit !== true) {
                
                el.hidden = ' hidden';
               
            }
            else if(el.hidden === '' && el.link === cur.link && i !== index){
                
                el.noedit = true;
                cur.noedit = true;
            }
            
        }
        
        setImagesObjects(newImageObjects);
        
    }

    function reset(){
        setImagesObjects(initial);
    }

    return (
        <div className='memory__wrapper'>
            <p>Memory Game</p>
            <div className="pictures">
                {
                    imageObjects.map((image,index) => {
                        return <button 
                                  key={index} 
                                  className="wrapper__img"
                                  onClick={()=>openImg(index)}>
                                    <img  className={'img ' + image.hidden} src={image.link}/>
                                </button>
                    })
                }
            </div>
            <p></p>
            <button onClick={reset} className='button'>Обновить</button>
        </div>
    )
}