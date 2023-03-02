import React from 'react';
import { Header } from './components/Header.js';
import { Main } from './components/Main.js';
import { Footer } from './components/Footer.js';
import { PopupWithImage } from './components/PopupWithImage.js';
import { PopupWithForm } from './components/PopupWithForm.js';

function App() {
  const [viewCard, setViewCard] = React.useState();
  const [openPhoto, setOpenPhoto] = React.useState(false);
  const [openPopupAvatar, setOpenPopupAvatar] = React.useState(false);
  const [cardDelete, setCardDelete] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState(false);
  const [addCard, setAddCard] = React.useState(false);

  const addPhoto = () => {
    setAddCard(true);
  };

  const userInfoEdit = () => {
    setUserInfo(true);
  };

  const popupAvatar = () => {
    setOpenPopupAvatar(true);
  };

  function deleteCard() {
    setCardDelete(true);
  };

  function openCard(data) {
    setViewCard(data);
    setOpenPhoto(true);
  };

  const closePopup = () => {
    setViewCard(null);
    setOpenPhoto(false);
    setOpenPopupAvatar(false);
    setCardDelete(false);
    setUserInfo(false);
    setAddCard(false);
  };
  return (
    <>
      <Header />
      <Main
        onClickAvatar={popupAvatar}
        onClickCard={openCard}
        deleteCard={deleteCard}
        onClickUserInfo={userInfoEdit}
        onClickAddPhoto={addPhoto}
      />
      <Footer />
      <PopupWithImage popupOpen={openPhoto} data={viewCard} onClose={closePopup} />

      <PopupWithForm 
        open={openPopupAvatar} 
        onClose={closePopup} 
        title={'Обновить аватар'} 
        submit={'Сохранить'}
        dataPopup={
     <>
        <input 
          className="popup__input-style popup__input-style_edit_work"
          id="linkAvatar"
          required
          placeholder="Ссылка на аватар"
          type="url"/>
        <span 
          className="popup__form-error popup__form-error_from-avatar" 
           id="linkAvatar-error"></span>
     </>
    }/>
      <PopupWithForm
       open={addCard} 
       onClose={closePopup} 
       title={'Новое место'}
       submit={'Создать'}
       dataPopup= {
        <>
         <input
                 className="popup__input-style popup__input-style_edit_name"
                 id="titlePhoto"
                 required
                 placeholder="Название"
                 type="text"
                 minLength="2"
                 maxLength="30"
                 data-valid-value="в поле «Название» должно быть от 2 до
                 30 символов"/>
             <span className="popup__form-error popup__form-error_position"
                 id="titlePhoto-error"></span>
             <input 
                 className="popup__input-style popup__input-style_edit_work"
                 id="linkPhoto"
                 minLength="2"
                 maxLength="400"
                 required
                 placeholder="Ссылка на картинку"
                 type="url"/>
             <span className="popup__form-error" id="linkPhoto-error"></span>
        </>}
      />
      <PopupWithForm 
        open={userInfo} 
        onClose={closePopup}
        title={'Редактировать профиль'} 
        submit={'Сохранить'}
        dataPopup={
          <>
            <input
                className="popup__input-style popup__input-style_edit_name"
                id="name"
                placeholder="Имя"
                type="text"
                minLength="2"
                maxLength="40"
                required
                data-valid-value="в поле «Имя» должно быть от 2 до
                40
                символов"/>
            <span 
                className="popup__form-error popup__form-error_position" 
                id="name-error"></span>
            <input
                className="popup__input-style popup__input-style_edit_work"
                id="work"
                placeholder="О себе"
                type="text"
                minLength="2"
                maxLength="200"
                required
                data-valid-value="в поле «О себе» должно быть от 2 до 200 символов"/>
            <span 
                className="popup__form-error" 
                id="work-error"></span>
          </>
        }
        />
      <PopupWithForm 
        open={cardDelete} 
        onClose={closePopup} 
        title={'Вы уверены?'}
        submit={'Да'}
      />
    </>
  )
}



export default App;
