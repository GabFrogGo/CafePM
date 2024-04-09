//Page
import './panelmand-st.scss';
//Components
import VaultUtilBar from '../utilbar/utilitiesbar.jsx';
import PMain from './panel-set/panelmain.jsx';
import PElements from './panel-set/panelements.jsx';
import PInfo from './panel-set/panelinfo.jsx';
import { ACContextProvider } from '@/src/context/AddCancelElementContext.jsx';
import { SNEContextProvider } from '@/src/context/SaveNewElementContext.jsx';
import { PopContextProvider } from '@/src/context/InvokePopupsContext.jsx';
//Popups
import { ModalFP, ModalGPP } from '@/src/components/modals/modalcomp/dynamic-modals.jsx'

function PMandatory() {

  return (
    <>
      <PopContextProvider>
        <ModalFP/>
        
        <div className='panel-utilities'>

          <VaultUtilBar></VaultUtilBar>

        </div>

        <div className='panel-container'>
          
          <PMain></PMain>

          <ACContextProvider>

            <PElements></PElements>

            <SNEContextProvider>

              <PInfo></PInfo>

            </SNEContextProvider>

          </ACContextProvider>

        </div>

      </PopContextProvider>
    </>
  );
}

export default PMandatory;