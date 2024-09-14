import { Plus } from 'lucide-react'
import { Button } from './button'
import { DialogTrigger } from './dialog'
import logo from '../logo-in-orbit.svg'
import letsStart from '../lets-start-illu.svg'

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit" />
      <img src={letsStart} alt="in.orbit" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadasrar Meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
