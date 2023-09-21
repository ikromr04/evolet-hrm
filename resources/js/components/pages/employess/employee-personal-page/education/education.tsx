import BlockToolbar from '../../../../ui/block-toolbar/block-toolbar';
import Block from '../../../../ui/block/block';
import Title from '../../../../ui/title/title';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/index';
import { getEmployeeEducations } from '../../../../../store/employees-slice/employees-selector';
import Spinner from '../../../../ui/spinner/spinner';
import DescriptionList from '../../../../ui/description-list/description-list';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { fetchEmployeeEducations } from '../../../../../store/employees-slice/employees-api-actions';
import { useParams } from 'react-router-dom';
import Hr from '../../../../ui/hr/hr';
import { Actions, EducationsWrapper, IconWrapper } from './styled';
import EditEducation from './edit-education/edit-education';
import CreateEducation from './create-education/create-education';
import BlockNoContent from '../../../../ui/block-no-content/block-no-content';
import DeleteEducation from './delete-education/delete-education';
import EducationIcon from '../../../../icons/education-icon';

export default function Education(): JSX.Element {
  const params = useParams();
  const educations = useAppSelector(getEmployeeEducations);
  const dispatch = useAppDispatch();

  useEffect(() => {
    !educations && params.employeeId && dispatch(fetchEmployeeEducations({
      employeeId: params.employeeId,
    }));
  }, [dispatch, educations, params]);

  return (
    <Block as="section">
      <BlockToolbar>
        <IconWrapper>
          <EducationIcon width={18} color="#00b950" />
        </IconWrapper>
        <Title small>Образование</Title>
        <CreateEducation />
      </BlockToolbar>

      {educations
        ?
          educations.length
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
              <BlockNoContent>Нет образования</BlockNoContent>
        :
          <Spinner width={24} stroke={4} style={{ margin: '16px' }} />}
    </Block>
  );
}
