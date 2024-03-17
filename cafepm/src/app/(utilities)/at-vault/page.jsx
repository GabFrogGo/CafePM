//Page
import Head from 'next/head';
import '../../../components/appstyle/styles/bodydef.scss';
//Components
import PMandatory from '../../../components/vault/panel/panelmandatory.jsx';

export default function Vault() {
  return (
    <>
      <Head>
        <title>CafePM | Vault</title>
      </Head>
      <PMandatory></PMandatory>
    </>
  );
}