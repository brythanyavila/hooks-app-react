import { memo } from 'react';

interface Props {
  subtitle: string;
}

export const MySubTitle = memo(({ subtitle }: Props) => {
  console.log('MySubTitle re-render');

  return (
    <>
      <h6 className="text-2xl font-bold">{subtitle}</h6>
      <button className="bg-indigo-500 text-white px-4 py-2 rounded-md cursor-pointer">
        Llamar a Funcion
      </button>
    </>
  );
});
