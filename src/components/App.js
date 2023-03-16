import React from 'react';
import { Header } from './Header.js';
import { api } from "../utils/Api.js";
import { Main } from './Main.js';
import { Footer } from './Footer.js';
import { ImagePopup } from './ImagePopup.js';
import { PopupWithForm } from './PopupWithForm.js';
import { EditAvatarPopup } from './EditAvatarPopup.js';
import { EditProfilePopup } from './EditProfilePopup.js';
import { AddPlacePopup } from './AddPlacePopup.js'
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [photoOpen, setPhotoOpen] = React.useState(false);
  const [popupAvatarOpen, setPopupAvatarOpen] = React.useState(false);
  const [isCardDeletePopupOpen, setIsCardDeletePopupOpen] = React.useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = React.useState(false);
  const [isAddCardPopupOpened, setIsAddCardPopupOpened] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    'name': '',
    'about': '',
    'avatar': '',
    '_id': '',
    'cohort': ''
  });
  React.useEffect(() => {
    api.getCards()
      .then((dataCard) => {
        setCards(dataCard);
      })
      .catch((err) => {
        console.log(`Ошибка. Не удалось загрузить карточки 😰: ${err}`);
      });
  }, []);

  React.useEffect(() => {
    api.getUserInformation()
      .then(data => {
        setCurrentUser(data)
      })
      .catch((err) => {
        console.log(`Ошибка данных😩: ${err}`);
      })
  }, []);

  const handleOpenAddCardPopup = () => {
    setIsAddCardPopupOpened(true);
  };

  const handleOpenEditProfilePopup = () => {
    setIsProfilePopupOpen(true);
  };

  const handleOpenEditAvatarPopup = () => {
    setPopupAvatarOpen(true);
  };

  // function handleOpenCardDeletePopup() {
  //   setIsCardDeletePopupOpen(true);
  // };

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
  function handleCardDelete(cardId) {
    api.deleteCard(cardId)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== cardId))
      })
      .catch(err => { console.log(`Сбой. Не удалось удалить карточку...🥺${err}`) })
  };
  const handleCardLike = (card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
      })
      .catch(err => { console.log(`Это провал... Не удалось поставить(удалить) лайк... 🥵${err}`) });
  }
  const handleAddPlaceSubmit = (title, link) => {
    api.downloadNewCard({ title, link })
      .then(newCard => {
        setCards([newCard, ...cards]);
        closeAllPopups()
      })
      .catch(err => { console.log(`Фиаско. Не удалось добавить карточку 🤪 ${err}`) })
  }
  const sendAvatarToServer = (link) => {
    api.changeAvatar(link)
      .then(link => {
        setCurrentUser(link)
        closeAllPopups()
      })
      .catch(err => { console.log(`Ошибка. Аватар не обновлён 🤔: ${err}`) })
  }
  const sendProfileToServer = (textData) => {
    api.changeUserInfo(textData)
      .then(text => {
        setCurrentUser(text)
        closeAllPopups()
      })
      .catch(err => { console.log(`Ошибка. Информация о пользователе не обновлена 😟: ${err}`) })
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onClickAvatar={handleOpenEditAvatarPopup}
          onClickCard={openCard}
          //deleteCard={handleOpenCardDeletePopup}
          onClickUserInfo={handleOpenEditProfilePopup}
          onClickAddPhoto={handleOpenAddCardPopup}
          deleteCard={handleCardDelete}
          onClickLike={handleCardLike}
          cards={cards}
        />
        <Footer />
        <ImagePopup popupOpen={photoOpen} title={selectedCard.title} alt={selectedCard.alt} src={selectedCard.src} onClose={closeAllPopups} />
        <EditAvatarPopup open={popupAvatarOpen} close={closeAllPopups} saveLinkOnServer={sendAvatarToServer} />
        <EditProfilePopup open={isProfilePopupOpen} close={closeAllPopups} saveTextOnServer={sendProfileToServer} />
        <AddPlacePopup open={isAddCardPopupOpened} close={closeAllPopups} submitCard={handleAddPlaceSubmit} />

        <PopupWithForm
          open={isCardDeletePopupOpen}
          onClose={closeAllPopups}
          title={'Вы уверены?'}
          submit={'Да'}
        />
      </CurrentUserContext.Provider>
    </>
  )
}



export default App;
