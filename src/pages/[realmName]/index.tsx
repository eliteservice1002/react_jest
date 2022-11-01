import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['common', 'units'])),
    },
  }
}

const Realm: React.FC = () => {
  const router = useRouter()

  useEffect(() => {
    router.push(`/${router.query.realmName}/units`)
  })

  return <></>
}

export default Realm
