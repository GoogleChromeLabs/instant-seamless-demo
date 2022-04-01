/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useEffect, useContext, useRef, useCallback } from 'react'
import ResourceContext from '../components/resource-context'

// Call this hook on this first page before you start the page transition. For Shared Element Transitions, you need to call the transition.start() method before the next page begins to render, and you need to do the Document Object Model (DOM) modification or setting of new shared elements inside the callback so that this hook returns the promise and defers to the callback resolve.
export const usePageTransitionPrep = () => {
  const { dispatch } = useContext(ResourceContext)

  return (elm) => {
    const sharedElements = elm.querySelectorAll('.shared-element')
    // Feature detection
    if (!document.createDocumentTransition) {
      return null
    }

    return new Promise((resolve) => {
      const transition = document.createDocumentTransition()
      Array.from(sharedElements).forEach((elm, idx) => {
        transition.setElement(elm, `target-${idx}`)
      })
      transition.start(async () => {
        resolve()
        await new Promise((resolver) => {
          dispatch({ type: 'update', transition: { transition, resolver } })
        })
      })
    })
  }
}

// Call this hook on the second page. Inside the useEffect hook, you can refer to the actual DOM element and set them as shared elements with the transition.setElement() method. When the resolver function is called, the transition is initiated between the captured images and newly set shared elements.
export const usePageTransition = () => {
  const { state, dispatch } = useContext(ResourceContext)
  const ref = useRef(null)
  const setRef = useCallback((node) => {
    ref.current = node
  }, [])

  useEffect(() => {
    if (!state.transition || !ref.current) {
      return
    }
    const { transition, resolver } = state.transition
    const sharedElements = ref.current.querySelectorAll('.shared-element')
    Array.from(sharedElements).forEach((elm, idx) => {
      transition.setElement(elm, `target-${idx}`)
    })
    resolver()
    return () => {
      dispatch({ type: 'update', transition: null })
    }
  })

  return setRef
}
