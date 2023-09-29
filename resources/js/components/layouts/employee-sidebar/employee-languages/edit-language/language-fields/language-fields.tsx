import { Wrapper } from './styled';
import { EmployeeLanguage } from '../../../../../../types/employee';
import { Languages } from '../../../../../../types/language';
import SelectField from '../../../../../ui/select-field/select-field';
import XIcon from '../../../../../icons/x-icon';
import Button from '../../../../../ui/button/button';

type LanguageFieldsProps = {
  currentLanguage: EmployeeLanguage;
  languages: Languages;
  languageChangeHandler: (employeeLanguage: EmployeeLanguage) => void;
  levelChangeHandler: (employeeLanguage: EmployeeLanguage) => void;
  deleteHandler: (employeeLanguage: EmployeeLanguage) => void;
};

export default function LanguageFields({
  currentLanguage,
  languages,
  languageChangeHandler,
  levelChangeHandler,
  deleteHandler,
}: LanguageFieldsProps): JSX.Element {
  return (
    <Wrapper>
      <SelectField
        label="Язык"
        options={languages.map((language) => ({ value: language.id, label: language.name }))}
        value={currentLanguage.id}
        onChange={languageChangeHandler(currentLanguage)}
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
        value={currentLanguage.level}
        onChange={levelChangeHandler(currentLanguage)}
      />

      <Button
        type="button"
        title="Удалить язык"
        warning
        onClick={deleteHandler(currentLanguage)}
      >
        <XIcon width={16} height={16} />
      </Button>
    </Wrapper>
  );
};
