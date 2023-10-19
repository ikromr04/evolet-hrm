import { BaseSyntheticEvent, useState } from 'react';
import {
  ErrorMessage,
  Inner,
  Label,
  Option,
  Options,
  SelectedOption,
  SelectedOptions,
  Wrapper,
} from './styled';
import { useOutsideClick } from '../../../hooks/use-outside-click';

type MultiSelectProps = {
  className?: string;
  label?: string;
  options: { value: string; label: string }[];
  values: string[];
  onChange: (values: string[]) => void;
  errorMessage?: string;
};

function MultiSelect({
  className,
  label,
  options,
  values,
  onChange,
  errorMessage,
}: MultiSelectProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  const handleOptionChange = (value: string) => (evt: BaseSyntheticEvent) => {
    if (evt.target.checked) {
      onChange([...values, value])
      return;
    }

    onChange(values.filter((item) => item !== value))
  };

  return (
    <Wrapper
      ref={ref}
      className={className}
      open={isOpen}
      onClick={() => setIsOpen(true)}
    >
      <Inner>
        <Label>{label}</Label>
        <SelectedOptions error={errorMessage} tabIndex={0}>
          {options.filter(({ value }) => values.includes(value))
            .map(({ label }) => label).join(', ')}
        </SelectedOptions>
        <Options>
          {options.map(({ value, label }) => (
            <Option key={value}>
              <input
                type="checkbox"
                onChange={handleOptionChange(value)}
                checked={values.includes(value)}
              />
              {label}
            </Option>
          ))}
        </Options>
      </Inner>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Wrapper>
  );
};

export default MultiSelect;
