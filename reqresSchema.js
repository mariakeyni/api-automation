const contoh = {
  "type": "object",
  "properties": {
    "title": {
      "type": "string"
    },
    "userId": {
      "type": "integer"
    },
    "id": {
      "type": "string"
    },
    "createdAt": {
      "type": "string"
    }
  },
  "required": [
    "title",
    "userId",
    "id",
    "createdAt"
  ]
}
pm.test("json schema harus bener", function() {
    pm.response.to.have.jsonSchema(contoh)
})