import React from "react"
import { useCollection } from "react-firebase-hooks/firestore"
import { collections } from "../../firebase"

export const ViewPosts = () => {
  const { error, loading, value } = useCollection(collections.posts)

  return (
    <div>
      {error && <strong>Error: {error}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {value && (
        <div>
          {value.docs.map(doc => (
            <React.Fragment key={doc.id}>
              {JSON.stringify(doc.data())},{" "}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  )
}
