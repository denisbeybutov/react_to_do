import { useState } from "react";
import { useId } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import './Modal.css'

export default function Modal({isOpen, onClose, title, children}){
    useEffect(() => {
        function handleEscapeKey(event) {
          if (event.code === 'Escape') {
            onClose();
          }
        }
      
        document.addEventListener('keydown', handleEscapeKey)
        return () => document.removeEventListener('keydown', handleEscapeKey)
      }, [])
      
    if(!isOpen) return null;

    return (
        <div className="wrapper" onClick={onClose}>
            <div className="modal" onClick={(e)=>e.stopPropagation()} >
                <div className="modal__header">
                    <h1>{title}</h1>
                </div>
                <div className="modal__body">
                    {children}
                </div>
                <button className="modal__close" onClick={onClose}>Х</button>                
            </div>            
        </div>
    )
}