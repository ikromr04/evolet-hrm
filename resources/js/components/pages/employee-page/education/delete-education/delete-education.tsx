import { BaseSyntheticEvent } from 'react';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { Education } from '../../../../../types/employee';
import { useAppDispatch } from '../../../../../hooks';
import Button from '../../../../ui/button/button';
import Hr from '../../../../ui/hr/hr';
import Text from '../../../../ui/text/text';
import DeleteIcon from '../../../../icons/delete-icon';
import ModalInner from '../../../../ui/modal-inner/modal-inner';
import { StyledModal } from './styled';
import Buttons from '../../../../ui/buttons/buttons';
import {
  deleteEmployeeEducationAction
} from '../../../../../store/employees-slice/employees-api-actions';

type DeleteEducationProps = {
  education: Education
};

export default function DeleteEducation({ education }: DeleteEducationProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleCancelButtonClick = () => navigate(location.pathname);

  const handleSubmitButtonClick = (evt: BaseSyntheticEvent) => {
    evt.preventDefault();
    dispatch(deleteEmployeeEducationAction({
      educationId: education.id,
      successHandler() {
        toast.success('Образование удалена');
        navigate(location.pathname)
      },
    }));
  };

  return (
    <StyledModal
      button={
        <Button type="button">
          <DeleteIcon width={14} height={14} /> Удалить
        </Button>
      }
      window={
        <ModalInner>
          <Text>Вы уверены что хотите удалить это образование?</Text>
          <Text>
            ({dayjs(education.startedAt).format('YYYY')} - {dayjs(education.graduatedAt).format('YYYY')}) {education.institution}
          </Text>
          <Hr />
          <Buttons>
            <Button onClick={handleSubmitButtonClick} type="submit" success>Удалить</Button>
            <Button onClick={handleCancelButtonClick} type="button" error>Отмена</Button>
          </Buttons>
        </ModalInner>
      }
    />
  );
};
