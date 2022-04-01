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

;(() => {
  const sendEvent = (type = 'pageview') => {
    // Codelab: Make analytics prerendering compatible.
    // The pageshow event could happen in the prerendered page before activation.
    // The prerendered page should be handled by the prerenderingchange event.
    if (document.prerendering) {
      return
    }

    console.log(`Send ${type} event for MPA navigation.`)
    fetch(`/api/analytics?from=${encodeURIComponent(location.pathname)}&type=${type}`)
  }

  // Codelab: Remove the unload event handler for bfcache.
  // The unload event handler prevents the content from being stored in bfcache. Use the pagehide event instead.
  window.addEventListener('pagehide', () => {
    sendEvent('leave')
  })

  // Codelab: Use the pageshow event handler for bfcache.
  window.addEventListener('pageshow', (e) => {
    // If the persisted flag exists, the page was restored from bfcache.
    if (e.persisted) {
      console.log('The page was restored from bfcache.')
      sendEvent()
    }
  })

  // Codelab: Make analytics prerendering compatible.
  // The prerenderingchange event is triggered when the page is activated.
  document.addEventListener('prerenderingchange', () => {
    console.log('The prerendered page was activated.')
    sendEvent()
  })

  // For normal navigations
  window.addEventListener('DOMContentLoaded', () => {
    sendEvent()
  })
})()
