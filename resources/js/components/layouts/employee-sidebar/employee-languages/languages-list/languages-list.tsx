import { EmployeeLanguages } from '../../../../../types/employees';
import BlockNoContent from '../../../../ui/block-no-content/block-no-content';
import DescriptionList from '../../../../ui/description-list/description-list';

type LanguagesListProps = {
  languages: EmployeeLanguages | null;
};

export default function LanguagesList({ languages }: LanguagesListProps): JSX.Element {
  const transformLanguages = (languages: EmployeeLanguages) =>
    languages.reduce((acc: { [key: string]: string; }, language) => {
      acc[language.name] = language.level;
      return acc;
    }, {});

  if (!languages) {
    return (<BlockNoContent>Не заполнено</BlockNoContent>);
  }

  return (
    <DescriptionList list={transformLanguages(languages)} detailedInverse />
  );
};
