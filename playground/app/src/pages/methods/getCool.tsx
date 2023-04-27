import { useState } from 'react';
import { sdk } from '@/pages/_app';
import { SfButton } from '@storefront-ui/react';
import { useRouter } from 'next/router';

export default function PagegetCool () {
  const [data, setData] = useState('');

  //who to list all routes in the pages/methods folder?
  const router = useRouter()
  const path = router.asPath

  

  const hitExampleMethodApi = async () => {
    const { data } = await sdk.boilerplate.getCool('test');

    setData(data);
  };

  return (
    <>
      <main className="flex flex-col items-center py-24 gap-12  text-white">
        <SfButton type="button" onClick={hitExampleMethodApi}>
          Call getCool
        </SfButton>

        <div className="w-96 h-12 bg-gray-900 rounded-md flex items-center justify-center">
          {!data ? 'Click the button' : data}
        </div>
      </main>
    </>
  );
}

