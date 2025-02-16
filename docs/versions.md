# Milestones

## Milestone "Based version"

Minimal version is named - "Counter"

### `Counter` backend API
GET  /api/joke      → Fetch the counter
POST /api/joke/:id  → Submit an increment counter
:id is ignored

The counter will be saved KV storage.

### `Counter` User Interface
The counter will be displayed in a web page.

User can increment the counter.
User can get the counter.

Other users see changing the counter instantly.
