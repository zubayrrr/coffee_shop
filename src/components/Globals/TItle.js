import React from "react"

export default function TItle({ title }) {
  return (
    <div className="mb-3">
      <h1 className="text-center display-4 text-capitalize font-weight-bold">
        {title}
      </h1>
    </div>
  )
}
