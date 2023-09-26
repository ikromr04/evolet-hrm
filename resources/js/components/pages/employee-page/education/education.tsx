import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Actions, EducationsWrapper, IconWrapper } from './styled';
import EditEducation from './edit-education/edit-education';
import CreateEducation from './create-education/create-education';
import DeleteEducation from './delete-education/delete-education';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { getEmployeeEducations } from '../../../../store/employees-slice/employees-selector';
import { fetchEmployeeEducations } from '../../../../store/employees-slice/employees-api-actions';
import Block from '../../../ui/block/block';
import BlockToolbar from '../../../ui/block-toolbar/block-toolbar';
import EducationIcon from '../../../icons/education-icon';
import Title from '../../../ui/title/title';
import Hr from '../../../ui/hr/hr';
import DescriptionList from '../../../ui/description-list/description-list';
import BlockNoContent from '../../../ui/block-no-content/block-no-content';
import IconsBox from '../../../ui/icons-box/icons-box';
import { useOnRouteChange } from '../../../../hooks/use-on-route-change';

export default function Education(): JSX.Element {
  const params = useParams();
  const educations = useAppSelector(getEmployeeEducations);
  const dispatch = useAppDispatch();

  useOnRouteChange(() => {
    params.employeeId && dispatch(fetchEmployeeEducations({
      employeeId: params.employeeId,
    }))
  });

  useEffect(() => {
    !educations && params.employeeId && dispatch(fetchEmployeeEducations({
      employeeId: params.employeeId,
    }));
  }, [dispatch, educations, params]);

  if (!educations) {
    return <></>;
  }

  return (
    <Block as="section">
      <BlockToolbar>
        <IconsBox>
          <EducationIcon />
        </IconsBox>
        <Title small>Образование</Title>
        <CreateEducation />
      </BlockToolbar>

      {educations.length
        ?
          educations.map((education, index) => (
            <EducationsWrapper key={education.id}>
              {index > 0 && <Hr />}
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
          ))
        :
          <BlockNoContent>Нет образования</BlockNoContent>}
    </Block>
  );
}
