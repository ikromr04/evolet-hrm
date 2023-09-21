import { BaseSyntheticEvent, useState } from 'react';
import { Education } from '../../../../../../types/employees';
import EditIcon from '../../../../../icons/edit-icon';
import { DeleteModal, DeleteWindow, EducationText, SubmitButton } from './styled';
import { useAppDispatch } from '../../../../../../hooks';
import { deleteEmployeeEducationAction } from '../../../../../../store/employees-slice/employees-api-actions';
import { toast } from 'react-toastify';
import { redirectToRoute } from '../../../../../../store/middlewares/redirect';
import { AppRoute } from '../../../../../../const';
import { generatePath } from 'react-router-dom';
import Button from '../../../../../ui/button/button';
import Text from '../../../../../ui/text/text';
import Hr from '../../../../../ui/hr/hr';
import dayjs from 'dayjs';

type DeleteEducationProps = {
  education: Education
};

export default function DeleteEducation({ education }: DeleteEducationProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleFormSubmit = (evt: BaseSyntheticEvent) => {
    evt.preventDefault();
    setIsLoading(true);

    dispatch(deleteEmployeeEducationAction({
      educationId: education.id,
      onSuccess() {
        setIsLoading(false);
        dispatch(redirectToRoute(generatePath(AppRoute.Employee, { employeeId: education.userId })));
        toast.success('Образование удалена');
      },
    }));
  };

  return (
    <DeleteModal
      modalButton={
        <Button type="button">
          <EditIcon height={13} /> Удалить
        </Button>
      }
      modalWindow={
        <DeleteWindow as="form" onSubmit={handleFormSubmit}>
          <Text>Вы уверены что хотите удалить это образование?</Text>
          <EducationText>
            ({dayjs(education.startedAt).format('YYYY')} - {dayjs(education.graduatedAt).format('YYYY')}) {education.institution}
          </EducationText>
          <Hr/>
          <SubmitButton
            isLoading={isLoading}
            disabled={isLoading}
            error
            large
          >
            Удалить
          </SubmitButton>
        </DeleteWindow>
      }
    />
  );
}
