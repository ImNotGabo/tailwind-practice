function Flex() {
  return (
    <div>
      <div className='bg-red-400 h-128 flex justify-center items-center flex-row-reverse'>
        <div className='w-16 h-16 bg-yellow-600 text-white p-4 m-4'>1</div>
        <div className='w-16 h-16 bg-teal-700 text-white p-4 m-4'>2</div>
        <div className='w-16 h-16 bg-red-700 text-white p-4 m-4'>3</div>
      </div>

      <div className='flex items-center justify-center h-128 bg-blue-400'>
        <div className='text-2xl'>&bull;</div>
        <div className='text-5xl'>Hello there.</div>
      </div>

      <div className='h-screen flex flex-wrap-reverse'>
        <div className='bg-yellow-600 w-16 h-16'>1</div>
        <div className='bg-teal-700 w-16 h-16'>2</div>
        <div className='bg-red-700 w-16 h-16'>3</div>
        <div className='bg-yellow-600 w-16 h-16'>1</div>
        <div className='bg-teal-700 w-16 h-16'>2</div>
        <div className='bg-red-700 w-16 h-16'>3</div>
        <div className='bg-yellow-600 w-16 h-16'>1</div>
        <div className='bg-teal-700 w-16 h-16'>2</div>
        <div className='bg-red-700 w-16 h-16'>3</div>
        <div className='bg-yellow-600 w-16 h-16'>1</div>
        <div className='bg-teal-700 w-16 h-16'>2</div>
        <div className='bg-red-700 w-16 h-16'>3</div>
        <div className='bg-yellow-600 w-16 h-16'>1</div>
        <div className='bg-teal-700 w-16 h-16'>2</div>
        <div className='bg-red-700 w-16 h-16'>3</div>
        <div className='bg-yellow-600 w-16 h-16'>1</div>
        <div className='bg-teal-700 w-16 h-16'>2</div>
        <div className='bg-red-700 w-16 h-16'>3</div>
      </div>
    </div>
  );
}

export default Flex;
