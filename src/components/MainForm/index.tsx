import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';

export function MainForm() {
  return (
    <form className='form'>
      <div className='formRow'>
        <DefaultInput
          labelText='Task'
          id='xanax'
          type='string'
          placeholder='Digite algo'
          //disabled
          defaultValue='valor preenchido'
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
