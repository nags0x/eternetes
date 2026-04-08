import EternetesLogo from './assets/eternetes-logo-hero-dark.svg';
import GithubLogo from './assets/github-svgrepo-com.svg'

const HackInfo = () => {
    const HackNav = (
        <div className="flex justify-between items-center mt-2 border-b-1 border-slate-100 px-5 py-3 shadow-xs">
                <div className='flex justify-center items-center gap-2'>
                    <img 
                        src={EternetesLogo}
                        className='size-5'
                        alt='eternetes-logo'
                    />
                    <span className='font-semibold'>eternetes</span>
                </div>
                <div className='pr-5'>
                    <img 
                        src={GithubLogo}
                        className='size-5'
                        alt='github-logo'
                    />
                </div>
            </div>
    )
    return(
        <>
        <div
        content={HackNav}
        >
        </div>
        </>
    )
}

export default HackInfo;