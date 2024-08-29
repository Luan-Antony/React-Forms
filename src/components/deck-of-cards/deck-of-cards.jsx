import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Form from "../forms/form";

async function createDeck() {
    const response = await fetch(
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    const deck = await response.json();
    return deck.deck_id;
}

async function getCards(deckId) {
    const response = await fetch(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
    );
    return await response.json();
}

const CardsList = ({ cards }) => {
    return (
        <ul>
            {cards.map((card, index) => {
                return (
                    <li key={index}>
                        <img src={card.image} alt={card.value} />
                        <p>
                            {card.value} {card.suit}
                        </p>
                    </li>
                );
            })}
        </ul>
    );
};

const DeckOfCards = () => {
    const [deck, setDeck] = useState({
        cards: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            const deckId = await createDeck();
            const data = await getCards(deckId);

            setDeck({
                cards: data.cards,
            });
        };
        fetchData();
    }, []);

    const addCard = (newCard) => {
        setDeck({
            cards: [...deck.cards, newCard],
        });
        //o ...deck.cards (spread) vai separar o array de cartas dentro do cards em elementos unicos que vem do DeckOfCards preenchido, e vai adicionar a carta nova usando o setDeck que é o metodo de atualização atraves do newCard que foi passado como parametro na função. Isso tudo vai retornar um array novo com as cartas antigas + a nova carta, mudando o estado da aplicação. Pra essa função ser chamada, ela deve ser passada como uma prop no componente do Form
    };

    return (
        <section>
            <Form addCard={addCard} />
            {deck.cards.length > 0 ? (<CardsList cards={deck.cards} />) : ("Nenhuma carta encontrada")}
        </section>
    );
};

export default DeckOfCards;
