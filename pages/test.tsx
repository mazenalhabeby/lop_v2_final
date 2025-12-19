import React from "react"

const Test = ({utcTimeStamp}: any) => {
  const timeStamp = new Date().toDateString()
  const UTCtimeStamp = new Date(utcTimeStamp).toDateString()

  console.log(UTCtimeStamp)
  return (
    <div>
      <div>hell</div>
      <div>hell</div>
      <div>{timeStamp}</div>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const utcTimeStamp = new Date().getTime()
  return {
    props: {utcTimeStamp},
  }
}

export default Test
