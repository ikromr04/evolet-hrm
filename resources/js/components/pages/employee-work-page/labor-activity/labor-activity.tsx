import BoxInner from '../../../ui/box-inner/box-inner';
import BoxToolbar from '../../../ui/box-toolbar/box-toolbar';
import Box from '../../../ui/box/box';
import DescriptionList from '../../../ui/description-list/description-list';
import Title from '../../../ui/title/title';
import Job from './info/job';
import Position from './info/position';
import StartedWorkAt from './info/started-work-at';

function LaborActivity(): JSX.Element {
  return (
    <Box>
      <BoxToolbar>
        <Title small>Трудовая деятельность</Title>
      </BoxToolbar>
      <BoxInner>
        <DescriptionList
          list={{
            'Дата поступления на работу': <StartedWorkAt />,
            'Отдел': '',
            'Руководитель': '',
            'Должность': <Job />,
            'Позиция': <Position />,
          }}
        />
      </BoxInner>
    </Box>
  );
};

export default LaborActivity;
