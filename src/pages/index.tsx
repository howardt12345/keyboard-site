import { Layout } from "@components"
import * as React from "react"

// markup
const IndexPage = () => {
  return (
    <Layout animateNav={false} isHome={true} footer={true}>
      <h1>Home Page</h1>
    </Layout>
  )
}

export default IndexPage
