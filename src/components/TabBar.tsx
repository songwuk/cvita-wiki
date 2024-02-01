export default function TabBar() {
  const ResumeList = ['A-CV', 'B-CV', 'C-CV']
  return (
    <div className="flex font-MPLUSRounded1c">
      {
        ResumeList.map((item,index)=> {
          return <div className="mx-1 my-1 cursor-pointer" key={index}>{item}</div>
        })
      }
    </div>
  )
}
