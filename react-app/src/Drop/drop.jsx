import { useEffect, useState } from 'react'
import { useRef } from 'react';
import './drop.css'

export default function Drop(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const ref = useRef();
    useEffect(()=>{
        const checkIfClickedOutside = (e) => {
            if(isMenuOpen && ref.current && !ref.current.contains(e.target)){
                setIsMenuOpen(false)
            }
        };
        document.addEventListener('click', checkIfClickedOutside);
        return () => {
            document.removeEventListener('click', checkIfClickedOutside);
        }
    }, [isMenuOpen])
    return(
        <div className='drop__wrapper' ref={ref}>
        
            <button 
                className='button'
                onClick={()=>setIsMenuOpen(!isMenuOpen)}
            >   
                Click me
            </button>
            {isMenuOpen && (
                <ul className='list'>
                    <li className='list-item'>Dropdown option 1</li>
                    <li className='list-item'>Dropdown option 2</li>
                    <li className='list-item'>Dropdown option 3</li>
                    <li className='list-item'>Dropdown option 4</li>
                </ul>
            )}
        </div>
    )
}