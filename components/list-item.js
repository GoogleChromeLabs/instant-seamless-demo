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

import Link from 'next/link'
import Icon from './icon'
// Codelab: Add a PrerenderButton component.
import PrerenderButton from './prerender-button'
// Codelab: Add the Shared Element Transitions API.
import { usePageTransitionPrep } from '../utils/use-page-transition'

function ListItemForSPA({ item, href }) {
  // Codelab: Add Shared Element Transitions.
  const transitionNextState = usePageTransitionPrep()
  const handleClick = async (e) => {
    const elm = e.target.closest('a')
    await transitionNextState(elm)
  }
  return (
    <Link href={href}>
      <a className='block flex items-center' onClick={handleClick}>
        <Icon src={item.image} name={item.name} className='shared-element' />
        <div className='text-xl'>{item.name}</div>
      </a>
    </Link>
  )
}

function ListItemForMPA({ item, href }) {
  return (
    <a href={href} className='block flex items-center'>
      <Icon src={item.image} />
      <div className='text-xl'>{item.name}</div>
      {/* Codelab: Add PrerenderButton component. */}
      <PrerenderButton />
    </a>
  )
}

export default function ListItem(props) {
  const { item, clientSideRouting, href } = props
  return (
    <li key={item.name} className='p-3 hover:bg-slate-100 hover:text-slate-900'>
      {clientSideRouting ? (
        <ListItemForSPA item={item} href={href} />
      ) : (
        <ListItemForMPA item={item} href={href} />
      )}
    </li>
  )
}
