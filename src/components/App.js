import React from 'react';
import { Header } from './Header.js';
import { Main } from './Main.js';
import { Footer } from './Footer.js';
import { ImagePopup } from './ImagePopup.js';
import { PopupWithForm } from './PopupWithForm.js';

function App() {
  const [selectedCard, setSelectedCard] = React.useState({});
  const [photoOpen, setPhotoOpen] = React.useState(false);
  const [popupAvatarOpen, setPopupAvatarOpen] = React.useState(false);
  const [isCardDeletePopupOpen, setIsCardDeletePopupOpen] = React.useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = React.useState(false);
  const [isAddCardPopupOpened, setIsAddCardPopupOpened] = React.useState(false);

  const handleOpenAddCardPopup = () => {
    setIsAddCardPopupOpened(true);
  };

  const handleOpenEditProfilePopup = () => {
    setIsProfilePopupOpen(true);
  };

  const handleOpenEditAvatarPopup = () => {
    setPopupAvatarOpen(true);
  };

  function handleOpenCardDeletePopup() {
    setIsCardDeletePopupOpen(true);
  };

  function openCard(data) {
    setSelectedCard(data);
    setPhotoOpen(true);
  };

  const closeAllPopups = () => {
    setSelectedCard('');
    setPhotoOpen(false);
    setPopupAvatarOpen(false);
    setIsCardDeletePopupOpen(false);
    setIsProfilePopupOpen(false);
    setIsAddCardPopupOpened(false);
  };

  return (
    <>
      <Header />
      <Main
        onClickAvatar={handleOpenEditAvatarPopup}
        onClickCard={openCard}
        deleteCard={handleOpenCardDeletePopup}
        onClickUserInfo={handleOpenEditProfilePopup}
        onClickAddPhoto={handleOpenAddCardPopup}
      />
      <Footer />
      <ImagePopup popupOpen={photoOpen} title={selectedCard.title} alt={selectedCard.alt} src={selectedCard.src}  onClose={closeAllPopups}/>

      <PopupWithForm 
        open={popupAvatarOpen} 
        onClose={closeAllPopups} 
        title={'Обновить аватар'} 
        submit={'Сохранить'}
        children={
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
       open={isAddCardPopupOpened} 
       onClose={closeAllPopups} 
       title={'Новое место'}
       submit={'Создать'}
       children= {
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
        open={isProfilePopupOpen} 
        onClose={closeAllPopups}
        title={'Редактировать профиль'} 
        submit={'Сохранить'}
        children={
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
        open={isCardDeletePopupOpen} 
        onClose={closeAllPopups} 
        title={'Вы уверены?'}
        submit={'Да'}
      />
    </>
  )
}



export default App;
