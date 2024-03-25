//Page
import './panelmand-st.scss';
//Components
import VaultUtilBar from '../utilbar/utilitiesbar.jsx';
import PMain from './panel-set/panelmain.jsx';
import PElements from './panel-set/panelements.jsx';
import PInfo from './panel-set/panelinfo.jsx';
import { ANEContextProvider } from '@/src/context/AddNewElementContext.jsx';
import { CEContextProvider } from '@/src/context/CancelElementContext.jsx';
import { SNEContextProvider } from '@/src/context/SaveNewElementContext.jsx';
//<ANEContextProvider>
//</ANEContextProvider>
function PMandatory() {
  return (
    <>
      <div class='panel-utilities'>
        <VaultUtilBar></VaultUtilBar>
      </div>
      <div class='panel-container'>
        <PMain></PMain>

        <ANEContextProvider>

          <PElements></PElements>

          <SNEContextProvider>

            <PInfo></PInfo>

          </SNEContextProvider>

        </ANEContextProvider>

      </div>
    </>
  );
}

export default PMandatory;