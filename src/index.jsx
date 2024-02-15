import { createRoot } from 'react-dom/client'
import './styles.css'
import { App } from './App'
import { Leva } from 'leva'
import { Suspense } from 'react'

function Overlay() {
  return (
    <div className='container'>
      <div className='main-title'>
        <h1>Ngo Gia Nhat Son</h1>

        <div className='buttons'>
          <button
            onClick={() => {
              window.open(
                'https://ngns.id.vn',
                'tab'
              )
            }}
          >
            VIEW WEBSITE
          </button>

          <button
            onClick={() => {
              window.open(
                'https://github.com/ngns2002',
                'tab'
              )
            }}
          >
            VIEW GITHUB TO ME
          </button>
        </div>

        <h2>
        Copyright © {' '}
          <a href='https://ngns.id.vn'>NGO GIA NHAT SON</a>
        </h2>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <Suspense fallback='loading...'>
    <App />
    <Overlay />
    <Leva collapsed />
  </Suspense>
)
