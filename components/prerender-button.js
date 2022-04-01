import { useContext } from 'react'
import ResourceContext from './resource-context'

// You use resource context to manage global states.
// In the PrerenderButton component, you update the prerenderURL parameter when the button is clicked.
export default function PrerenderButton() {
  const { dispatch } = useContext(ResourceContext)
  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const parent = e.target.closest('a')
    if (!parent) {
      return
    }
    const href = parent.getAttribute('href')
    dispatch({ type: 'update', prerenderURL: href })
  }

  return (
    <button className='ml-auto bg-gray-200 hover:bg-gray-300 px-4 rounded' onClick={handleClick}>
      Prerender
    </button>
  )
}
