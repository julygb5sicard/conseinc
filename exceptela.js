// Assuming 'event' is an Event object passed to an event handler
const targetElement = event.target ? event.target.closest("[data-click-action]") : null;

// Use 'targetElement' for your logic
if (targetElement) {
  // Your logic here
}
