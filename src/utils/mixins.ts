import { useRouter } from 'vue-router'

const $router = useRouter()

export default function () {
  const goHome = () => {
    $router.push({
      path: `/visualizationSystem//index`,
      replace: true
    })
  }

  return {
    goHome
  }
}