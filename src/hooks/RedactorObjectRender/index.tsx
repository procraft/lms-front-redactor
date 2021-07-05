import { RedactorComponent } from '../../RedactorComponent/interfaces'
import { getRedactorObjectComponentProps } from './interfaces'

import { Section } from '../../components/Section'
// import LandingLayout from '../../components/LandingLayout'
// import LandingFooter from '../../components/LandingFooter'
// import LandingHeader from '../../components/LandingHeader'
import { ContentEditor } from '../../components/ContentEditor'
import { HtmlTag } from '../../components/HtmlTag'
// import LandingRouter from '../../components/LandingRouter'
// import CourseOrder from '../../components/CourseOrder'

/**
 * Получаем реакт-компонент для объекта
 * @deprecated
 */
const getRedactorObjectComponent = (props: getRedactorObjectComponentProps) => {
  const { object } = props

  if (!object) {
    return null
  }

  let Component: RedactorComponent | undefined

  switch (object.component) {
    case 'Section':
      Component = Section
      break

    // case 'LandingLayout':
    //   Component = LandingLayout
    //   break

    // case 'LandingHeader':
    //   Component = LandingHeader
    //   break

    // case 'LandingFooter':
    //   Component = LandingFooter
    //   break

    case 'ContentEditor':
      Component = ContentEditor
      break

    case 'HtmlTag':
      Component = HtmlTag
      break

    // case 'LandingRouter':
    //   Component = LandingRouter
    //   break

    // case 'CourseOrder':
    //   Component = CourseOrder
    //   break
  }

  if (!Component) {
    console.error('Unknown component', object.component)
    return null
  }

  return Component

  // return <Component
  //   object={object}
  // />;
}

export default getRedactorObjectComponent
