import Ayahs from '../component/Ayahs'
import ControllerBtn from '../component/ControllerBtn'

export default function Page() {
  return (
    <div className='text-center mt-20 text-2xl leading-loose bg-[#eee] w-11/12 lg:w-6/12 mx-auto p-6 rounded-3xl'>
        <Ayahs/>
        <ControllerBtn/>
    </div>
  )
}
