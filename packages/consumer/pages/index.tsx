import { Button } from '@project/shared';
import { useTranslation } from 'react-i18next';
import PencilIcon from '../assets/pencil.svg';

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Button>{t('Hello')}</Button>
      <PencilIcon />
    </>
  );
}
