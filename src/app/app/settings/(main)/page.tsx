import { auth } from '@/services/auth'
import { ProfileForm } from './_components/form'

export default async function Page() {
  const session = await auth()

  // @ts-expect-error expect
  return <ProfileForm defaultValues={session?.user} />
}
