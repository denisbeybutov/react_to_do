import { useState } from 'react'
import './UserList.css'



export default function UserList(){

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

    function showChemist(){
        const newListOfUsers = listOfUsers.filter(user => user.profession === 'Chemist');
        setListOfUsers(newListOfUsers)
    }

    function reset(){
        setListOfUsers(initial);
    }

    return (
        <div className='users'>
            <p>Список пользователей</p>
            <button
                className='users__button button'
                onClick={showChemist}
            >
                Показать химиков
            </button>
            <button 
                className='users__button-reset button'
                onClick={reset}
            >
                Сбросить
            </button>
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