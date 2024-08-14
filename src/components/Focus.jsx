function Focus() {
  return (
    <div className='h-screen bg-gray-200 flex justify-center items-center p-6'>
      <input
        className='bg-white focus:bg-blue-200 border border-gray-300 rounded-lg py-2 px-4 block w-full'
        type='email'
        placeholder='jane@example.com'
      />
    </div>
  );
}

export default Focus;
