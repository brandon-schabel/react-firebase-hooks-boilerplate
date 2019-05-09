import React from "react"
import { useCollection } from "react-firebase-hooks/firestore"
import { db } from "../../firebase"

export const ViewPosts = () => {
  const { error, loading, value } = useCollection(db.collection("posts"))

  return (
    <div>
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
