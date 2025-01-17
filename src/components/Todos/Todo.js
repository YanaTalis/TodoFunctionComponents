import { RiDeleteBin5Line, RiTodoLine } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './Todo.module.css'

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoLine className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin5Line
        className={styles.deleteIcon}
        onClick={() => {
          deleteTodo(todo.id)
        }}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => {
          toggleTodo(todo.id)
        }}
      />
    </div>
  )
}

export default Todo
