```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server
    User->>Browser: Enters text into the text field
    User->>Browser: Clicks Save button
    Browser->>Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
    Server-->>Browser: Returns 201 code and data with new note among
    Browser-->>User: List with all notes
```
