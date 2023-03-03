import React from 'react';
import closeIcon from '../images/Close-Icon.svg'

export function ImagePopup(props) {
    const test = props.popupOpen === true;
    if (test) {
        return (
            <>
            <div className="popup popup_photo  popup_opened" id="open-photo">
                <div className="popup__content-photo">
                    <button className="popup__close"
                        onClick={props.onClose}
                        id="close-photo-popup" type="button"
                        name="close-popup"><img
                            className="popup__close-icon"
                            src={closeIcon}
                            alt="Х" /></button>
                    <img className="popup__open-photo"
                        src={props.card.src} alt={props.card.alt} />
                    <h2 className="popup__open-title">{props.card.title}</h2>
                </div>
            </div>
            </>
        );
    } else {
        return (<div className="popup popup_photo" id="open-photo">
            <div className="popup__content-photo">
                <button className="popup__close"
                    onClick={null}
                    id="close-photo-popup" type="button"
                    name="close-popup"><img
                        className="popup__close-icon"
                        src={closeIcon}
                        alt="Х" /></button>
                <img className="popup__open-photo"
                    src={null} alt={null} />
                <h2 className="popup__open-title">{null}</h2>
            </div>
        </div>
        );
    }
}
