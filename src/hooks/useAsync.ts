/**
 * @module hooks/useAsync
 * Hook for managing async operations
 */

import { useEffect, useState, useCallback, useRef } from "react"
import type { AsyncState } from "@/types"

interface UseAsyncOptions {
  /** Whether to execute the async function immediately */
  immediate?: boolean

  /** Delay before executing (ms) */
  delay?: number
}

/**
 * Hook to manage async operations with loading and error states
 *
 * @example
 * ```tsx
 * const { data, loading, error, execute } = useAsync(
 *   async () => await fetchData(),
 *   { immediate: true }
 * )
 * ```
 */
export function useAsync<T>(
  asyncFunction: () => Promise<T>,
  options: UseAsyncOptions = {}
) {
  const { immediate = true, delay = 0 } = options

  const [state, setState] = useState<AsyncState<T>>({
    loading: immediate,
    error: null,
    data: null,
  })

  const mountedRef = useRef(true)

  const execute = useCallback(async () => {
    setState({ loading: true, error: null, data: null })

    try {
      if (delay > 0) {
        await new Promise((resolve) => setTimeout(resolve, delay))
      }

      const response = await asyncFunction()

      if (mountedRef.current) {
        setState({ loading: false, error: null, data: response })
      }
    } catch (error) {
      if (mountedRef.current) {
        setState({
          loading: false,
          error: error instanceof Error ? error : new Error(String(error)),
          data: null,
        })
      }
    }
  }, [asyncFunction, delay])

  useEffect(() => {
    if (immediate) {
      void execute()
    }

    return () => {
      mountedRef.current = false
    }
  }, [execute, immediate])

  return { ...state, execute }
}
