import { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ addCard }) => {
    const [inputs, setInputs] = useState({
        image: "",
        value: "",
        suit: "",
    });

    const handleInputChange = (event) => {
        const { target } = event;
        const { name } = target;
        const { value } = target;

        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addCard(inputs);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="image">Endereço da imagem da carta</label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    onChange={handleInputChange}
                    value={inputs.image}
                />
            </div>
            <div>
                <label htmlFor="value">Nome da carta</label>
                <input
                    type="text"
                    id="value"
                    name="value"
                    onChange={handleInputChange}
                    value={inputs.value}
                />
            </div>
            <div>
                <label htmlFor="suit">Naipe da carta</label>
                <input
                    type="text"
                    id="suit"
                    name="suit"
                    onChange={handleInputChange}
                    value={inputs.suit}
                />
            </div>
            <input type="submit" />
        </form>
    );
};

//o htmlFor funciona da mesma forma que o className, o for apenas não funciona no React

//onChange vai ser usado pra mudar o "value" pois aqui o input é um componente do react e não HTML. o onChange vai lidar com a mudança do value do input

export default Form;
