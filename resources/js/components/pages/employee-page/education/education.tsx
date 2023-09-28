import dayjs from 'dayjs';
import { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Actions, EducationsWrapper } from './styled';
import EditEducation from './edit-education/edit-education';
import CreateEducation from './create-education/create-education';
import DeleteEducation from './delete-education/delete-education';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { getEmployeeEducations } from '../../../../store/employees-slice/employees-selector';
import EducationIcon from '../../../icons/education-icon';
import Title from '../../../ui/title/title';
import Hr from '../../../ui/hr/hr';
import DescriptionList from '../../../ui/description-list/description-list';
import IconsBox from '../../../ui/icons-box/icons-box';
import { useOnRouteChange } from '../../../../hooks/use-on-route-change';
import Box from '../../../ui/box/box';
import BoxToolbar from '../../../ui/box-toolbar/box-toolbar';
import BoxInner from '../../../ui/box-inner/box-inner';
import Text from '../../../ui/text/text';
import {
  fetchEmployeeEducationsAction
} from '../../../../store/employees-slice/employees-api-actions';

export default function Education(): JSX.Element {
  const params = useParams();
  const educations = useAppSelector(getEmployeeEducations);
  const dispatch = useAppDispatch();

  useOnRouteChange(() => {
    params.employeeId && dispatch(fetchEmployeeEducationsAction({
      employeeId: params.employeeId,
    }))
  });

  useEffect(() => {
    !educations && params.employeeId && dispatch(fetchEmployeeEducationsAction({
      employeeId: params.employeeId,
    }));
  }, [dispatch, educations, params]);

  if (!educations) {
    return <></>;
  }

  return (
    <Box tagName="section">
      <BoxToolbar>
        <IconsBox icon={<EducationIcon />} />
        <Title small>Образование</Title>
        <CreateEducation />
      </BoxToolbar>
      <BoxInner>
        {educations.map((education, index) => (
          <Fragment key={education.id}>
            {index > 0 && <Hr />}
            <EducationsWrapper>
              <Actions>
                <EditEducation education={education} />
                <DeleteEducation education={education} />
              </Actions>
              <DescriptionList
                list={{
                  'Год поступления': dayjs(education.startedAt).format('D MMM YYYY'),
                  'Год окончания': dayjs(education.graduatedAt).format('D MMM YYYY'),
                  'Учебное заведение': education.institution,
                  'Факультет': education.faculty,
                  'Форма обучения': education.form,
                  'Специальность': education.speciality,
                }}
              />
            </EducationsWrapper>
          </Fragment>
        ))}
        {!educations.length && <Text>Нет образования</Text>}
      </BoxInner>

    </Box>
  );
};
