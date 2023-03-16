import React from "react";
import { PopupWithForm } from "./PopupWithForm";

export function EditAvatarPopup({ toResetTheForm, saveLinkOnServer, open, close }) {
    const linkToAvatar = React.useRef();
    const submitAvatar = (e) => {
        e.preventDefault();
        saveLinkOnServer(linkToAvatar.current.value);
        close()
        e.target.reset()// на просторах "Етих Антарнетов" нашел способ сбросить форму. Не знаю правильно ли это , но работает  :)
    }

    return (
        <PopupWithForm
            open={open}
            onClose={close}
            onSubmit={submitAvatar}
            title={'Обновить аватар'}
            submit={'Сохранить'}
            children={
                <>
                    <input ref={linkToAvatar}
                        className="popup__input-style popup__input-style_edit_work"
                        id="linkAvatar"
                        required
                        placeholder="Ссылка на аватар"
                        type="url" />
                    <span
                        className="popup__form-error popup__form-error_from-avatar"
                        id="linkAvatar-error"></span>
                </>
            } />
    )
}