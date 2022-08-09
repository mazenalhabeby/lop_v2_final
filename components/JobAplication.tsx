import Link from 'next/link'

const JobAplication = () => {
  return (
    <div className="flex flex-col space-y-11 bg-gradient-to-br from-rose-600 to-amber-600 py-10 text-center text-white">
      <div className=" flex flex-col gap-y-2">
        <h2 className=" font-papyrus text-xl uppercase tracking-wider">
          join the Pharaohs army Now
        </h2>
        <div>Building the Greatest MOBA NFT Game Together</div>
      </div>
      <div>
        <Link
          href={
            'https://docs.google.com/forms/d/1VpdYLn6tNpZLjq70699z-d8vQmSSbKUlp3CnKoA8JEM'
          }>
          <a className=" font-aclonica mx-auto rounded-lg border-2 p-3 text-lg tracking-wider hover:border-yellow-500  hover:text-yellow-500 transition-all duration-300">
            Send Resume
          </a>
        </Link>
      </div>
    </div>
  )
}

export default JobAplication
