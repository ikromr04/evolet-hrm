import { EmployeeLanguages } from '../../../../../types/employee';
import BoxInner from '../../../../ui/box-inner/box-inner';
import DescriptionList from '../../../../ui/description-list/description-list';
import Text from '../../../../ui/text/text';

type LanguagesListProps = {
  languages: EmployeeLanguages | null;
};

export default function LanguagesList({ languages }: LanguagesListProps): JSX.Element {
  const transformLanguages = (languages: EmployeeLanguages) =>
    languages.reduce((acc: { [key: string]: string; }, language) => {
      acc[language.name] = language.level;
      return acc;
    }, {});

  if (!languages || !languages.length) {
    return (
      <BoxInner>
        <Text>Не заполнено</Text>
      </BoxInner>
    );
  }

  return (
    <BoxInner>
      <DescriptionList list={transformLanguages(languages)} detailedInverse />
    </BoxInner>
  );
};
