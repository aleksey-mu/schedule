import React from 'react'

const cardComponentHOC = (Component) => {
  return () => {
      console.log('123')
    return (
        <section>
            <Component />
        </section>
    )
  }
}

export default cardComponentHOC