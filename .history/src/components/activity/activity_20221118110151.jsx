import { set, update } from "firebase/database";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ActivityList from "../activity_list/activity_list";
import Footer from '../footer/footer';
import Header from "../header/header";
import styles from "./activity.module.css";

const Activity = ({ authService, user, repository }) => {
  const location = useLocation();
  const [loading, setloading] = useState(false);

  const [cards, setCards] = useState({});

  useEffect(() => {
    setloading(true);
    const stopSynk = repository.syncActivities(user && user.uid, (cards) => {
      setCards(cards);
      setloading(false);
    });
    return () => stopSynk();
  }, [user, repository]);

  const deleteCard = (card) => {
    const updated = { ...cards };
    delete updated[card.id];
    console.log(updated);
    console.log(cards);
    setCards(updated);

    repository.removeActivity(card);
  };

  const addJoin = (card) => {
    const updated = { ...cards }; //state를 직접 수정하면 안되어서 updated에 cards를 복사하여 card안에 있는 joinlist를 추가하려고함

    if (!updated[card.id].joinList) {
      //joinlist가 없을때
      const joinList = [
        { userImg: user && user.photoURL, name: user && user.displayName },
      ];
      updated[card.id] = { ...card, joinList };

      setCards(updated);

      repository.updateActivity(card.id, updated[card.id]);
    } else {
      // updated[card.id].joinList.filter((item) => item.userImg === user.photoURL)
      //   .length === 0 &&

      const joinList = updated[card.id].joinList.concat({
        userImg: user && user.photoURL,
        name: user && user.displayName,
      });
      updated[card.id] = { ...card, joinList };

      setCards(updated);

      //근데 왜 setCards로 cards를 업데이트 하지도 않았는데 왜 추가되어있는가?(방법1 updated로 cards복사 후 updated[card.id].joinList에 push로 추가, 방법2.updated[card.id].joinList에 concat으로 추가 ) = 해결완료 근데 왜그런진 모르겠다. 분명 복사를 했는데 왜 바뀌지?
      repository.updateActivity(card.id, updated[card.id]);
    }
  };

  const DropJoin = (card) => {
    const updated = { ...cards };

    const joinList = updated[card.id].joinList.filter(
      (item) => item.userImg !== user.photoURL
    );
    updated[card.id] = { ...card, joinList };

    setCards(updated);

    repository.updateActivity(card.id, updated[card.id]);
  };

  return (
    <>
      <ActivityList
        cards={cards}
        addJoin={addJoin}
        DropJoin={DropJoin}
        user={user}
        deleteCard={deleteCard}
      />
      <Footer></Foo>
    </>
  );
};
export default Activity;
