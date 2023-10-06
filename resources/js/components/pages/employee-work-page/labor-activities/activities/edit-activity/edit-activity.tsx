import { useState } from 'react';
import EditIcon from '../../../../../icons/edit-icon';
import Info from '../../../../../ui/info/info';
import Modal from '../../../../../ui/modal/modal';
import { EditButton } from './styled';
import { Activity } from '../../../../../../types/employee';
import EditActivityForm from '../../../../../forms/edit-activity-form/edit-activity-form';

type EditActivityProps = {
  activity: Activity;
};

function EditActivity({ activity }: EditActivityProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <EditButton type="button" onClick={() => setIsOpen(true)}>
        <EditIcon width={16} height={16} />
        <Info left>Редактировать</Info>
      </EditButton>
      <Modal isOpen={isOpen} closeModalHandler={() => setIsOpen(false)}>
        <EditActivityForm activity={activity} closeModalHandler={() => setIsOpen(false)} />
      </Modal>
    </>
  );
};

export default EditActivity;
