import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, deleteToDo, removeToDo } from "../Redux/Action";
import "./todo.style.css";
export default function Todo() {
	const [inputData, setInputData] = useState("");
	const list = useSelector((state) => state.TodoReducer.list);
	const dispatch = useDispatch();
	return (
		<div className="main-div">
			<div className="child-div">
				<figure>
					<figcaption>Add your List here ✍️</figcaption>
				</figure>

				<div className="addItems">
					<input
						type="text"
						placeholder="write here ✍️ "
						value={inputData}
						onChange={(event) => setInputData(event.target.value)}
					/>
					<i
						className="fa fa-plus add-btn"
						onClick={() => dispatch(addToDo(inputData), setInputData(" "))}
					></i>
				</div>

				<div className="showItems">
					{list.map((elem) => {
						return (
							<div className="eachItem" key={elem.id}>
								<h3>{elem.data}</h3>
								<div className="todo-btn">
									<i
										className="fa fa-trash add-btn"
										title="delete item"
										onClick={() => dispatch(deleteToDo(elem.id))}
									></i>
								</div>
							</div>
						);
					})}
				</div>

				<div className="showItems">
					<button
						className="btn effect04"
						data-sm-link-text="remove All"
						onClick={() => dispatch(removeToDo())}
					>
						<span>Check List</span>
					</button>
				</div>
			</div>
		</div>
	);
}
