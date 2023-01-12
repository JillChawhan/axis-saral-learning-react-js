import React, { useState } from 'react'
import "./SlideBar.css"
import SOP from './SlideBarDocs/SOP';

const SlideBar = () => {
  const [document, setDocument] = useState({
    "title": "STATEMENT OF PURPOSE",
    "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  })
  let scd = {
    "title": "SPECIFICATION CONTROL DOCUMENT",
    "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  }


  let policy = {
    "title": "POLICIES",
    "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  }

  let sop = {
    "title": "STATEMENT OF PURPOSE",
    "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  }

  const scdClick =() => {
    setDocument(scd)
  }

  const policyClick= () => {
    setDocument(policy)
  }

  const sopClick = () => {
    setDocument(sop)
  }


  return (
    <>
    <div className='div3'>
      <div className='div1'>
        <h4>DOCUMENTS</h4>
        <ul>
        <li onClick={sopClick}>SOP </li>
        <li onClick={scdClick}> SCD </li>
        <li onClick={policyClick}> POLICIES </li>
        <li> OPPORTUNITIES </li>
        </ul>
      </div>
      <div className='div2'>
      <SOP title={document.title} body={document.body}/>

      </div>
      </div>
    </>
  )
}

export default SlideBar;
