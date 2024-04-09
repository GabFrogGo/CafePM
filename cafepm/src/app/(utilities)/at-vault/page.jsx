//Page
import '../../../components/appstyle/styles/bodydef.scss';
//Components
import PMandatory from '../../../components/vault/panel/panelmandatory.jsx';
import FolderPopup from '@/src/components/modals/modalslist/modalfolders.jsx'

export const metadata = {
  title: 'CafePM | Vault',
}

export default function Vault() {
  return (
    <>
      <PMandatory />
    </>
  );
}