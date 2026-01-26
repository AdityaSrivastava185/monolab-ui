// app/providers.tsx  
'use client'

import posthog from 'posthog-js'  
import { PostHogProvider as PHProvider } from 'posthog-js/react'  
import { useEffect } from 'react'

export function PostHogProvider({ children }: { children: React.ReactNode }) {  
  useEffect(() => {  
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {  
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,  
      defaults: '2025-11-30',  
      autocapture: true,
      capture_pageview: true,   

    })  
  }, [])

  return (  
    <PHProvider client={posthog}>  
      {children}  
    </PHProvider>  
  )  
}  