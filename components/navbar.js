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

export default function Navbar() {
  return (
    <>
      <nav className='bg-white sticky top-0 flex sm:justify-center space-x-4 p-4 shadow z-10'>
        {[
          ['Home', '/'],
          ['Vegetables', '/vegetables'],
        ].map(([title, url]) => (
          <a
            href={url}
            key={title}
            className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'
          >
            {title}
          </a>
        ))}
        <Link href='/fruits'>
          <a className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>
            Fruits
          </a>
        </Link>
      </nav>
    </>
  )
}
