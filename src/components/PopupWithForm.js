import React from "react";
import closeIcon from '../images/Close-Icon.svg'

export function PopupWithForm(props) {
    const test = props.open === true;

    return (
        <div className={`popup  ${test ? 'popup_opened' : ''}`}>
            <div className="popup__content">
                <button className="popup__close" type="button" ><img className="popup__close-icon" src={closeIcon} alt="Х" onClick={props.onClose} /></button>
                <h3 className="popup__title">{props.title}</h3>
                <form className="popup__author-edit" method="post" noValidate>
                    {props.children}
                    <button type="submit" className="popup__save">{props.submit}</button>
                </form>
            </div>
        </div>
    )
}
