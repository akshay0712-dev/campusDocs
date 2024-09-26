import React from 'react'

const files = [
  { name: "GAP.pdf", label: "Gap Formate" },
  { name: "Anti_Ragging_Affidavit_Format.pdf", label: "Anti Ragging Format" },
  { name: "Medical-Format-GECK.pdf", label: "Medical Format" },
  { name: "uniform 24-2028.pdf", label: "Dress Code 24-2028" },
  { name: "BTech(Group_A)1st_2nd_Sem.pdf", label: "B.Tech (Group_A)1st &2nd Sem 24 - 2025" },
  { name: "BTech(Group_B)1st_2nd_Sem.pdf", label: "B.Tech (Group_B)1st &2nd Sem 24 - 2025" },
];

const Docs = () => {
  return (
    <>
    <section className="docs">
        <div className="thead bg-slate-800">
          <div className="th">S.No.</div>
          <div className="th">Docs Name</div>
          <div className="th">Dowload</div>
        </div>
        {files.map((file, index) => (
          <div className="tbody" key={index}>
            <div className="td text-[#c9c8c8] md:text-xl">{index + 1}</div>
            <a className="td text-[#c9c8c8] md:text-xl" href={`./docs/${file.name}`}>
              {file.label}
            </a>
            <a className="td  text-[#c9c8c8] md:text-xl" href={`./docs/${file.name}`}>
              <span className="down">Dowload</span>
              <span className="material-symbols-outlined"> download </span>
            </a>
          </div>
        ))}
      </section>
    </>
  )
}

export default Docs
