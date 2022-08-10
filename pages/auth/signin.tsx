import {getProviders, getSession, signIn} from 'next-auth/react'
import {ImFacebook} from 'react-icons/im'
import {BsGoogle, BsTwitter} from 'react-icons/bs'
import {GiAnkh} from 'react-icons/gi'
import IconContainer from '@/components/IconContainer'
import TitleunderLine from '@/components/TitleunderLine'
import Link from 'next/link'
import AuthContainer from '@/components/AuthContainer'

export default function SignIn({
  providers,
}: {
  providers: {name: string; id: any}[]
}) {
  return (
    <AuthContainer title="signin">
      {Object.values(providers).map((provider, i) => (
        <div key={i} className="group font-papyrus text-xl px-4 py-2">
          {provider.id == 'sanity-login' && (
            <Link href={'/auth/credentials/credential-signin'}>
              <a
                className={`flex flex-row items-center gap-6 w-full pr-4 rounded-r-xl nm-flat-slate-700 group-hover:text-amber-400`}>
                <IconContainer
                  bgColor={'bg-amber-600'}
                  color={'text-amber-600'}>
                  <GiAnkh className=" rotate-45 text-2xl" />
                </IconContainer>
                Sign in with Username
              </a>
            </Link>
          )}
          {provider.id == 'facebook' && (
            <button
              onClick={(e) => {
                e.preventDefault
                signIn(provider?.id)
              }}
              className={`flex flex-row items-center gap-6 w-full pr-4 rounded-r-xl nm-flat-slate-700 group-hover:text-social-facebook`}>
              <IconContainer
                bgColor={'bg-social-facebook'}
                color={'text-social-facebook'}>
                <ImFacebook />
              </IconContainer>
              Sign in with Facebook
            </button>
          )}
          {provider.id == 'google' && (
            <button
              onClick={(e) => {
                e.preventDefault
                signIn(provider?.id)
              }}
              className={`flex flex-row items-center gap-6 w-full pr-4 rounded-r-xl nm-flat-slate-700 group-hover:text-social-google`}>
              <IconContainer
                bgColor={'bg-social-google'}
                color={'text-social-google'}>
                <BsGoogle />
              </IconContainer>
              Sign in with Google
            </button>
          )}
          {provider.id == 'twitter' && (
            <button
              onClick={(e) => {
                e.preventDefault
                signIn(provider?.id)
              }}
              className={`flex flex-row items-center gap-6 w-full pr-4 rounded-r-xl nm-flat-slate-700 group-hover:text-social-twitter`}>
              <IconContainer
                bgColor={'bg-social-twitter'}
                color={'text-social-twitter'}>
                <BsTwitter />
              </IconContainer>
              Sign in with Twitter
            </button>
          )}
        </div>
      ))}
    </AuthContainer>
  )
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context)
  const providers = await getProviders()

  if (session) {
    return {
      redirect: {
        destination: '/sale-round',
        permanent: false,
      },
    }
  }

  return {
    props: {providers},
  }
}
