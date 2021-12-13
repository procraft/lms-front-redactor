import { RedactorComponent } from '../../../src'
import { ContentEditor } from '../../../src/components/ContentEditor'
import { Head } from '../../../src/components/Head'
import { HtmlTag } from '../../../src/components/HtmlTag'
import { Section } from '../../../src/components/Section'
import { getRedactorObjectComponentProps } from '../../../src/hooks/RedactorObjectRender/interfaces'
import { CourseOrderDev } from '../components/CourseOrder'

export const getRedactorObjectComponent = (
  props: getRedactorObjectComponentProps
) => {
  const { object } = props

  if (!object) {
    return null
  }

  let Component: RedactorComponent | undefined

  switch (object.component) {
    case 'Section':
      Component = Section
      break

    case 'HtmlTag':
      Component = HtmlTag
      break

    case 'ContentEditor':
      Component = ContentEditor
      break

    case 'Head':
      Component = Head
      break

    case 'CourseOrderDev':
      Component = CourseOrderDev
      break
  }

  if (!Component) {
    console.error('Unknown component', object.component)
    return null
  }

  return Component
}

export const linksList = [
  {
    id: 'TGFuZGluZ1RlbXBsYXRlOjE4',
    uri: '/webinar_restaurant',
    name: 'Вебинар "Как открыть прибыльное кафе или ресторан"',
  },
  {
    id: 'TGFuZGluZ1RlbXBsYXRlOjE5',
    uri: '/webinar_blog',
    name: 'Вебинар "Как создать тематический блог и монетизировать его за 2 месяца?"',
  },
  {
    id: 'TGFuZGluZ1RlbXBsYXRlOjIw',
    uri: '/webinar_flowers',
    name: 'Вебинар «Магазины цветов: онлайн и оффлайн»',
  },
  {
    id: 'TGFuZGluZ1RlbXBsYXRlOjEy',
    uri: '/about',
    name: 'Школа SOHO.MBA',
  },
  {
    id: 'TGFuZGluZ1RlbXBsYXRlOjIz',
    uri: '/signin',
    name: 'signin',
  },
  {
    id: 'TGFuZGluZ1RlbXBsYXRlOjIx',
    uri: '/soho_channel',
    name: 'soho_channel',
  },
  {
    id: 'TGFuZGluZ1RlbXBsYXRlOjE0',
    uri: '/politika',
    name: 'Page /politika',
  },
  {
    id: 'TGFuZGluZ1RlbXBsYXRlOjE1',
    uri: '/webinar_coffee',
    name: 'Вебинар "Как открыть прибыльную кофейню"',
  },
  {
    id: 'TGFuZGluZ1RlbXBsYXRlOjE2',
    uri: '/webinar_manicure_studio',
    name: 'Вебинар "Как открыть прибыльную маникюрную студию?"',
  },
  {
    id: 'TGFuZGluZ1RlbXBsYXRlOjE3',
    uri: '/webinar_business',
    name: 'Вебинар "С чего не стоит начинать бизнес? Чужие ошибки, которые помогут вам запустить прибыльный бизнес"',
  },
  {
    id: 'TGFuZGluZ1RlbXBsYXRlOjEz',
    uri: '/course/product',
    name: 'Курс "Продукт на миллион". Школа SOHO.MBA',
  },
  {
    id: 'TGFuZGluZ1RlbXBsYXRlOjk=',
    uri: '',
    name: 'Мой Дизайн',
  },
  {
    id: 'TGFuZGluZ1RlbXBsYXRlOjEw',
    uri: '/',
    name: 'Программы SOHO.MBA',
  },
  {
    id: 'TGFuZGluZ1RlbXBsYXRlOjEx',
    uri: '/course/sm',
    name: 'Курс "Спроса много не бывает". Школа SOHO.MBA',
  },
]
