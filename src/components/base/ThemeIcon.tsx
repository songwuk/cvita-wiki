import { Icon } from '@iconify/react'
import { useState, useEffect } from 'react';
// Mocking nextTick for the example
const nextTick = () => new Promise((resolve) => setTimeout(resolve, 0));
export default function ThemeIcon() {
  const [theme, setTheme] = useState<null | undefined | string>('null')
  const toggleTheme = async (event: React.MouseEvent<HTMLElement>) => {
    const t = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme',t)
    await setTheme(t)
    const isAppearanceTransition =
      // @ts-expect-error
      document.startViewTransition &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isAppearanceTransition || !event) {
      return;
    }
    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )
    // @ts-expect-error: Transition API
    const transition = document.startViewTransition(async () => {
      await nextTick()
    })
    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]
      document.documentElement.animate(
        {
          clipPath: theme === 'light' ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 400,
          easing: 'ease-in',
          pseudoElement: theme === 'light' 
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
        }
      )
    })
  }
  const initTheme = () => {
    if(import.meta.env.SSR){
      return undefined
    }
    if(typeof localStorage !== 'undefined' && localStorage.getItem('theme')){
      return localStorage.getItem('theme')
    }
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  }
  useEffect(() => {
    const themes = initTheme()
    setTheme(themes)
    const root = document && document.documentElement
    if(theme === 'light'){
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }
  }, [theme])
  return (
    <div className="mr-3 flex justify-center items-center">
      <Icon className="w-[1.5rem] mr-2" icon="mdi:github" style={{ fontSize: '36px' }} />
      <div data-toggle-theme onClick={e => toggleTheme(e)}>
        {
          theme && theme === 'dark'
          ? <Icon className="w-[1.5rem]" icon="ph:sun"  style={{ fontSize: '36px' }}/>
          : <Icon className="w-[1.5rem]" icon="ph:moon" style={{ fontSize: '36px' }} />
        }
      </div>
      {/* 自动变化动画 */}
      {/* <Icon className='w-[1.5rem]' style={{ fontSize: '36px' }} icon="ph:download-light" /> */}
    </div>
  )
}
