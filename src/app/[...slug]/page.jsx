import React from "react";

export default function page({ params }) {
  console.log(params.slug);
  return <div>slug: {params.slug[0]}</div>;
}
