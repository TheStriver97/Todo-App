function deleteNote(noteId) {
    // Make a request to the `/delete-note` endpoint with the note ID as the body.
    fetch("/delete-note", {
      method: "POST",
      body: JSON.stringify({ noteId }),
    });
  
    // Redirect the user back to the home page.
    window.location.href = "/";
  }
  