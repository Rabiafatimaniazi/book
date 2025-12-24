// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  textbookSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['introduction'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'perception',
        'control',
        'learning',
        'locomotion',
        'manipulation'
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Advanced Topics',
      items: [
        'ethics',
        'future-directions'
      ],
      collapsed: false,
    }
  ],
};

export default sidebars;