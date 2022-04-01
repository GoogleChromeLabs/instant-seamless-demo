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

const Index = () => {
  return (
    <div className={'flex-col items-center justify-center py-4 px-4'}>
      <h1 className='text-4xl font-bold mt-4'>Instant & Seamless DEMO</h1>

      <p className='mt-4 text-xl'>
        This is a demo web app to learn about some new browser APIs that make your website
        experience more instant and seamless. Following APIs are integrated into this website:
        Prerendering / BFCache / Private Prefetch Proxy / Root and Shared Element Transitions.
      </p>
    </div>
  )
}

export default Index
