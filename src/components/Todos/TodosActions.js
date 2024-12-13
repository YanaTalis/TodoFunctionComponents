import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'
import styles from './TodosActions.module.css'

function TodosActions({deleteCompletedTodos, resetTodos, completedTodosExist}) {
  return (
    <div className={styles.todosActionContainer}>
      <Button title="Clear Completed" onClick={deleteCompletedTodos} disabled={!completedTodosExist}>
        <RiDeleteBin2Line />
      </Button>
      <Button title="Reset Todos" onClick={resetTodos} >
        <RiRefreshLine />
      </Button>
    </div>
  )
}

export default TodosActions
