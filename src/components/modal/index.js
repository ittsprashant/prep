import React from 'react'

function Modal() {
  return (
    <div class="popup-overlay">
    <div class="popup-content">
        <h3>Popup Title</h3>
        <p>This is the content of your modal window.</p>
        <button class="close-btn">Close</button>
    </div>
</div>
  )
}

export default Modal