
type createSvgElementProps = {
  alignment: 'top left' | 'top right' | 'bottom left' | 'bottom right'
}

export const createSvgElement = ({ alignment }: createSvgElementProps) => {
  const xmlns = 'http://www.w3.org/2000/svg'
  const boxWidth = 14
  const boxHeight = 14

  const svg = document.createElementNS(xmlns, 'svg')
  svg.setAttributeNS(null, 'viewBox', '0 0 ' + boxWidth + ' ' + boxHeight)
  svg.setAttributeNS(null, 'width', boxWidth + 'px')
  svg.setAttributeNS(null, 'height', boxHeight + 'px')
  svg.style.display = 'block'
  svg.style.position = 'absolute'
  
  switch (alignment) {
    case 'top left':
      svg.style.top = '0'
      svg.style.left = '0'
      svg.style.transform = `rotate(270deg)`
      break
      
      case 'top right':
        svg.style.top = '0'
        svg.style.right = '0'
        svg.style.transform = `rotate(0deg)`
      break

    case 'bottom left':
      svg.style.bottom = '0'
      svg.style.left = '0'
      svg.style.transform = `rotate(180deg)`
      break
      
      case 'bottom right':
        svg.style.bottom = '0'
        svg.style.right = '0'
        svg.style.transform = `rotate(90deg)`
      break
  }

  const path = document.createElementNS(xmlns, 'path')
  path.setAttributeNS(null, 'stroke', 'rgba(255,255,255,.5)')
  path.setAttributeNS(null, 'stroke-width', '1')
  path.setAttributeNS(null, 'd', 'M0,0 L14,0 L14,14 L12,14 L12,2 L0,2 Z')
  path.setAttributeNS(null, 'fill', '#2b87da')

  svg.appendChild(path)

  return svg
}