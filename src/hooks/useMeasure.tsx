import React, {  
  useState,
  useRef,
  useLayoutEffect
} from 'react'

export const useMeasure = (deps: string[] = []) => {
  const [rect, setRect] = useState()
  const myRef = useRef<any>(null)
  
  useLayoutEffect(() => {
    setRect(myRef.current.getBoundingClientRect())
  }, deps)

  return [rect, myRef]
}