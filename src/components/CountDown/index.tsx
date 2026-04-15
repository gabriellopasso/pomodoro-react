import { useTaskContext } from '../../contexts/TaskContext';
import styles from './styles.module.css';

export function CountDown() {
  const taskContent = useTaskContext();
  console.log(taskContent);

  return <div className={styles.container}>00:00</div>;
}
