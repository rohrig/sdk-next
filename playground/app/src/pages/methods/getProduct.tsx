import { useState } from 'react';
import { sdk } from '@/pages/_app';
import { SfButton } from '@storefront-ui/react';

export default function PagegetProduct () {
  const [data, setData] = useState('');

  const hitExampleMethodApi = async () => {
    const { data } = await sdk.boilerplate.getProduct('test');

    setData(data);
  };

  return (
    <>
      <main className="flex flex-col items-center py-24 gap-12  text-white">
        <SfButton type="button" onClick={hitExampleMethodApi}>
          Call getProduct
        </SfButton>

        <div className="w-96 h-12 bg-gray-900 rounded-md flex items-center justify-center">
          {!data ? 'Click the button' : data}
        </div>
      </main>
    </>
  );
}

