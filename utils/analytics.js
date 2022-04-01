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

import { useEffect } from 'react'
import { useRouter } from 'next/router'

// This hook handles sending analytics events for SPA navigation.
// MPA navigation is handled by the script outside of the Next.js application.
export default function useAnalyticsForSPA() {
  if (typeof window == 'object') {
    const router = useRouter()

    useEffect(() => {
      const sendPageView = () => {
        console.log('Send page view event for SPA navigation.')
        fetch(`/api/analytics?from=${encodeURIComponent(location.pathname)}&type=pageview`)
      }
      router.events.on('routeChangeComplete', sendPageView)
      return () => {
        router.events.off('routeChangeComplete', sendPageView)
      }
    }, [router.events])
  }
}
