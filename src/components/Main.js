import React from 'react';
import { api } from "../utils/Api.js";
import { Card } from '../components/Card.js'
import egor from '../images/egor.jpg';
import editIcon from '../images/edit-icon.svg';
import addPhotoIcon from '../images/addPhoto-icon.svg';

export function Main(props) {
    const [cards, setCards] = React.useState([]);
    const [userName, setUserName] = React.useState('Егор');
    const [userWork, setUserWork] = React.useState('Удобряю землю');
    const [userAvatar, setUserAvatar] = React.useState(egor);
    React.useEffect(() => {
        Promise.all([api.cardsFromServer(), api.userInfoFromServer()])
            .then(([dataCard, dataUser]) => {
                setCards(
                    dataCard.map((item) => (
                        {
                            id: item._id,
                            src: item.link,
                            title: item.name,
                            alt: item.name,
                            likes: item.likes
                        }
                    ))
                );
                setUserName(dataUser.name);
                setUserWork(dataUser.about);
                setUserAvatar(dataUser.avatar);
            });
    }, []);
    return (
        <main className="content">
            <section className="profile">
                <div className="author">
                    <img className="author__avatar" src={userAvatar}
                        alt="Он живет на дне" />
                    <button className="author__avatar-button" onClick={props.onClickAvatar}></button>
                    <div className="author__info-zone">
                        <div className="author__title-zone">
                            <h1 className="author__name">{userName}</h1>
                            <button type="button" onClick={props.onClickUserInfo}
                                className="author__edit"><img
                                    className="author__edit-icon"
                                    src={editIcon}
                                    alt="изменить" />
                            </button>
                        </div>
                        <p className="author__work">{userWork}</p>
                    </div>

                </div>
                <button className="profile__add-photo" type="button"
                    onClick = {props.onClickAddPhoto}><img
                        className="profile__add-photo-icon"
                        src={addPhotoIcon}
                        alt="добавить фото" /></button>
            </section>
            <section className="elements">
                {cards.map((item) => (<Card key={item.id} onClickCard={props.onClickCard} data={item} deleteCard={props.deleteCard} />))}
            </section>
        </main>
    )
}
