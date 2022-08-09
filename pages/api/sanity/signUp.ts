import {client} from '@/libs/sanity'
import {signUpHandler} from 'next-auth-sanity'

export default signUpHandler(client)
