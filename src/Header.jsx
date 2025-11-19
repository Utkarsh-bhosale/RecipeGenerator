import chefClaudeLogo from "./assets/chef-claude-icon.png" 

export default function Header(){
  return (
    <header className="flex justify-center items-center gap-[11px] h-[80px]
    shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10),_0px_1px_2px_0px_rgba(0,0,0,0.06)]">
      <img src={chefClaudeLogo} alt="logo" className="w-[50px]" />
      <h1 className="font-[400] text-3xl">Chef Claude</h1>
    </header> 
  )
}