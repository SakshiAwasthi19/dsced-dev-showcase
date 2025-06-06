
import { Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-3 bg-slate-800/80 hover:bg-slate-700/80 backdrop-blur-sm rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg border border-slate-600"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-slate-300" />
      )}
    </button>
  )
}

export default ThemeToggle
