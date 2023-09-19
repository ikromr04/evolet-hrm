import { AppRoute } from "../../../../const";
import NavigationButton from "./navigation-button/navigation-button";
import { NavigationItem, NavigationList } from "./styled";

export default function ProfileNavigation(): JSX.Element {
  return (
    <NavigationList>
      <NavigationItem>
        <NavigationButton href={AppRoute.ProfilePersonal}>
          Личное
        </NavigationButton>
        <NavigationButton href={AppRoute.ProfileWork}>
          Работа
        </NavigationButton>
        <NavigationButton href={AppRoute.ProfileAbsence}>
          Отсутствия
        </NavigationButton>
        <NavigationButton href={AppRoute.ProfileEfficiency}>
          Эффективность
        </NavigationButton>
        <NavigationButton href={AppRoute.ProfileDocuments}>
          Документы
        </NavigationButton>
      </NavigationItem>
    </NavigationList>
  );
}
