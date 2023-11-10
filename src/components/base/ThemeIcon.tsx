import { Icon } from '@iconify/react'
import '@/styles/global.css'
import { useState, useEffect } from 'react';
export default function ThemeIcon() {
  const [theme, setTheme] = useState<null | undefined | string>('null')
  const toggleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme',t)
    const themes = initTheme()
    setTheme(themes)
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
      <div data-toggle-theme onClick={toggleTheme}>
        {
          theme && theme === 'dark'
          ? <Icon className="w-[1.5rem] " icon="ph:sun"  style={{ fontSize: '36px' }}/>
          : <Icon className="w-[1.5rem] " icon="ph:moon" style={{ fontSize: '36px' }} />
        }
      </div>
    </div>
  )
}
