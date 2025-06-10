//PascalCase
//App
//HeaderHeading
import { Heading } from './components/Heading';
import './styles/theme.css';
import './styles/goblal.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Sigismubndo{' '}
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quae
        iste eius distinctio natus assumenda doloremque facere a iure aliquam,
        architecto cupiditate quaerat vel aperiam quasi nulla fugit voluptatibus
        illo.
      </p>
    </>
  );
}
