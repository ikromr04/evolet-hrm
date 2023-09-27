import { BaseSyntheticEvent, useState } from 'react';
import { DeleteModal, DeleteWindow, EducationText, SubmitButton } from './styled';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { Education } from '../../../../../types/employee';
import { useAppDispatch } from '../../../../../hooks';
import { deleteEmployeeEducationAction } from '../../../../../store/employees-slice/employees-api-actions';
import Button from '../../../../ui/button/button';
import Hr from '../../../../ui/hr/hr';
import Text from '../../../../ui/text/text';
import DeleteIcon from '../../../../icons/delete-icon';

type DeleteEducationProps = {
  education: Education
};

export default function DeleteEducation({ education }: DeleteEducationProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleFormSubmit = (evt: BaseSyntheticEvent) => {
    evt.preventDefault();
    setIsLoading(true);

    dispatch(deleteEmployeeEducationAction({
      educationId: education.id,
      onSuccess() {
        setIsLoading(false);
        navigate(location.pathname)
        toast.success('Образование удалена');
      },
    }));
  };

  return (
    <DeleteModal
      modalButton={
        <Button type="button">
          <DeleteIcon height={13} /> Удалить
        </Button>
      }
      modalWindow={
        <DeleteWindow as="form" onSubmit={handleFormSubmit}>
          <Text>Вы уверены что хотите удалить это образование?</Text>
          <EducationText>
            ({dayjs(education.startedAt).format('YYYY')} - {dayjs(education.graduatedAt).format('YYYY')}) {education.institution}
          </EducationText>
          <Hr />
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
