import React from "react";
import closeIcon from '../images/Close-Icon.svg'

export function PopupWithForm(props) {
    const test = props.open === true;
    if (test) {
        return (
            <div className="popup popup_opened">
                <div className="popup__content">
                    <button className="popup__close" type="button" ><img className="popup__close-icon" src={closeIcon} alt="Х" onClick={props.onClose} /></button>
                    <h3 className="popup__title">{props.title}</h3>
                    <form className="popup__author-edit" method="post" noValidate>
                        {props.dataPopup}
                        <button type="submit" className="popup__save">{props.submit}</button>
                    </form>
                </div>
            </div>
        )
    } else {
        return (
            <div className="popup">
                <div className="popup__content">
                    <button className="popup__close" type="button" ><img className="popup__close-icon" src={closeIcon} alt="Х" /></button>
                    <h3 className="popup__title">{null}</h3>
                    <form className="popup__author-edit" method="post" noValidate>
                        {null}
                        <button type="submit" className="popup__save">{null}</button>
                    </form>
                </div>
            </div>
        )
    }
}