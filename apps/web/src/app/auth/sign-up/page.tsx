import Image from 'next/image'
import Link from 'next/link'

import githubIcon from '@/assets/github-icon.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
export default function SignUpPage() {
  return (
    <form action="" className="space-y-4">
      <div className="skew-y-1">
        <Label htmlFor="name">Name</Label>
        <Input name="name" id="name" />
      </div>

      <div className="skew-y-1">
        <Label htmlFor="email">Email</Label>
        <Input name="email" id="email" type="email" />
      </div>

      <div className="skew-y-1">
        <Label htmlFor="password">Password</Label>
        <Input name="password" id="password" type="password" />
      </div>

      <div className="skew-y-1">
        <Label htmlFor="password_confirmation">Confirm your password</Label>
        <Input
          name="password_confirmation"
          id="password_confirmation"
          type="password"
        />
      </div>

      <Button className="w-full" type="submit">
        Create account
      </Button>

      <Button className="w-full" variant="link" size="sm" asChild>
        <Link href="/auth/sign-in">Already registered? Sign In</Link>
      </Button>

      <Separator />

      <Button type="submit" className="w-full" variant="outline">
        <Image src={githubIcon} alt="" className="mr-2 size-4 dark:invert" />
        Sign up with GitHub
      </Button>
    </form>
  )
}
