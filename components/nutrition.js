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

export default function Nutrition(props) {
  const { nutrition, amountPer } = props
  return (
    <div className='bg-white shadow overflow-hidden sm:rounded-lg mt-8'>
      <div className='px-4 py-5 sm:px-6'>
        <h3 className='text-lg leading-6 font-medium text-gray-900'>Nutrition Facts</h3>
        <p className='mt-1 max-w-2xl text-sm text-gray-500'>amount per {amountPer}</p>
      </div>
      <div className='border-t border-gray-200'>
        <dl>
          {Object.keys(nutrition).map((key, idx) => (
            <div key={key} className={`${idx % 2 == 0 ? 'bg-gray-50' : 'bg-whilte'} px-4 py-5`}>
              <dt className='text-sm font-medium text-gray-500'>{key}</dt>
              <dd className='mt-1 text-sm text-gray-900'>{nutrition[key]}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
