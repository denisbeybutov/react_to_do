import { useState } from "react"
import './TicTacToe.css'
import { set } from "lodash";

export default function TicTacToe(){
    const [player, setPlayer] = useState('O');
    const [disabled, setDisabled] = useState(false)
    const [win,setWin] = useState('');
    const [step, setStep] = useState([]);

    let initial = [];
    for(let i = 0; i < 9; i++) {
        initial.push({
            id: i,
            value: ''
        })
    }

    

    const [field, setField] = useState(initial);

    function change(index){
        let newField = structuredClone(field)
        newField[index].value = player;
        setField(newField);
        
        let newSteps = structuredClone(step);
        newSteps.push(newField);
        setStep(newSteps);
        // console.log(step)
        
        if(player === 'O') setPlayer('X')
        else setPlayer('O')

        let newWinner = [];
        for(let i = 0; i<9;i++){
            newWinner.push(newField[i].value)
        }
        // console.log(newWinner)
        if( newWinner[0] === 'O' && newWinner[1] === 'O' && newWinner[2] === 'O' || 
            newWinner[3] === 'O' && newWinner[4] === 'O' && newWinner[5] === 'O' ||
            newWinner[6] === 'O' && newWinner[7] === 'O' && newWinner[8] === 'O' ||
            newWinner[0] === 'O' && newWinner[3] === 'O' && newWinner[6] === 'O' ||
            newWinner[1] === 'O' && newWinner[4] === 'O' && newWinner[7] === 'O' ||
            newWinner[2] === 'O' && newWinner[5] === 'O' && newWinner[8] === 'O' ||
            newWinner[0] === 'O' && newWinner[4] === 'O' && newWinner[8] === 'O' ||
            newWinner[2] === 'O' && newWinner[4] === 'O' && newWinner[6] === 'O' 
           
           
            
        ) {
            // console.log('end')
            setDisabled(true);
            setWin('Выиграл игрок O')
            setPlayer('');

        }  else if (
            newWinner[0] === 'X' && newWinner[1] === 'X' && newWinner[2] === 'X' || 
            newWinner[3] === 'X' && newWinner[4] === 'X' && newWinner[5] === 'X' ||
            newWinner[6] === 'X' && newWinner[7] === 'X' && newWinner[8] === 'X' ||
            newWinner[0] === 'X' && newWinner[3] === 'X' && newWinner[6] === 'X' ||
            newWinner[1] === 'X' && newWinner[4] === 'X' && newWinner[7] === 'X' ||
            newWinner[2] === 'X' && newWinner[5] === 'X' && newWinner[8] === 'X' ||
            newWinner[0] === 'X' && newWinner[4] === 'X' && newWinner[8] === 'X' ||
            newWinner[2] === 'X' && newWinner[4] === 'X' && newWinner[6] === 'X' 
        ) {
            // console.log('end')
            setDisabled(true);
            setWin('Выиграл игрок X')
            setPlayer('');
        }
        

            
    } 

    function goToStep(index){
        setField(step[index]);
        let newSteps = step.filter((item,i) => i <= index )
        setStep(newSteps);
    }

    return (
        <>
            <p>Следующий игрок: {player}</p>
            <div className="field">
                <div className="row">
                    <button disabled={disabled} onClick={()=>change(0)} className="col">{field[0].value}</button>
                    <button disabled={disabled} onClick={()=>change(1)} className="col">{field[1].value}</button>
                    <button disabled={disabled} onClick={()=>change(2)} className="col">{field[2].value}</button>
                </div> 
                <div className="row">
                    <button disabled={disabled} onClick={()=>change(3)} className="col">{field[3].value}</button>
                    <button disabled={disabled} onClick={()=>change(4)} className="col">{field[4].value}</button>
                    <button disabled={disabled} onClick={()=>change(5)} className="col">{field[5].value}</button>
                </div> 
                <div className="row">
                    <button disabled={disabled} onClick={()=>change(6)} className="col">{field[6].value}</button>
                    <button disabled={disabled} onClick={()=>change(7)} className="col">{field[7].value}</button>
                    <button disabled={disabled} onClick={()=>change(8)} className="col">{field[8].value}</button>
                </div>
            </div>
            <div className="steps">
                <p className="steps__header">Шаги. {win}</p>
                <ol className="steps__list">                    
                    {step.map((item,index) => {
                       return <button onClick={()=>goToStep(index)} key={index} className="steps__button button">
                            <li className="steps__item">{index+1}-й ход</li>
                        </button>
                    })}
                   
                </ol>
            </div>
        </>
    )
}