import AuthContainer from '@/components/AuthContainer'
import Input from '@/components/Input'
import {signUp} from 'next-auth-sanity/client'
import {getSession} from 'next-auth/react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useState} from 'react'
import toast from 'react-hot-toast'

export default function credentialSignup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await signUp({
      email,
      password,
      name,
    })
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    toast.success('account added')
    router.push('/auth/credentials/credential-signin')
  }

  return (
    <AuthContainer title="register">
      <div className="font-papyrus text-xl px-4 py-2 w-80">
        <form onSubmit={handleSubmit} className={'flex flex-col gap-4'}>
          <Input
            type={'name'}
            inputName={'name'}
            inputTitle={'Insert Your Full Name'}
            onChange={(e: any) => setName(e.target.value)}
            value={name}
          />
          <Input
            type={'email'}
            inputName={'email'}
            inputTitle={'Insert Your Email'}
            onChange={(e: any) => setEmail(e.target.value)}
            value={email}
          />
          <div>
            <Input
              type={'password'}
              inputName={'password'}
              inputTitle={'Insert Your Password'}
              onChange={(e: any) => setPassword(e.target.value)}
              value={password}
            />
            <div className="font-sans text-xs flex flex-col items-end gap-1 capitalize mt-2">
              <h4>Already have an account!</h4>
              <Link href={'/auth/credentials/credential-signin'}>
                <a className="hover:text-amber-400">sign in here</a>
              </Link>
            </div>
          </div>
          <button
            disabled={loading}
            type="submit"
            className="bg-amber-600 rounded py-2 shadow-lg disabled:bg-slate-400">
            Create Account
          </button>
        </form>
      </div>
    </AuthContainer>
  )
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: '/sale-round',
        permanent: false,
      },
    }
  }

  return {
    props: {session},
  }
}
