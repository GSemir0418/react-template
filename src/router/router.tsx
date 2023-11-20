import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '@/page/homePage'
import { RouterPage } from '@/page/routerPage'

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/router-page', element: <RouterPage /> },
]

export const router = createBrowserRouter(routes)
