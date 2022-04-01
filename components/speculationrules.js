import Script from 'next/script'
import { useContext, useMemo } from 'react'
import ResourceContext from './resource-context'

export default function SpeculationRules() {
  const { state } = useContext(ResourceContext)
  const { prerenderURL } = state

  return useMemo(() => {
    return (
      <>
        {prerenderURL && (
          <Script id='speculationrules' type='speculationrules'>
            {`
            {
              "prerender":[
                {
                  "source": "list",
                  "urls": ["${prerenderURL}"]
                }
              ]
            }
          `}
          </Script>
        )}
      </>
    )
  }, [prerenderURL])
}
