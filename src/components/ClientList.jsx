import clientsList from '../utils'
import { ClientItem } from './ClientItem';

export const ClientList = () => {
  const renderNodes = () => {
    const cards = [];
    let current = clientsList.head;

    if (!current) return cards; // lista vacía

    while(current) {
      cards.push(
        <ClientItem client={current.value} />
      );
      current = current.next;
    };
    return cards;
  };

  return (
    <div className='flex flex-col gap-6 items-center'>
      <h1 className="font-bold text-2xl">clients</h1>

      {renderNodes()}
    </div>
  )
}
