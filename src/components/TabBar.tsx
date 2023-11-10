export default function TabBar() {
  const ResumeList = ['A-CV', 'B-CV', 'C-CV']
  return (
    <div className="flex font-MPLUSRounded1c">
      {
        ResumeList.map(item=> {
          return <div className="mx-1">{item}</div>
        })
      }
    </div>
  )
}
