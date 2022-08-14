import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import TwitterProvider from 'next-auth/providers/twitter'
import {SanityAdapter, SanityCredentials} from 'next-auth-sanity'
import {client} from '@/libs/sanity'

export default NextAuth({
  providers: [
    SanityCredentials(client),
    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_ID!,
      clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_SECRET!,
    }),

    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET!,
    }),
    TwitterProvider({
      clientId: process.env.NEXT_PUBLIC_TWITTER_ID!,
      clientSecret: process.env.NEXT_PUBLIC_TWITTER_SECRET!,
      version: '2.0',
    }),
  ],

  session: {
    strategy: 'jwt',
  },

  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,

  jwt: {
    secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  },

  pages: {
    signIn: '/auth/signin', // Displays signin buttons
    // signOut: '/auth/signout', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },
  adapter: SanityAdapter(client),

  callbacks: {
    jwt: ({token, user}) => {
      if (user) {
        token.id = user.id
      }
      return token
    },
    session({session, token, user}) {
      if (token) {
        session.id = token.id
      }
      return session
    },
  },

  events: {},

  debug: false,
})
