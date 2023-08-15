import { Label, Input } from '../Style/FieldTitle';

export default function FieldTitle(props) {
  const { updateValue, title, info } = props;

  const handleChange = (e) => {
    updateValue(e.target.value);
  };

  return <div></div>;
}
