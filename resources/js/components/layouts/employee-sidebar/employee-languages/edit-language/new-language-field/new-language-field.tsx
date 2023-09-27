import { StyledItem } from './styled';
import { EmployeeLanguage } from '../../../../../../types/employee';
import { Language, Languages } from '../../../../../../types/language';
import SelectField from '../../../../../ui/select-field/select-field';
import { BaseSyntheticEvent, useState } from 'react';

type NewLanguageFieldProps = {
  languages: Languages;
  insertLanguage: (newLanguage: EmployeeLanguage) => void;
};

export default function NewLanguageField({
  languages,
  insertLanguage,
}: NewLanguageFieldProps): JSX.Element {
  const [language, setLanguage] = useState<EmployeeLanguage>({
    id: '', name: 'Не выбрано', level: '(А1) – начальный',
  });

  const handleLanguageChange = (evt: BaseSyntheticEvent) => {
    const newLanguage: Language | undefined = languages.find(({ id }) => String(id) === evt.target.value);
    if (newLanguage) {
      insertLanguage({
        ...newLanguage,
        level: language.level,
      });
    }
  };

  const handleLevelChange = (evt: BaseSyntheticEvent) => {
    setLanguage((prevLanguage) => ({
      ...prevLanguage,
      level: evt.target.value,
    }));
  };

  return (
    <StyledItem>
      <SelectField
        label="Язык"
        options={[
          { value: '', label: 'Не выбрано' },
          ...languages.map((language) => ({ value: language.id, label: language.name }))
        ]}
        value={language.id}
        onChange={handleLanguageChange}
      />
      <SelectField
        label="Уровень знания языка"
        options={[
          { value: '(А1) – начальный', label: '(А1) – начальный' },
          { value: '(А2) – ниже среднего', label: '(А2) – ниже среднего' },
          { value: '(В1) – средний', label: '(В1) – средний' },
          { value: '(В2) – выше среднего', label: '(В2) – выше среднего' },
          { value: '(C1) – продвинутый', label: '(C1) – продвинутый' },
          { value: '(C2) – профессиональный', label: '(C2) – профессиональный' },
        ]}
        value={language.level}
        onChange={handleLevelChange}
      />
    </StyledItem>
  );
};
