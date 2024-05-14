```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server
    User->>Browser: Enters text into the text field
    User->>Browser: Clicks Save button
    Browser->>Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/notes request with note content
    Server-->>Browser: Confirmation response (200 OK)
    Browser-->>User: Note saved successfully
```
