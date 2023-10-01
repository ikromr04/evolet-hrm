import { useState } from 'react';
import EditIcon from '../../../../icons/edit-icon';
import Info from '../../../../ui/info/info';
import { EditButton } from './styled';
import Modal from '../../../../ui/modal/modal';

function EditLanguages(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <EditButton type="button" onClick={() => setIsOpen(true)}>
        <EditIcon width={16} height={16} />
        <Info top>Редактировать</Info>
      </EditButton>
      <Modal isOpen={isOpen} setIsOpen={() => setIsOpen(false)}>
        
      </Modal>
    </>
  );
};

export default EditLanguages;
