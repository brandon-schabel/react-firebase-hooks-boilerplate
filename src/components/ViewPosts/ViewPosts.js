import React from "react"
import { useCollection } from "react-firebase-hooks/firestore"

import { collections } from "../../firebase"

export const ViewPosts = () => {
  const [ snapshot, loading, error ] = useCollection(collections.posts)

  return (
    <div>
      {error && <strong>Error: {error}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {snapshot && (
        <div>
          {snapshot.docs.map(doc => (
            <React.Fragment key={doc.id}>
              {JSON.stringify(doc.data())}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  )
}
