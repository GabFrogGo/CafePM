//Page
import './panelmand-st.scss';
//Components
import VaultUtilBar from '../utilbar/utilitiesbar.jsx';
import PMain from './panel-set/panelmain.jsx';
import PElements from './panel-set/panelements.jsx';
import PInfo from './panel-set/panelinfo.jsx';
import { ACContextProvider } from '@/src/context/AddCancelElementContext.jsx';
import { SNEContextProvider } from '@/src/context/SaveNewElementContext.jsx';

function PMandatory() {
  return (
    <>
      <div class='panel-utilities'>
        <VaultUtilBar></VaultUtilBar>
      </div>
      <div class='panel-container'>
        <PMain></PMain>

        <ACContextProvider>

          <PElements></PElements>

          <SNEContextProvider>

            <PInfo></PInfo>

          </SNEContextProvider>

        </ACContextProvider>

      </div>
    </>
  );
}

export default PMandatory;