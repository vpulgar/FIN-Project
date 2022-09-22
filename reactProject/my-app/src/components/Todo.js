//Agreguemos states. Aca hay un Hook
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
	//Usamos el state
	const [modalIsOpen, setModalIsOpen] = useState(false);
	// En normal JS sería
	// document.querySelector('button').addEventListener('click')
	const deleteHandler = () => {
		console.log("Clicked!");
		console.log(props.text);
		setModalIsOpen(!modalIsOpen);
	};

	const closeModalHandler = () => {
		setModalIsOpen(!modalIsOpen);
	};

	//No se ejecuta la funcion de on click {Uso de  ()} porque sino borra altiro.
	// Cuando
	return (
		<div className="card">
			<h2>{props.text}</h2>
			<div className="actions">
				<button className="btn" onClick={deleteHandler}>
					Delete
				</button>
			</div>
			{modalIsOpen && <Modal onCancel={closeModalHandler} />}
			{modalIsOpen && <Backdrop onClick={closeModalHandler} />}
		</div>
	);
}

// Esto es para que este "usable" fuera del archivo. El nombre debe ser con capital caracter.
export default Todo;
