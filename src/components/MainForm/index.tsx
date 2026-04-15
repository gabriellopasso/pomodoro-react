import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useState } from 'react';

export function MainForm() {
  const [taskName, setTaskName] = useState('');

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Criar nova tarefa');
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form'>
      <div className='formRow'>
        <DefaultInput
          labelText='Task'
          id='xanax'
          type='string'
          placeholder='Digite algo'
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
        />
      </div>
      <div className='formRow'>
        <p>Proximo intervalo é de 25 minutos</p>
      </div>
      <div className='formRow'>
        <Cycles />
      </div>
      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
