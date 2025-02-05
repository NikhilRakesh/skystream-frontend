import React from 'react'


// SkeletonElement represents a loading placeholder for elements like icons or divs.
const SkeletonElement = ({ width, height }) => {
    return (
      <div
        style={{
          width: width,
          height: height,
          backgroundColor: 'lightgray', // Set your desired background color
          borderRadius: '4px', // Add rounded corners if needed
          animation: 'pulse 1.5s infinite', // Add a pulsing animation effect
        }}
      ></div>
    );
  };
  
  // SkeletonText represents a loading placeholder for text or labels.
  const SkeletonText = ({ width, height }) => {
    return (
      <div
        style={{
          width: width,
          height: height,
          backgroundColor: 'lightgray', // Set your desired background color
          borderRadius: '4px', // Add rounded corners if needed
          animation: 'pulse 1.5s infinite', // Add a pulsing animation effect
        }}
      ></div>
    );
  };
  
  export { SkeletonElement, SkeletonText };
 

function SkelitonList() {
  return (
    <div>
      <><div className="bg-white">
        <div className="bg-white flex py-6 px-16 border-b-[0.5px] items-center justify-between border-gray">
          <div className="Name gap-3 flex items-center min-w-[250px] max-w-[250px]">
            <SkeletonElement width="15px" height="15px" />
            <SkeletonText width="150px" height="20px" />
          </div>
          <div className="Live text-red min-w-[50px]">
            <SkeletonText width="40px" height="20px" />
          </div>
          <div className="Date">
            <SkeletonText width="100px" height="20px" />
          </div>
          <div className="text-3xl text-blue">
            <SkeletonElement width="20px" height="20px" />
          </div>
        </div>
       
        <div className="flex flex-col transition-all ease-in-out duration-1000">
          {/* You can use a similar structure for the MoreUser component */}
        </div>
      </div>
      </>
    </div>
  )
}

export default SkelitonList
