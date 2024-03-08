import { useState } from 'react'
import ReactDOM from 'react-dom'

export const useModal = (onClose = () => {}) => {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  const Modal = ({ children }) =>
    isOpen
      ? ReactDOM.createPortal(
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
            onClick={close}>
            <div
              className="rounded-lg shadow-lg overflow-hidden transform transition-all max-w-lg w-full border-2 bg-black"
              onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-end p-2">
                <button
                  onClick={close}
                  className="text-gray-300 hover:text-gray-400 w-7 h-7">
                  <span className="text-xl">&times;</span>
                </button>
              </div>
              <div className="p-4">{children}</div>
            </div>
          </div>,
          document.getElementById('modal-root'),
        )
      : null

  return { open, close, Modal }
}
