import { useState } from 'react'
import './UserList2.css'



export default function UserList2(){

    const initial = [ 
        { id: 1,
          name: 'Creola Katherine Johnson',
          profession: 'Mathematician'
        },
        { id: 2,
          name: 'Mario José Molina-Pasquel Henríquez',
          profession: 'Chemist'
        },
        { id: 3, 
            name: 'Mohammad Abdus Salam', 
            profession: 'Physicist'
        }, 
        { id: 4, 
            name: 'Percy Lavon Julian', 
            profession: 'Chemist' 
        }, 
        { id: 5,
            name: 'Katherine Johnson',
            profession: 'Programmer' 
        }, 
        { id: 6,
            name: 'Jane Johnson',
            profession: 'Astronaut' 
        }, 
        { id: 7, 
            name: 'Cael Thas', 
            profession: 'Manager' 
        } 
    ]

    const [listOfUsers, setListOfUsers] = useState(initial);
    const [resetList, setResetList] = useState(initial);
    const [hiddenListOfProf, setHiddenListOfProf] = useState(' hidden');
    const [user, setUser] = useState({});

    function showProf(prof){
        
        setListOfUsers(prevList => {
            const filtered = prevList.filter(user => user.profession === prof);
            return filtered;
          });
        setHiddenListOfProf(' hidden');
    }

    function reset(){
        setListOfUsers(resetList);
    }

    function toggleListOfProf(){
        if(hiddenListOfProf === ' hidden') setHiddenListOfProf('');
        else setHiddenListOfProf(' hidden');
    }

    function changeName(e){
        
        const newUser = {...user, name: e.target.value}
        setUser(newUser);
    }
    function changeProf(e){
        
        const newUser = {...user, profession: e.target.value}
        setUser(newUser);
    }

    function addNewUser(){
        let newListOfUsers = structuredClone(listOfUsers)
        newListOfUsers.unshift(user)
        setListOfUsers(newListOfUsers);
        setUser({});
        setResetList(newListOfUsers)

    }

    return (
        <div className='users'>
            <p>Список пользователей</p>
            <p>Добавить нового пользователя</p>
            
            <div className="new-user">
                <input 
                    className='new-user__input'
                    type="text"
                    placeholder='Введите полное имя'
                    onChange={changeName}/>
                <input
                    className='new-user__input'
                    type="text"
                    placeholder='Введите профессию'
                    onChange={changeProf}/>
                <button
                    className='new-user__button button'
                    onClick={addNewUser}>Добавить</button>
            </div>
            
            
            <div className="buttons">
                <button
                    className='users__button-show button'
                    onClick={toggleListOfProf}
                >
                    Показать 
                </button>
                <ul className={'profession__list' + hiddenListOfProf} >
                        <li className='profession__item'>
                            <button 
                                className='profession__button-item'
                                onClick={()=>showProf('Chemist')}>
                                    Химиков
                            </button>
                        </li>
                        <li className='profession__item'>
                            <button 
                                className='profession__button-item'
                                onClick={()=>showProf('Mathematician')}>
                                    Математиков
                            </button>
                        </li>
                        <li className='profession__item'>
                            <button 
                                className='profession__button-item'
                                onClick={()=>showProf('Physicist')}>
                                    Физиков
                            </button>
                        </li>
                        <li className='profession__item'>
                            <button 
                                className='profession__button-item'
                                onClick={()=>showProf('Programmer')}>
                                    Программистов
                            </button>
                        </li>
                        <li className='profession__item'>
                            <button
                                className='profession__button-item'
                                onClick={()=>showProf('Astronaut')}>
                                    Астронавтов
                            </button>
                        </li>
                        <li className='profession__item'>
                            <button
                                className='profession__button-item'
                                onClick={()=>showProf('Manager')}>
                                    Менеджеров
                            </button>
                        </li>
                    </ul>
                <button 
                    className='users__button-reset button'
                    onClick={reset}
                >
                    Сбросить
                </button>
            </div>
            <ul className='users__list'>
                {listOfUsers.map((user,index) => {
                    return <li key={index} className='users__item'>
                        Пользователь {user.name} <br />
                        Профессия {user.profession}                  
                    </li>
                })}
            </ul>
        </div>
    )
}