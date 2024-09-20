import React from 'react'

const files = [
  { name: "GAP.pdf", label: "Gap Formate" },
  { name: "Anti_Ragging_Affidavit_Format.pdf", label: "Anti Ragging Format" },
  { name: "Medical-Format-GECK.pdf", label: "Medical Format" },
  { name: "uniform 24-2028.pdf", label: "Dress Code 24-2028" },
];

const Docs = () => {
  return (
    <>
    <section className="docs">
        <div className="thead">
          <div className="th">S.No.</div>
          <div className="th">Docs Name</div>
          <div className="th">Dowload</div>
        </div>
        {files.map((file, index) => (
          <div className="tbody" key={index}>
            <div className="td">{index + 1}</div>
            <a className="td" href={`./docs/${file.name}`}>
              {file.label}
            </a>
            <a className="td" href={`./docs/${file.name}`}>
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
