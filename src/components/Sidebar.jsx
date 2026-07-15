export default function Sidebar() {
    return (
        
            
            <aside className="w-64 border-r border-zinc-700 bg-zinc-950 p-4">
                <h2 className="mb-4 text-lg font-semibold text-white">Quick links</h2>
                <nav className="flex flex-col gap-2">
              <button className="rounded-lg px-3 py-2 text-left text-zinc-300 hover:bg-zinc-800 hover:text-white">allnotes</button>  
              <button className="rounded-lg px-3 py-2 text-left text-zinc-300 hover:bg-zinc-800 hover:text-white">favorite</button>  
              <button className="rounded-lg px-3 py-2 text-left text-zinc-300 hover:bg-zinc-800 hover:text-white">archieve</button>  
              <button className="rounded-lg px-3 py-2 text-left text-zinc-300 hover:bg-zinc-800 hover:text-white">trash</button>  
                </nav>
            </aside>
           
        
    
    )
    }