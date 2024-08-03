export default function TabBar() {
  return (
    <div className="flex font-MPLUSRounded1c justify-between">
      <div>
        <span className="inline-block mx-1 my-1 cursor-pointer ">
          upload resume
        </span>
        <span className="inline-block opacity-[0.7] border border-none rounded-[5px]" style={{backgroundColor: 'gray'}}>.doc、.pdf</span>
      </div>
      <div>
        <span className="inline-block mx-1 my-1 cursor-pointer ">download resume</span>
        <span className="inline-block opacity-[0.7] border border-none rounded-[5px]" style={{backgroundColor: 'gray'}}>.pdf</span>
      </div>
    </div>  
  )
}
