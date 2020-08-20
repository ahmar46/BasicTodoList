import React from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';

class App extends React.Component {
	state = {
		todos: [
			{
				id: 1,
				title: 'Take out Trash',
				completed: false,
			},
			{
				id: 2,
				title: 'Make Lunch',
				completed: false,
			},
			{
				id: 3,
				title: 'Fuck Some Hot Chick',
				completed: false,
			},
			{
				id: 4,
				title: 'Post on Instagram',
				completed: false,
			},
			{
				id: 5,
				title: 'Pay the bills',
				completed: false,
			},
			{
				id: 6,
				title: 'Wash the Bikes',
				completed: false,
			},
			{
				id: 7,
				title: 'Fuck Some Hot Chick',
				completed: false,
			},
			{
				id: 8,
				title: 'Learn React',
				completed: false,
			},
			{
				id: 9,
				title: 'Clean Room',
				completed: false,
			},
			{
				id: 10,
				title: 'Stay Electrifying',
				completed: false,
			},
		],
	};

	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			}),
		});
	};

	delTodo = (id) => {
		this.setState({
			todos: [...this.state.todos.filter((todo) => todo.id !== id)],
		});
	};

	addTodo = (title) => {
		const newTodo = { id: 11, title: title, completed: false };
		this.setState({ todos: [...this.state.todos, newTodo] });
	};

	render() {
		return (
			<div className="App">
				<div className="container">
					<Header />
					<AddTodo addTodo={this.addTodo} />
					<Todos
						todos={this.state.todos}
						markComplete={this.markComplete}
						delTodo={this.delTodo}
					/>
				</div>
			</div>
		);
	}
}

export default App;
