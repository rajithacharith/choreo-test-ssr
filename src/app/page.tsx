import { headers } from 'next/headers'
 
export default function Page() {
  const headersList = headers()
  const referer = headersList.get('referer')
  const xCustomDomain = headersList.get('x-via-custom-domain')
 
  return <div>Referer: {referer} <br/> Custom Domain : {headersList} </div>
}