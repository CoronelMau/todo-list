import { Input, Label } from '../Style/Modal';

export default function Field(props) {
  const { updateValue, title, info } = props;

  const handleChange = (e) => {
    updateValue(e.target.value);
  };

  return (
    <div>
      <Label> {title}</Label>
      <Input required={true} value={info} onChange={handleChange} />
    </div>
  );
}
