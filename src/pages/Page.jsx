import Ayahs from '../component/Ayahs'
import ChangePageBtn from '../component/ChangePageBtn'
import TranslationBtn from '../component/TranslationBtn'

export default function Page() {

  return (
    <div className='text-right mt-20 text-2xl leading-loose bg-[#eee] w-6/12 mx-auto p-6 rounded-3xl'>
        <Ayahs/>
        <ChangePageBtn name={'Next Page'} type={+1} />
        <ChangePageBtn name={'Previous Page'} type={-1}/>
        <TranslationBtn/>
    </div>
  )
}
