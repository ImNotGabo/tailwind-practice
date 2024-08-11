function Borders() {
  return (
    <div className='bg-gray-100 m-16 w-32 h-32 border-t-4 border-blue-800'>
      <br />
      <div className='bg-gray-600 m-16 w-32 h-32 border-blue-800 border-t-8'></div>
      <div className='bg-gray-600 m-16 w-32 h-32 border-red-800 border-8 border-dashed'></div>
      <div className='bg-gray-600 m-16 w-32 h-32 border-red-800 border-8 rounded'></div>
      <div className='bg-gray-600 m-16 w-32 h-32 border-yellow-500 border rounded-t-full'></div>
      <div className='bg-gray-600 m-16 w-32 h-32 border-yellow-500 border rounded-bl-full'></div>
    </div>
  );
}

export default Borders;
