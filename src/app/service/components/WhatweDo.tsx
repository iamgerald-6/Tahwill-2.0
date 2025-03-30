import React from 'react'

const WhatweDo = () => {
    const whatArr1 = [
      {
        id: 1,
        title: "What we do",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse potenti. Curabitur feugiat, fullamcorper libero arcu at felis",
      },
      {
        id: 2,
        title: "What we do",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse potenti. Curabitur feugiat, fullamcorper libero arcu at felis",
      },
      {
        id: 3,
        title: "What ",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse potenti. Curabitur feugiat, fullamcorper libero arcu at felis",
      },
     
    ];
 const whatArr2 = [
   {
     id: 1,
     title: "What we do",
     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse potenti. Curabitur feugiat, fullamcorper libero arcu at felis",
   },
   {
     id: 2,
     title: "What we do",
     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse potenti. Curabitur feugiat, fullamcorper libero arcu at felis",
   },
   {
     id: 3,
     title: "What ",
     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse potenti. Curabitur feugiat, fullamcorper libero arcu at felis",
   },
 ];
    return (
      <div className='mt-[-50px]'>
        <div className='bg-white shadow-2xl mx-14 px-10 py-6'>
          <div className="grid grid-cols-3 gap-2 ">
            {whatArr1.map((serve, i) => (
              <div key={serve.id} className=" w-[85%] py-4">
                <div className="grid gap-1 py-2">
                  <span className="bg-gradient-to-b from-primary to-primary-100 bg-clip-text text-transparent inline-block">
                    0{i + 1}
                  </span>
                  <h3 className="text-primary">{serve.title}</h3>
                </div>
                <div className="">
                  <p className="text-sm text-primary">{serve.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2 border-t border-gray-300 ">
            {whatArr2.map((serve, i) => (
              <div key={serve.id} className=" w-[85%] py-4">
                <div className="grid gap-1 py-2">
                  <span className="bg-gradient-to-b from-primary to-primary-100 bg-clip-text text-transparent inline-block">
                    0{i + 1}
                  </span>
                  <h3 className="text-primary">{serve.title}</h3>
                </div>
                <div className="">
                  <p className="text-sm text-primary">{serve.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default WhatweDo