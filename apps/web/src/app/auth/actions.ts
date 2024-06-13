'use server'

import { redirect } from 'next/navigation'

export async function signInWithGithub() {
  const githubSignInURL = new URL('login/oauth/authorize', 'https://github.com')

  // const clientId = process.env.GITHUB_OAUTH_CLIENT_ID
  // if (!clientId) {
  //   throw new Error('GITHUB_OAUTH_CLIENT_ID is not defined')
  // }

  // const redirectUri = process.env.GITHUB_OAUTH_CLIENT_REDIRECT_URI
  // if (!redirectUri) {
  //   throw new Error('GITHUB_OAUTH_CLIENT_REDIRECT_URI is not defined')
  // }

  githubSignInURL.searchParams.set('client_id', 'Ov23linCUI3bBJH1j8tG')
  githubSignInURL.searchParams.set(
    'redirect_uri',
    'http://localhost:3000/api/auth/callback',
  )
  githubSignInURL.searchParams.set('scope', 'user')

  redirect(githubSignInURL.toString())
}
