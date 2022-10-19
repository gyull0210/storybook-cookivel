import Dropdown from "../components/common/dropdown/Dropdown"

export default function FreeSeries(){
  return (
    <div className="relative">
      <Dropdown label={<img className="w-10 h-10 rounded-full" src="https://i.pravatar.cc/48" alt="avatar"/>} menu={"메뉴"}/>
    </div>
  )
}