import Link from 'next/link'
import {getSession, signIn} from 'next-auth/react'
import {useState} from 'react'
import Input from '@/components/Input'
import DividerWithWord from '@/components/DividerWithWord'
import AuthContainer from '@/components/AuthContainer'
import toast from 'react-hot-toast'
import {useRouter} from 'next/router'

export default function CredentialSignin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const route = useRouter()

  const handleSubmitSignIn = async (e: React.FormEvent) => {
    e.preventDefault()

    await signIn('sanity-login', {
      redirect: false,
      email,
      password,
    })
      .then((response) => {
        if (response?.error) {
          toast.error('Invalid Email or Password')
        } else if (response?.ok) {
          route.push('/sale')
        }
      })
      .catch((error) => {})
  }

  return (
    <AuthContainer title="signin with username">
      <div className="font-papyrus text-xl px-4 py-2 w-80">
        <form onSubmit={handleSubmitSignIn} className={'flex flex-col gap-4'}>
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
            {/* <div className=" font-sans text-xs flex justify-between items-start capitalize mt-2"> */}
            {/* <Link href={'/'}>
                <a className="hover:text-amber-400">forgot password?</a>
              </Link> */}
            <div className="font-sans text-xs capitalize flex flex-col items-end gap-1 mt-2">
              <h4>don't have An Account!</h4>
              <Link href={'/auth/credentials/credential-signup'}>
                <a className="hover:text-amber-400">register now</a>
              </Link>
            </div>
            {/* </div> */}
          </div>
          <button type="submit" className="bg-amber-600 rounded py-2 shadow-lg">
            Sign In
          </button>
        </form>
      </div>
      <DividerWithWord text="or" />
      <Link href={'/auth/signin'}>
        <a className="text-center font-papyrus capitalize text-lg hover:text-amber-400">
          sign in with social media
        </a>
      </Link>
    </AuthContainer>
  )
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: '/sale',
        permanent: false,
      },
    }
  }

  return {
    props: {session},
  }
}
