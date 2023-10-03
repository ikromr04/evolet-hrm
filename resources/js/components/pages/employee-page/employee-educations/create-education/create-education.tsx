import { useState } from 'react';
import { CreateButton } from './styled';
import PlusIcon from '../../../../icons/plus-icon';
import Info from '../../../../ui/info/info';
import Modal from '../../../../ui/modal/modal';
import CreateEducationForm from '../../../../forms/create-education-form/create-education-form';

function CreateEducation(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <CreateButton type="button" onClick={() => setIsOpen(true)}>
        <PlusIcon width={16} height={16} />
        <Info right>Добавить образование</Info>
      </CreateButton>
      <Modal isOpen={isOpen} closeModalHandler={() => setIsOpen(false)}>
        <CreateEducationForm closeModalHandler={() => setIsOpen(false)} />
      </Modal>
    </>
  );
};

export default CreateEducation;
