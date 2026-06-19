import { useCallback, useState } from 'react';
import { MyTitle } from './ui/MyTitle';
import { MySubTitle } from './ui/MySubTitle';

//Si esta fuera del componente no se necesita memorizar
// const handleMyAPICall = () => {
//     console.log('Llamar a mi API');
//   };

export const MemoHook = () => {
  const [title, setTitle] = useState('Hola');
  const [subTitle, setSubTitle] = useState('Mundo');

  // useCallback memoriza la función
  const handleMyAPICall = useCallback(() => {
    console.log('Llamar a mi API', subTitle);
  }, [subTitle]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">MemoApp</h1>

      <MyTitle title={title} />

      <MySubTitle subtitle={subTitle} callMyAPI={handleMyAPICall} />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setTitle('Hello, ' + new Date().getTime())}
      >
        Cambiar Título
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        // onClick={() => setSubTitle('Word, ' + new Date().getTime())}
        onClick={() => setSubTitle('Word')}
      >
        Cambiar subtítulo
      </button>
    </div>
  );
};
