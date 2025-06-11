type DefaultInputProps = {};

export function DefaultInput(props: DefaultInputProps) {
  return (
    <>
      <label htmlFor='input'>Task</label>
      <input id='input' type='text' />
    </>
  );
}
