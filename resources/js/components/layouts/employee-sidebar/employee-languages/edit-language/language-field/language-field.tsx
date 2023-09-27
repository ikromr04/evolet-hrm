import { DeleteButton, StyledItem } from './styled';
import { EmployeeLanguage } from '../../../../../../types/employee';
import { Languages } from '../../../../../../types/language';
import SelectField from '../../../../../ui/select-field/select-field';
import XIcon from '../../../../../icons/x-icon';

type LanguageFieldProps = {
  currentLanguage: EmployeeLanguage;
  languages: Languages;
  languageChangeHandler: (employeeLanguage: EmployeeLanguage) => void;
  levelChangeHandler: (employeeLanguage: EmployeeLanguage) => void;
  deleteHandler: (employeeLanguage: EmployeeLanguage) => void;
};

export default function LanguageField({
  currentLanguage,
  languages,
  languageChangeHandler,
  levelChangeHandler,
  deleteHandler,
}: LanguageFieldProps): JSX.Element {
  return (
    <StyledItem>
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

      <DeleteButton
        type="button"
        title="Удалить"
        onClick={deleteHandler(currentLanguage)}
        error
      >
        <XIcon width={12} height={13} />
      </DeleteButton>
    </StyledItem>
  );
};
