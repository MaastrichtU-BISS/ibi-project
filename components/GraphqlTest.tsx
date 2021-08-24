import React from 'react'
import { useFindManyPostQuery } from '@root/api/graphql'

export const GraphqlTest = () => {
  const { loading, error, data } = useFindManyPostQuery()

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <div>
      {data?.findManyPost?.map(({ id, title }) => (
        <div>{`${id}: ${title}`}</div>
      ))}
    </div>
  )
}
