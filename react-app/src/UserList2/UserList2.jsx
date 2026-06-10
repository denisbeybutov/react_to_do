import { useId, useState } from 'react'
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
    const [user, setUser] = useState({        
        name: '',
        profession: '',
        
    });
    const [error,setError] = useState('');
    const [selected, setSelected] = useState('');

    function showProf(prof){
        setListOfUsers(resetList);
        
        setListOfUsers(prevList => {
            const filtered = prevList.filter(user => user.profession.toLowerCase() === prof.toLowerCase());
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
        const emptyUser = {
            name: '',
            profession: ''
        }

        setError('');
        
        
        if(Object.keys(user).length === 0 || Object.keys(user).length === 1 ||
            user.name === '' || user.profession === '' ) {
            // console.log('Введите имя и профессию');
            setError(prevError => {
                return 'Введите имя и профессию';
            });
            setUser(emptyUser)
            return;
        }
        
        function isValid(str){
            return /[!@#$%^&*()]/g.test(str);
           }
        
        if(isValid(user.name) || isValid(user.profession)){
            // console.log('Есть символы ')
            setError(prevError => {
                return 'Не используйте символы: ! @ # $ % ^ & * ()';
            });
            setUser(emptyUser)
            return;
        }

        function isLatin(str){
            return /^[A-Za-z]+$/.test(str)
        }
        // console.log(isLatin(user.name))
        if(!isLatin(user.name) || !isLatin(user.profession)) {
            setError(prevError => {
                return 'Пишите только на латинице';
            });
            setUser(emptyUser)
            return;
        }
        
        if(user.name.length < 2 || user.name.length > 40 ||
            user.profession.length < 5 || user.profession.length > 100
        ) {
            console.log('длина имени от 2 до 40 символов')
            setError(prevError => {
                return 'Длина имени от 2 до 40 символов. Длина профессии от 5 до 100 символов';
            });
            setUser(emptyUser)
            return;
        }

        
        let newListOfUsers = structuredClone(resetList)
        const newUser = {...user, id: crypto.randomUUID()}        
        newListOfUsers.unshift(newUser)
        setListOfUsers(newListOfUsers);
        
        setResetList(newListOfUsers)

        
        setUser(emptyUser)
        console.log(listOfUsers)
    }

    function writeSelected(e){
        console.log(e.target.value)
        setSelected(e.target.value)
    }

    function sortUsers(){
        let newUserList = structuredClone(listOfUsers)
        newUserList.sort((a, b) => a[selected].localeCompare(b[selected]))
        setListOfUsers(newUserList)
        console.log(Object.keys(user))
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
                    onChange={changeName}
                    value={user.name}/>
                <input
                    className='new-user__input'
                    type="text"
                    placeholder='Введите профессию'
                    onChange={changeProf}
                    value={user.profession}/>
                <button
                    className='new-user__button button'
                    onClick={addNewUser}>Добавить</button>
            </div>
            
            <p className='error'>{error}</p>
            
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

            <div className="sort">
                
                <select
                  className='sort__select'
                  name="sort"
                  id="sort__select"
                  value={selected}
                  onChange={writeSelected}>
                    <option value=""> -- Сортировать по -- </option>
                    {/* <option value="name">name</option>
                    <option value="profession">profession</option> */}
                    {Object.keys(user).map((item,index) => {
                        return <option key={index} value={item}>{item}</option>
                    })}
                </select>
                <button 
                    className='button'
                    onClick={sortUsers}>Сортировать</button>
            </div>

            <ul className='users__list'>
                {listOfUsers.map(user => {
                    return <li key={user.id} className='users__item'>
                        Пользователь {user.name} <br />
                        Профессия {user.profession}                  
                    </li>
                })}
            </ul>
        </div>
    )
}