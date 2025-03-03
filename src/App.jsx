import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

import { Home, About, Blog, Single, Post, CreatePost, Login } from './components/pages';
import { CompanyInfo, Teams } from './components/pages/about/components';
import { SinglePost } from './components/pages/post/SinglePost';
import { NotFound404 } from './components/pages/NotFound404';
import RequireLogin from './HOC/RequireLogin';


const App = () => {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="about" element={<About />}>
          <Route index element={<Teams />} />
          <Route path="teams" element={<Teams />} />
          <Route path="company-info" element={
            <RequireLogin>
              <CompanyInfo />
            </RequireLogin>
          }
          />
        </Route>

        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<Single />} />
        <Route path="blog/new" element={
          <RequireLogin>
            <CreatePost />
          </RequireLogin>
        } />

        <Route path='post' element={<Post />} />
        <Route path="post/:id" element={<SinglePost />} />

        <Route path='login' element={<Login />} />

        <Route path='*' element={<NotFound404 />} />
      </Route>

    </Routes>
  )
}

export default App






