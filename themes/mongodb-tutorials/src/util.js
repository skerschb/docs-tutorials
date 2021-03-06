import { Deluge } from 'rigning-non-greni';
import elementClass from 'element-class'
import React from 'react'
import ReactDOM from 'react-dom'
import Velocity from 'velocity-animate'

const utils = {
  setupCopyButtons () {
    const copyableBlocks = document.getElementsByClassName('highlight')
    for (const highlightElement of copyableBlocks) {
      const text = highlightElement.innerText.trim()
      const copyButtonContainer = document.createElement('div')
      const copyButton = document.createElement('button')
      copyButtonContainer.className = 'copy-button-container'
      copyButton.className = 'copy-button'
      copyButton.appendChild(document.createTextNode('Copy'))
      copyButtonContainer.appendChild(copyButton)
      highlightElement.insertBefore(copyButtonContainer, highlightElement.children[0])
      copyButton.addEventListener('click', () => {
        const tempElement = document.createElement('textarea')
        document.body.appendChild(tempElement)
        tempElement.value = text
        tempElement.select()

        try {
          const successful = document.execCommand('copy')
          if (!successful) {
            throw new Error('Failed to copy')
          }
        } catch (err) {
          console.error('Failed to copy')
          console.error(err)
        }

        document.body.removeChild(tempElement)
      })
    }
  },

  setupSidebar () {
    const tocLinks = document.querySelectorAll('.toc__link')

    tocLinks.forEach((link) => {
      // handle opening & closing of the toc
      const nestedList = link.nextElementSibling

      if (nestedList) {
        link.addEventListener('click', (e) => {
          const $link = elementClass(link)

          if ($link.has('toc__link--open')) {
            $link.remove('toc__link--open')
            Velocity(nestedList, 'slideUp', { duration: 400 })
          } else {
            $link.add('toc__link--open')
            Velocity(nestedList, 'slideDown', { duration: 400 })
          }
        })
      }

      link.addEventListener('click', (e) => {
        tocLinks.forEach(l => elementClass(l).remove('toc__link--active'))
        elementClass(link).add('toc__link--active')
      })
    })
  },

  // this is currently only used on the landing pages
  setupList () {
    const links = document.querySelectorAll('.list__item__title')

    links.forEach((link) => {
      const nestedList = link.nextElementSibling

      link.parentElement.addEventListener('click', (e) => {
        const $link = elementClass(link)

        if ($link.has('list__item--open')) {
          $link.remove('list__item--open')
          Velocity(nestedList, 'slideUp', { duration: 400 })
        } else {
          $link.add('list__item--open')
          Velocity(nestedList, 'slideDown', { duration: 400 })
        }
      })
    })
  },

  // This is copied from docs-tools
  setupFeedback () {
    // We require DOM storage. Don't show anything if support is not present.
    if (window.localStorage === undefined) { return; }

    const project = document.body.getAttribute('data-project');
    const pagename = document.querySelector('.main').getAttribute('data-pagename');
    const ratingPanelElement = document.getElementById('rating-panel');
    
    ratingPanelElement.innerText = '';

    if (ratingPanelElement) {
        const deluge = new Deluge(project, pagename, ratingPanelElement).
            askFreeformQuestion('reason', 'What were you looking for?').
            askQuestion('findability', 'Did you find it?').
            askQuestion('accuracy', 'Was the information you found <strong>accurate</strong>?').
            askQuestion('clarity', 'Was the information <strong>clear</strong>?').
            askQuestion('fragmentation', 'Was the information you needed <strong>' +
                        'all on one page</strong>?');

        function show() { deluge.open(); }
        for (const element of document.querySelectorAll('.toc__link--deluge')) {
            element.addEventListener('click', show);
        }
    }
  },
}

export default utils
