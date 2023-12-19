import React from 'react'
import React01 from './a_React/React01'
import React02 from './a_React/React02'
import Component01 from './c_Component/Component01'
import Component02 from './c_Component/Component02'
import Route01 from './b_Route/Route01'

// 1219 폴더 내의 전체 컴포넌트를 담는 폴더
export default function Index() {
  return (
    <div>
      <h1>a_React</h1>
      <br />
      <br />
      <h2>* React01</h2>
      <React01 />
      <br />
      <h2>* React02</h2>
      <React02 />
      <hr />

      <h1>b_Component</h1>
      <br />
      <br />
      <h2>* Component01</h2>
      <Component01 />
      <br />
      <h2>* Component02</h2>
      <Component02 />
      <hr />

      <h1>c_Route</h1>
      <br />
      <br />
      <Route01 />
    </div>
  )
}
