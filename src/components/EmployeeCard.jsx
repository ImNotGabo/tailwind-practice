function EmployeeCard() {
  return (
    <div className='bg-gray-600 flex justify-center items-center h-screen'>
      <div className='bg-white w-2/3 rounded-md flex flex-col shadow-lg overflow-hidden'>
        <div className='text-gray-600 text-xl py-4 px-6 bg-gray-200'>The title of the card here</div>

        <div className='flex py-4 px-6 justify-between items-center'>
          <div className='rounded-full bg-orange-500 py-1 px-2 uppercase text-xs font-bold border border-gray-200 text-gray-200'>
            Under Review
          </div>
          <div className='text-black font-semibold'>May 14, 1988</div>
        </div>

        <div className='py-4 px-6 flex justify-center items-center border-t border-gray-200'>
          <div className='text-black bg-gray-200 border border-gray-200 rounded-lg p-5'>
            Here is a short comment about this employee
          </div>
        </div>

        <div className='bg-gray-200 flex flex-col py-4 px-6 gap-2'>
          <div className='uppercase text-gray-600 text-xs font-bold'>Employee</div>

          <div className='flex pt-3'>
            <div className='bg-blue-500 rounded-full w-12 h-12 flex justify-center items-center uppercase font-bold text-white'>
              GD
            </div>
            <div className='ml-4'>
              <p className='font-bold text-black'>Gabriel Duarte</p>
              <p className='text-sm text-gray-600 mt-1'>Agent</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;
