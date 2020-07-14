import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}><NavLink to={path}>{props.name}</NavLink></div>

}
const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}
const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Karina' },
        { id: 2, name: 'Matthew' },
        { id: 3, name: 'Ihar' },
        { id: 4, name: 'Stephano' },
        { id: 5, name: 'Bru' },
    ]
    let messagesData = [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How is your it-kamasutra?' },
        { id: 3, message: 'Yo' },
    ]


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                < DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                < DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                < DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                < DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                < DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
            </div>
        </div>
    )
}

export default Dialogs; 