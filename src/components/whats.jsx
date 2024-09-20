import React from 'react'


const whatsGroup = [
    {
      name: "GECK 2024-28",
      link: "https://chat.whatsapp.com/Fyxim2had5aEn3eqUATL35",
    },
    {
      name: "The Bihar Engineers",
      link: "https://chat.whatsapp.com/EIjncJ5yst9AUQKFotABs4",
    },
    {
      name: "BEU DISCUSSION GROUP",
      link: "https://chat.whatsapp.com/HJaWJHkqnjVGWhzo7F1erj",
    },
    {
      name: "Student's Group GEC Kishanganj",
      link: "https://chat.whatsapp.com/JENVus3tGTDJT5k565XEFx",
    },
  ];

const whats = () => {
  return (
   <>
    <div className="whatsGroup bg-slate-800">
        <div className="container border-b-2 border-slate-600 ">
          {/* WhatsApp Group Button  */}
          <h1 className='py-1 tracking-wider text-xl md:text-3xl '>Group Name</h1>
          <h1 className="py-1 tracking-wider text-xl md:text-3xl grpLinks">Group Link</h1>
        </div>

        {whatsGroup.map((whats, index) => (
          <div className="container border-b-2 border-slate-600 " key={index}>
            <p>{whats.name}</p>
            <a
              href={`${whats.link}`}
              className="whatsapp-button"
              target="_blank"
            >
              Join Group
            </a>
          </div>
        ))}
      </div>
   </>
  )
}

export default whats
