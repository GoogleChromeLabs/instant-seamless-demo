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

import { createContext, useReducer } from 'react'

const ResourceContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'update': {
      return {
        prerenderURL: action.prerenderURL,
        transition: action.transition,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const ResourceContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { prerenderURL: null, transition: null })
  const value = {
    state,
    dispatch,
  }

  return <ResourceContext.Provider value={value}>{children}</ResourceContext.Provider>
}

export default ResourceContext
export { ResourceContextProvider }
