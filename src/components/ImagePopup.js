import React from 'react';
import closeIcon from '../images/Close-Icon.svg'

export function ImagePopup({ title, src, alt, popupOpen, onClose }) {
    const test = popupOpen === true;

    return (
        <>
            <div className={`popup popup_photo ${test ? 'popup_opened' : ''}`}>
                <div className="popup__content-photo">
                    <button className="popup__close"
                        onClick={onClose}
                        id="close-photo-popup" type="button"
                        name="close-popup"><img
                            className="popup__close-icon"
                            src={closeIcon}
                            alt="Х" /></button>
                    <img className="popup__open-photo"
                        src={src} alt={alt} />
                    <h2 className="popup__open-title">{title}</h2>
                </div>
            </div>
        </>
    );
}
