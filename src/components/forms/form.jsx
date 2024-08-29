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
//dentro do target vai ser pego do event, e o name e value vai ser pego desse target
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
                <select
                    id="value"
                    name="value"
                    onChange={handleInputChange}
                    value={inputs.value}
                >
                    <option value="">Selecione</option>
                    <option value="A">A</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="J">J</option>
                    <option value="Q">Q</option>
                    <option value="K">K</option>
                </select>
            </div>
            <div>
                <label htmlFor="value">Nome da carta</label>

            </div>
            <div>
                <select
                    id="suit"
                    name="suit"
                    onChange={handleInputChange}
                    value={inputs.suit}
                >
                    <option value="">Selecione</option>
                    <option value="DIAMONDS">DIAMONDS</option>
                    <option value="SPADES">SPADES</option>
                    <option value="HEARTS">HEARTS</option>
                    <option value="CLUBS">CLUBS</option>
                </select>
            </div>
            <input type="submit" />
        </form>
    );
};

//o htmlFor funciona da mesma forma que o className, o for é uma palavra reservada no React

//onChange vai ser usado pra mudar o "value" pois aqui o input é um componente do react e não HTML. o onChange vai lidar com a mudança do value do input

Form.propTypes = {
    addCard: PropTypes.func.isRequired,
};

export default Form;
