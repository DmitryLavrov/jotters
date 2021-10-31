import convertToPlain from './convertToPlain'

export default function getTitleFromContent(html) {
  const tempDivElement = document.createElement('div')

  tempDivElement.innerHTML = html

  const tempDivElementChildren = tempDivElement.children

  for (let i = 0; i < tempDivElementChildren.length; i++) {
      const title = convertToPlain(tempDivElementChildren[i].outerHTML)
      if (title.length > 0) {
        return title
      }
  }

  return 'Noname note'
}
